import { domains } from '@/config'
import { BandBanner } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    banners: BandBanner[]
}

export const BandBanners = ({ banners }: Props) => {

    const sendBanner = banners.find(banner => banner.id === 'send')
    const restBanners: BandBanner[] = banners.reduce((accumulator: BandBanner[], banner: BandBanner) => {

        if (banner.id === 'send') return accumulator

        accumulator.push(banner)

        return accumulator

    }, [])

    return (

        <section className='flex flex-col gap-y-3 w-full'>

            {
                sendBanner && (
                    <Link
                        href={ sendBanner.path }
                        className='relative w-full rounded-lg h-14 overflow-hidden'
                    >
                        <Image
                            src={ `${domains.cdn}/${sendBanner.img}` }
                            alt={ sendBanner.description }
                            className='w-full relative rounded-lg'
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </Link>
                )
            }
            <article className='flex flex-col gap-y-2 sm:flex-row w-full'>
                {
                    restBanners && restBanners.map(banner => (
                        <Link
                            key={ banner.id }
                            href={ banner.path }
                        >
                            <Image
                                src={ `${domains.cdn}/${banner.img}` }
                                alt={ banner.description }
                                className='w-full rounded-lg sm:rounded-none'
                                width={ banner.content.width }
                                height={ banner.content.height }
                            />
                        </Link>
                    ))
                }
            </article>
        </section>

    )

}