import { notFound } from 'next/navigation'

interface Props {
    params: {
        category: string
    }
}

export default function CategoryPage({ params } : Props) {

    const { category } = params

    if(category === 'kids') notFound()

    return (

        <main>
            <h1>Category Page</h1>
        </main>

    )
    
}