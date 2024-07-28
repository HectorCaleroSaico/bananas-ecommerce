import type { Metadata } from 'next'
import { getJsonContent } from '@/actions'
import { Sidebar, TopMenu } from '@/components/ui'
import { HiHeart } from 'react-icons/hi2'
import '../globals.css'

export const metadata: Metadata = {
    title: '2 Compra en línea, envíos a todo el Perú. | Platanitos',
    description: '2 Variedad en marcas de zapatos, ropa, accesorios, belleza, cuidado personal, hogar, bebidas, alimentos, libros y más. Envíos a todo el Perú. Call center 24/7.'
}

export default async function ShopLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const categories = await getJsonContent('categories')

    return (
        <main className='min-h-screen'>
            <header>
                <TopMenu categories={ categories }/>
                <Sidebar/>
            </header>
            { children }
            <footer className='py-8 flex flex-row justify-center space-x-2 bg-muted w-full'>
                <span className='text-xs font-medium'>Hecho con</span>
                <HiHeart className='w-5 h-5 text-primary'/>
                <span className='text-xs font-medium'>por platanitos</span>
            </footer>
        </main>

    )

}