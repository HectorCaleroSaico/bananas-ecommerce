'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useUIStore } from '@/store'
import { Button } from '../button'
import { Separator } from '../separator'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { clsx } from 'clsx'
import { HiArrowLeftOnRectangle, HiMiniCamera, HiMiniMagnifyingGlass, HiMiniXMark, HiOutlineBuildingStorefront, HiOutlineGift, HiOutlineMapPin, HiOutlineNewspaper, HiOutlinePencilSquare, HiOutlineQrCode, HiOutlineQuestionMarkCircle, HiOutlineShoppingBag, HiOutlineUserCircle, HiOutlineWallet } from 'react-icons/hi2'
import { BsCoin } from 'react-icons/bs'

export const Sidebar = () => {

    const { isSideMenuOpen, closeMenu } = useUIStore(state => ({
        isSideMenuOpen: state.isSideMenuOpen,
        closeMenu: state.closeSideMenu
    }))

    const userSession = true
    
    return (

        <>
            {
                isSideMenuOpen && (
                    <>
                        { /* Gray background */ }
                        <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'/>
                        { /* Blur background */ }
                        <div 
                            className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-xs'
                            onClick={ closeMenu }    
                        />
                    </>
                )
            }

            <aside 
                id='aside-menu' 
                className={
                    clsx(
                        'fixed px-5 py-4 right-0 top-0 w-full sm:w-[450px] h-full z-20 bg-white shadow-2xl overflow-auto transform transition-all duration-300',
                        {
                            'translate-x-full': !isSideMenuOpen
                        }
                    )
                }
            >
                <button
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={ closeMenu }
                >
                    <HiMiniXMark className='w-6 h-6'/>
                </button>
                <header className='mt-6 sm:mt-10 mb-4'>
                    <search className='relative'>
                        <HiMiniMagnifyingGlass className='absolute top-2.5 left-2 w-5 h-5'/>
                        <input 
                            type='text'
                            placeholder='Busca lo que necesitas' 
                            className='w-full px-10 py-2 border-b-2 text-md font-light focus:outline-none focus:border-primary'
                        />
                    </search>
                </header>
                <nav className='space-y-3'>
                    {
                        userSession && (
                            <section className='flex flex-col space-y-2'>
                                <div className='flex flex-row px-4 py-3 justify-between items-center rounded-md transition-all hover:bg-secondary group'>
                                    <figure className='relative'>
                                        <button 
                                            className='absolute rounded-full bg-primary text-white p-1 z-50 top-14 sm:top-16 -right-1.5 sm:-right-1'
                                            onClick={ () => alert('Cambio de Avatar') }    
                                        >
                                            <HiMiniCamera className='w-5 h-5'/>
                                        </button>
                                        {/*<span className='absolute px-6 text-xs font-semibold text-white z-50 -top-0.5 -right-0.5 rounded-full bg-primary'>3</span>*/}
                                        <Avatar className='w-[90px] h-[90px] sm:w-[100px] sm:h-[100px]'>
                                            <AvatarImage
                                                src='https://d3fvqmu2193zmz.cloudfront.net/users/500x500/FDBZ2IPSGTDS-1718291593.webp'
                                                alt='user'
                                            />
                                            <AvatarFallback>HC</AvatarFallback>
                                        </Avatar>
                                    </figure>
                                    <Link
                                        href='/profile'
                                        className='flex flex-col space-y-1'>
                                        <span className='text-sm font-semibold leading-none'>Hector Calero Saico</span>
                                        <span className='line-clamp-1 text-xs'>hectorcalerosaico@gmail.com</span>
                                    </Link>
                                    <button 
                                        className='cursor-pointer group-hover:text-primary'
                                        onClick={ () => alert('Qr del usuario') }
                                    >
                                        <HiOutlineQrCode className='w-10 h-10'/>
                                    </button>
                                </div>

                                <Link 
                                    href='/wallet'
                                    className='flex justify-start items-center px-4 py-3 gap-3 rounded-md transition-all hover:bg-secondary hover:text-primary'
                                >
                                    <HiOutlineWallet className='w-6 h-6'/>
                                    <span className='text-sm font-semibold'>Monedero</span>
                                </Link>
                                <Link 
                                    href='/points'
                                    className='flex justify-start items-center px-4 py-3 gap-3 rounded-md transition-all hover:bg-secondary hover:text-primary'
                                >
                                    <BsCoin className='w-6 h-6'/>
                                    <span className='text-sm font-semibold'>Puntos</span>
                                </Link>
                                <Link 
                                    href='/orders'
                                    className='flex justify-start items-center px-4 py-3 gap-3 rounded-md transition-all hover:bg-secondary hover:text-primary'
                                >
                                    <HiOutlineShoppingBag className='w-6 h-6'/>
                                    <span className='text-sm font-semibold'>Ordenes</span>
                                </Link>
                                <Link 
                                    href='/address'
                                    className='flex justify-start items-center px-4 py-3 gap-3 rounded-md transition-all hover:bg-secondary hover:text-primary'
                                >
                                    <HiOutlineMapPin className='w-6 h-6'/>
                                    <span className='text-sm font-semibold'>Direcciones</span>
                                </Link>
                            </section>
                        )
                    }

                    <Separator/>

                    <section className='flex flex-col space-y-2'>
                        <Link 
                            href='/egiftcard'
                            className='flex justify-start items-center px-4 py-3 gap-3 rounded-md transition-all hover:bg-secondary hover:text-primary'
                        >
                            <HiOutlineGift className='w-6 h-6'/>
                            <span className='text-sm font-semibold'>eGift Card</span>
                        </Link>
                        <Link 
                            href='https://resikla.pe/'
                            target='_blank'
                            className='flex justify-start items-center px-4 py-3 gap-3 rounded-md transition-all hover:bg-secondary hover:text-primary'
                        >
                            <Image
                                src='https://d13xymm0hzzbsd.cloudfront.net/1/20230928/16959200690612.svg'
                                alt='logo'
                                width='26'
                                height='26'
                            />
                            <span className='text-sm font-semibold'>Resikla</span>
                        </Link>
                        <Link
                            href='/locations'
                            className='flex justify-start items-center px-4 py-3 gap-3 rounded-md transition-all hover:bg-secondary hover:text-primary'
                        >
                            <HiOutlineBuildingStorefront className='w-6 h-6'/>
                            <span className='text-sm font-semibold'>Ubícanos</span>
                        </Link>
                        <Link
                            href='/blog'
                            className='flex justify-start items-center px-4 py-3 gap-3 rounded-md transition-all hover:bg-secondary hover:text-primary'
                        >
                            <HiOutlineNewspaper className='w-6 h-6'/>
                            <span className='text-sm font-semibold'>Blog</span>
                        </Link>
                        <Link
                            href='/blog'
                            className='flex justify-start items-center px-4 py-3 gap-3 rounded-md transition-all hover:bg-secondary hover:text-primary'
                        >
                            <HiOutlineQuestionMarkCircle className='w-6 h-6'/>
                            <span className='text-sm font-semibold'>Centro de Ayuda</span>
                        </Link>
                    </section>
                </nav>
                
                <Separator/>

                <footer>
                    <Button
                        className='flex justify-start items-center w-full px-4 mt-4 py-6 gap-3 transition-all' 
                        variant='ghost'
                    >
                        <HiArrowLeftOnRectangle className='w-6 h-6'/>
                        <span className='text-md font-semibold'>Cerrar Sesión</span>
                    </Button>
                </footer>


            </aside>        
        </>

    )

}