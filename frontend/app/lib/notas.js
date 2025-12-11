import {api} from "@/lib/utils";

export async function getNotes(){
    try {
        const data = await api.get(process.env.API_BASE_URL);
        return {
            success: true,
            data: data,
            error: null,
        }
    } catch (error) {
        console.error(error)
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

