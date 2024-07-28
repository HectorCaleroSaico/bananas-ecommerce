import { Metadata } from 'next'
import { Title } from '@/components/ui'
import { ProductGrid } from '@/components/products'
import { initialData } from '@/seed/seed'

export const metadata: Metadata = {
    title: 'Compra en línea, envíos a todo el Perú.',
    description: 'Variedad en marcas de zapatos, ropa, accesorios, belleza, cuidado personal, hogar, bebidas, alimentos, libros y más. Envíos a todo el Perú. Call center 24/7.'
}

const products = initialData.products

export default async function Home() {

    return (

        <main className='w-full min-h-screen px-5 py-2'>
            <Title title='Tienda' subtitle='Todos los productos'/>
            <ProductGrid products={ products }/>
        </main>

    )
    
}