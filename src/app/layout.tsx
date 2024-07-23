import type { Metadata } from 'next'
import { font } from '@/config'
import './globals.css'

export const metadata: Metadata = {
    title: 'Platanitos',
    description: 'Tienda online Platanitos.com'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (

        <html lang='en'>
            <body className={ `${font.notoSansKr.className} tracking-wide` }>
                { children }
            </body>
        </html>

    )

}