import { ProductGrid } from '@/components/products'
import { Title } from '@/components/ui'
import { initialData } from '@/seed/seed'

const products = initialData.products

export default function Home() {

    return (

        <main className='w-full min-h-screen px-5 py-2'>
            <Title title='Tienda' subtitle='Todos los productos'/>
            <ProductGrid products={ products }/>
        </main>

    )
    
}