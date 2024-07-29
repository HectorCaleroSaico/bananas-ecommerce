'use server'

export const getJsonContent = async (jsonObject: string) => {

    const jsonURL = 'http://localhost:3001'

    try {
        
        const response = await fetch(`${jsonURL}/${jsonObject}`, {
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