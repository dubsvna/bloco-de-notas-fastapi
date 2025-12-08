import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/notes';

async function fetchWithTimeout(url, options = {}) {
  const {timeout = 10000, ...fetchOptions} = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    });

    clearTimeout(id);

    if (!response.ok) {
      const error = new Error(`HTTP ${response.status}: ${response.statusText}`)
      error.status = response.status;
      error.response = response;
      throw error;
    }
    return await response.json();
  } catch (error) {
    clearTimeout(id);


    if (error.name === 'AbortError') {
      throw new Error('Request timeout - Servidor não respondeu.')
    }
    if ((error.name === 'TypeError') && error.message.includes('Failed to fetch')) {
      throw new Error('Não foi possível conectar ao servidor. Verifique se o backend está sendo executado.')
    }

    throw error;
  }
}

export async function getNotes() {
  try {
    const notes = await fetchWithTimeout(`${API_BASE_URL}`);
    return {
      success: true,
      data: notes,
      error: null,
    }
  } catch (error) {
    console.error('Erro ao buscar notas:', error);
    return {
      success: false,
      data: null,
      error: {
        message: error.message,
        status: error.status || 500,
        details: error.response ? await error.response.text().catch(() => null) : null,
      }
    }
  }
}