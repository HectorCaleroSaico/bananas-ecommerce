import Link from 'next/link'
import Image from 'next/image'
import { Brand } from '@/interfaces'
import { domains } from '@/config'

interface Props {
    brand: Brand
}

export const BrandSliderItem = ({ brand }: Props) => {

    return (
        
        <article className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-[350px] shrink-0 grow-0 flex flex-col items-center overflow-hidden px-2 py-4'>
            <Link
                href={ `/brand/${brand.alias}` }
                className='w-full h-full bg-muted hover:bg-gray-200 flex justify-center items-center rounded-lg transition-all'
            >
                <Image
                    src={ `${domains.cdn}/${brand.img}` }
                    alt={ brand.alias }
                    width={ 100 }
                    height={ 100 }
                    style={{ width: 'auto', height: 'auto' }}
                />
            </Link>
        </article>

    )

}

/*
<main className='w-full flex flex-col justify-between px-4 pb-4 bg-muted rounded-br-lg rounded-bl-lg space-y-2'>
                <div className='w-full flex flex-row justify-between'>
                    <Badge className='rounded-2xl'>Nuevo</Badge>
                    <Badge className='rounded-2xl bg-destructive'>-45%</Badge>
                </div>
                <Link 
                    href={ `/products/${product.alias}` }
                    className='text-sm font-medium hover:text-primary'
                >
                    <span className='font-bold'>{ product.brand } </span>
                    <span className='line-clamp-2 h-10'> { product.model } </span>
                </Link>
                <p className='flex flex-row gap-x-2'>
                    <span className='font-semibold'>S/ { parseFloat(product.price).toFixed(2) }</span>
                    <span className='text-xs font-normal line-through'>S/ { parseFloat(product.price).toFixed(2) }</span>
                </p>
            </main>
            */