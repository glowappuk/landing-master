import axios from 'axios'

export const request = async (url, method, payload, formData, params) => {

    const api = `https://glowapp.home.kg/api/`

    try {
        const res = await axios({
            url: `${api}${url}`,
            headers: {
                ...(formData && {
                    'Content-Type': 'multipart/form-data'
                })
            },
            method,
            data: payload,
            params: params,
        })

        return res.data
    } catch (error) {
      
        console.dir(error)
        throw error
    }
}

export async function getProfHelpCards() {
    return request(`sections/prof/`, 'GET')
}

export async function getRoomHelpCards() {
    return request(`sections/room/`, 'GET')
}

export async function getProfHelpCardDetail(id) {
    return request(`sections/prof/${id}`, 'GET')
}

export async function getRoomHelpCardDetail(id) {
    return request(`sections/room/${id}`, 'GET')
}