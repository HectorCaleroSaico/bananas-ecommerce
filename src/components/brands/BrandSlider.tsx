'use client'

import Link from 'next/link'
import { useSlider } from '@/hooks'
import { Brand, BreakPointCount } from '@/interfaces'
import { BrandSliderItem } from './BrandSliderItem'

interface Props {
    brands: Brand[]
}

const breakPointsCount: BreakPointCount = {
    xl: 2,
    lg: 3,
    md: 4,
    default: 6
};

export const BrandSlider = ({ brands }: Props) => {

    const { countItems, currentSlide, nextSlide } = useSlider(breakPointsCount)

    return (
        
        <section className='w-full relative overflow-hidden space-y-2'>
            <div 
                className='flex flex-row w-full transition-transform ease-out duration-700 scroll-smooth snap-x snap-mandatory'
                style={{
                    transform: `translateX(-${currentSlide.position}%)`
                }}
            >
                {
                    brands.map(brand => <BrandSliderItem key={ brand.alias } brand={ brand }/>)
                }
                <article
                    className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-[350px] shrink-0 grow-0 flex flex-col items-center justify-center overflow-hidden py-4 px-2 rounded-lg'
                >
                    <Link
                        href='/brands'
                        className='w-full h-full bg-muted hover:bg-gray-200 flex items-center justify-center rounded-lg transition-all'
                    >
                       <span className='text-xs font-medium text-center'>Ver más</span>
                    </Link>
                </article>
            </div>
            <ul className='flex items-center justify-center gap-4'>
                {
                    Array.from({ length: countItems }).map((value, index) => 
                        <button key={ index }
                            className={ `${currentSlide.current === (index) ? 'bg-primary' : 'bg-gray-200'} transition-all w-3 h-3 rounded-full` }
                            onClick={ () => nextSlide(index) }
                        ></button>
                    )
                }
            </ul>
        </section>

    )

}