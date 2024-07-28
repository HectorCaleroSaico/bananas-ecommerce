'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Category } from '@/interfaces'
import { useUIStore } from '@/store'
import clsx from 'clsx'
import { HiOutlineHeart, HiOutlineMagnifyingGlass, HiOutlineShoppingCart } from 'react-icons/hi2'

interface Props {
    categories: Category[]
}

export const TopMenu = ({ categories }: Props) => {

    const openMenu = useUIStore(state => state.openSideMenu)
    const path = usePathname()

    return (

        <header className='flex flex-col items-center px-5 py-2 w-full'>
            
            <div className='flex justify-between items-center w-full'>
                <Link href='/'>
                    <Image
                        src='https://d13xymm0hzzbsd.cloudfront.net/1/20210803/16280081873660.svg'
                        className='hidden sm:block'
                        alt='logo'
                        width={ 150 }
                        height={ 150 }
                        priority={ true }
                    />
                    <Image
                        src='https://d13xymm0hzzbsd.cloudfront.net/landing_new/logotipo.svg'
                        className='block sm:hidden'
                        alt='logo'
                        width={ 40 }
                        height={ 40 }
                        priority={ true }
                    />
                </Link>
                <div className='flex items-center space-x-4'>
                    <Link 
                        href='/search'
                        className='p-1 rounded-full hover:bg-secondary'
                    >
                        <HiOutlineMagnifyingGlass className='w-5 h-5'/>
                    </Link>
                    <Link 
                        href='/favorites'
                        className='p-1 rounded-full hover:bg-secondary'
                    >
                        <HiOutlineHeart className='w-5 h-5'/>
                    </Link>
                    <Link 
                        href='/cart'
                        className='p-1 rounded-full hover:bg-secondary'    
                    >
                        <div className='relative'>
                            <span className='absolute px-1 text-xs font-semibold text-white -top-1.5 -right-1.5 rounded-full bg-primary'>
                                3
                            </span>
                            <HiOutlineShoppingCart className='w-5 h-5'/>
                        </div>
                    </Link>
                    <button 
                        className='px-4 py-2 rounded-md transition-all bg-gray-100 hover:bg-gray-200 text-xs font-medium'
                        onClick={ openMenu }
                    >
                        Menu
                    </button>
                </div>
            </div>

            <nav 
                className={
                    clsx(
                        'grid grid-cols-4 sm:flex sm:items-center gap-2 mt-4',
                        { 
                            'hidden': !(path === '/')
                        }
                    )
                }
            >
                {
                    categories && (
                        categories.map(category => 
                            <Link 
                                key={ category.id } 
                                href={ category.route }
                                className='p-6 bg-gray-100 hover:bg-gray-200 flex flex-row justify-center sm:bg-white sm:p-2 sm:py-1.5 rounded-md transition-all sm:hover:bg-gray-100'
                            >
                                <span className='text-xs font-medium text-center'>{ category.description }</span>
                            </Link>
                        )
                    )
                }
            </nav>

        </header>

    )

}