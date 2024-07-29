'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MainBanner } from '@/interfaces'
import { domains } from '@/config'
import Link from 'next/link'

interface Props {
    banners: MainBanner[],
    autoSlide?: boolean,
    autoSliteInterval?: number
}

export const MainBanners = ({ banners, autoSlide = false, autoSliteInterval = 4000 }: Props) => {

    const [currentSlide, setCurrentSlide] = useState<number>(0)

    //const prevSlide = () => setCurrentSlide((currentSlide) => currentSlide === 0 ? banners.length - 1 : currentSlide - 1)

    const nextSlide = () => setCurrentSlide((currentSlide) => currentSlide ===  banners.length - 1 ? 0 : currentSlide + 1)

    const handleSlide = (slideIndex: number) => setCurrentSlide(slideIndex)

    useEffect(() => {

        if(!autoSlide) return

        const sliderInterval = setInterval(nextSlide, autoSliteInterval)

        return () => clearInterval(sliderInterval)

    }, [])

    return (

        <section className='w-full relative overflow-hidden space-y-3 py-6 rounded-lg'>
            <figure 
                className='flex flex-row w-full transition-transform ease-out duration-700 scroll-smooth snap-x snap-mandatory'
                style={{
                    transform: `translateX(-${currentSlide*100}%)`
                }}
            >
                {
                    banners && ( 
                        banners.map(banner =>
                            <Link
                                key={ banner.id }
                                href={ banner.path }
                                className='flex flex-row shrink-0 grow-0 w-full overflow-hidden rounded-lg'
                            >
                                <Image
                                    src={ `${domains.cdn}/${banner.img}` }
                                    className='rounded-lg'
                                    alt={ banner.description }
                                    width={ banner.width }
                                    height={ banner.height }
                                    unoptimized
                                />
                            </Link>
                        ) 
                    )
                }
            </figure>
            {/*<div className='absolute inset-0 flex items-center justify-between p-4 md:p-28'>
                <button 
                    className='rounded-full p-1 shadow bg-muted hover:bg-white opacity-80 text-gray-800'
                    onClick={ prevSlide }
                >
                    <HiChevronLeft className='w-5 h-5'/>
                </button>
                <button 
                    className='rounded-full p-1 shadow bg-muted hover:bg-white opacity-80 text-gray-800'
                    onClick={ nextSlide }
                >
                    <HiChevronRight className='w-5 h-5'/>
                </button>
            </div>*/}
                <ul className='flex items-center justify-center gap-4'>
                {
                    banners && ( 
                        banners.map((banner, index) =>
                            <button 
                                key={ `${banner.id}-${index}` }
                                className={ `${currentSlide === index ? 'bg-primary' : 'bg-gray-200'} transition-all w-3 h-3 rounded-full`
                                    /*clsx(
                                        'bg-primary transition-all w-3 h-3 rounded-full',
                                        { 'bg-gray-200': currentSlide !== index }
                                    )*/
                                }
                                onClick={ () => handleSlide(index) }
                            ></button>
                        ) 
                    )
                }
                </ul>
        </section>
    )

}