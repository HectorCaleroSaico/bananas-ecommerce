import Link from 'next/link'
import Image from 'next/image'

interface Props {
    message?: string,
    redirect?: {
        name: string,
        redirectUrl: string
    },
    image?: string
}

export const PageNotFound = ({ message, redirect, image } : Props) => {

    return (

        <main className='flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle'>
            <section className='text-center px-5 mx-5 space-y-2'>
                <h2 className='text-9xl antialiased'>404</h2>
                <p className='font-semibold text-xl'>Whoops! Lo sentimos mucho.</p>
                <p className='text-sm'>{ message || 'No encontramos resultados que coincidan con tu búsqueda' }</p>
                <p className='font-light text-sm'>
                    <span>Puedes regresar a </span>
                    <Link 
                        href={ redirect?.redirectUrl || '/' } 
                        className='text-primary font-semibold hover:underline transition-all'
                    >
                        { redirect?.name || 'inicio' }
                    </Link>
                </p>
            </section>
            <Image 
                src={ image || 'https://d13xymm0hzzbsd.cloudfront.net/1/20220609/16547915259782.svg' }
                alt='bananaman'
                width='300'
                height='300'
                priority={ true }
                style={{ width: 'auto', height: 'auto' }}
            />
        </main>

    )

}