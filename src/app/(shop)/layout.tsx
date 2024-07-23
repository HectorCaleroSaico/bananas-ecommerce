import type { Metadata } from 'next'
import '../globals.css'
import { Sidebar, TopMenu } from '@/components/ui'

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
        </main>

    )

}