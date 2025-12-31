import {api, API_NOTE_URL} from "@/lib/utils";

//serviço de Notas
const url = API_NOTE_URL

export async function getNotes(){
    try {
        const data = await api.get(url);
        return {
            success: true,
            data: data,
            error: null,
        }
    } catch (error) {
        console.error(`Erro ao obter notas: ${error}`)
        return {
            success: false,
            data: null,
            error: {
                message: error.message,
                status: error.status || 500,
                details: error.response ? await error.response.text().catch(() => null) : null
            }
        }
    }
}

export async function getNote(id) {
    try {
        const data = await api.get(`${url}/${id}`)
        return {
            success: true,
            data: data,
            error:null
        }
    } catch (error) {
        console.error(`Erro ao obter nota ID ${id}: ${error}`)
        return {
            success: false,
            data: null,
            error: {
                message: error.message,
                status: error.status || 500,
                details: error.response ? await error.response.text().catch(() => null) : null
            }
        }
    }
}

export async function updateNote(id, note) {
    try {
        const data = await api.put(`${url}/${id}`, note)
        return {
            success: true,
            data: data,
            error:null
        }
    } catch (error) {
        console.error(`Erro ao atualizar nota: ${error}`)
        return {
            success: false,
            data: null,
            error: {
                message: error.message,
                status: error.status || 500,
                details: error.response ? await error.response.text().catch(() => null) : null
            }
        }
    }
}

export async function createNote(note) {
    try {
        const data = await api.post(`${url}/create_nota`, note)
        return {
            success: true,
            data: data,
            error:null

        }
    } catch (error) {
        console.error(`Erro ao criar nota: ${error}`)
        return {
            success: false,
            data: null,
            error: {
                message: error.message,
                status: error.status || 500,
                details: error.response ? await error.response.text().catch(() => null) : null
            }
        }
    }
}

export async function deleteNote(id) {
    try {
        const data = await api.delete(`${url}/${id}`)
        return {
            success: true,
            data: {id},
            error:null
        }
    } catch (error) {
        console.error(`Erro ao deletar nota: ${error}`)
        return {
            success: false,
            data: null,
            error: {
                message: error.message,
                status: error.status || 500,
                details: error.response ? await error.response.text().catch(() => null) : null
            }
        }
    }
}