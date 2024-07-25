import type { Metadata } from 'next'
import '../globals.css'
import { Sidebar, TopMenu } from '@/components/ui'
import { HiHeart } from 'react-icons/hi2'

export const metadata: Metadata = {
    title: 'Compra en línea, envíos a todo el Perú. | Platanitos',
    description: 'Variedad en marcas de zapatos, ropa, accesorios, belleza, cuidado personal, hogar, bebidas, alimentos, libros y más. Envíos a todo el Perú. Call center 24/7.'
}

export default function ShopLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <main className='min-h-screen'>
            <header>
                <TopMenu/>
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