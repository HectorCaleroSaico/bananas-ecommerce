'use server'

export const getJsonContent = async (jsonObject: string) => {

    const jsonURL = 'http://localhost:3001'

    try {
        
        const response = await fetch(`${jsonURL}/${jsonObject}`, {
            method: 'GET'
        })

        const data = await response.json()

        console.log('Data: ', data)

        return data

    } catch (error) {
        
        console.error(error)

        return null

    }

}