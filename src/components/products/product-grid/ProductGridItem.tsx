'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/interfaces'
import { useState } from 'react'

interface Props {
    product: Product
}

export const ProductGridItem = ({ product } : Props) => {

    const [displayImage, setDisplayImage] = useState(product.images[0])

    const handleMouseEnter = () => setDisplayImage(product.images[1])

    const handleMouseLeave = () => setDisplayImage(product.images[0])

    return (
        <article className='rounded-md overflow-hidden fade-in'>
            <Link 
                href={ `/products/${product.slug}` }
            >
                <figure 
                    className='cursor-pointer'
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }
                >
                    <Image
                        src={ `/products/${displayImage}` }
                        className='rounded-md'
                        alt={ product.title }
                        width={ 500 }
                        height={ 500 }
                    />
                </figure>
            </Link>
            <p className='flex flex-col p-4'>
                <Link 
                    href={ `/products/${product.slug}` }
                    className='text-sm font-medium hover:text-primary'
                >
                    { product.title }
                </Link>
                <span className='font-semibold'>${ product.price }</span>
            </p>
        </article>
    )

}