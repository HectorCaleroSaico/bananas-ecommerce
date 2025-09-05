'use server'

export const getJsonContent = async (jsonObject: string, params: any = null) => {

    const jsonURL = `http://localhost:3001/${jsonObject}`
    const url = new URL(jsonURL)
    const paramsSearch = new URLSearchParams(params)
    url.search = paramsSearch.toString()

    try {
        
        const response = await fetch(url.toString(), {
            method: 'GET',
            cache: 'no-store'
        })

        const data = await response.json()

        return data

    } catch (error) {
        
        console.error(error)

        return null

    }

}