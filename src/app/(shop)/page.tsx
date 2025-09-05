import Link from 'next/link'
import { Metadata } from 'next'
import { getJsonContent } from '@/actions'
import { ProductSlider } from '@/components/products'
import { BandBanners, MainBanners, SecondaryBanners } from '@/components/home'
import { BrandSlider } from '@/components/brands'
import { Brand, Comment, SecondaryBanner } from '@/interfaces'
import { CommentSlider } from '@/components/comments'

export const metadata: Metadata = {
    title: 'Compra en línea, envíos a todo el Perú.',
    description: 'Variedad en marcas de zapatos, ropa, accesorios, belleza, cuidado personal, hogar, bebidas, alimentos, libros y más. Envíos a todo el Perú. Call center 24/7.'
}

export default async function Home() {

    const mainBanners = await getJsonContent('main-banners') || []
    const bandsBanners = await getJsonContent('banners') || []
    const secondaryBanners: SecondaryBanner[] = await getJsonContent('secondary-banners') || []
    const brands: Brand[] = await getJsonContent('brands', { _limit: 11 }) || []
    const comments: Comment[] = await getJsonContent('comments') || []

    return (

        <main className='w-full xl:w-[90%] 2xl:w-[1400px] mx-auto min-h-screen px-5 py-2 md:px-8'>
            {/*<Title title='Tienda' subtitle='Todos los productos'/>
            <ProductGrid products={ products }/>*/}
            <MainBanners banners={ mainBanners } autoSlide={true} />
            <BandBanners banners={ bandsBanners }/>
            <section className='flex flex-col w-full my-4 space-y-6'>
                {
                    secondaryBanners && secondaryBanners.map(banner => (
                        <article key={ banner.id } className='py-3'>
                            <SecondaryBanners banners={ banner.sliders }/>
                            <div className='pt-12 space-y-4'>
                                <header>
                                    <h1 className='text-xl font-bold'>{ banner.title }</h1>
                                    <h2 className='text-md font-normal'>{ banner.subTitle }</h2>
                                </header>
                                <ProductSlider products={ banner.items } pathBanner={ banner.path }/>
                            </div>
                        </article>
                    ))
                }
            </section>
            <section className='my-4 py-3'>
                <header>
                    <h1 className='text-xl font-bold'>Principales marcas</h1>
                    <h2 className='text-md font-normal'>Más de 500 marcas que te van a encantar</h2>
                </header>
                <BrandSlider brands={ brands }/>
            </section>
            <section className='my-4 py-3'>
                <header>
                    <h1 className='text-xl font-bold'>Comentarios de nuestros clientes</h1>
                    <h2 className='text-md font-normal'>Mira lo que opinan y siéntete más seguro</h2>
                </header>
                <CommentSlider comments={ comments }/>
            </section>
        </main>

    )
    
}