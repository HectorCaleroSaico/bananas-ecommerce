import { Metadata } from 'next'
import { ProductSlider } from '@/components/products'
import { initialData } from '@/seed/seed'
import { BandBanners, MainBanners, SecondaryBanners } from '@/components/home'
import { getJsonContent } from '@/actions'
import { SecondaryBanner } from '@/interfaces'

export const metadata: Metadata = {
    title: 'Compra en línea, envíos a todo el Perú.',
    description: 'Variedad en marcas de zapatos, ropa, accesorios, belleza, cuidado personal, hogar, bebidas, alimentos, libros y más. Envíos a todo el Perú. Call center 24/7.'
}

const products = initialData.products

export default async function Home() {

    const mainBanners = await getJsonContent('main-banners')
    const bandsBanners = await getJsonContent('banners')
    const secondaryBanners: SecondaryBanner[] = await getJsonContent('secondary-banners')

    //console.log('Secondary Banners: ', secondaryBanners)

    return (

        <main className='w-full xl:w-[90%] 2xl:w-[1400px] mx-auto min-h-screen px-5 py-2 md:px-8'>
            {/*<Title title='Tienda' subtitle='Todos los productos'/>
            <ProductGrid products={ products }/>*/}
            <MainBanners banners={ mainBanners } autoSlide={true} />
            <BandBanners banners={ bandsBanners }/>
            <section className='flex flex-col w-full my-4 space-y-6'>
                {
                    secondaryBanners && secondaryBanners.map(banner => (
                        <>
                            <SecondaryBanners banners={ banner.sliders }/>
                            <div>
                                <h1 className='text-xl font-bold'>{ banner.title }</h1>
                                <h2 className='text-md font-normal'>{ banner.subTitle }</h2>
                                <ProductSlider products={ banner.items }/>
                            </div>
                        </>
                    ))
                }
            </section>
        </main>

    )
    
}