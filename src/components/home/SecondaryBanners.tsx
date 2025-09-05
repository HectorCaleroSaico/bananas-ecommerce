import Link from 'next/link'
import Image from 'next/image'
import { SliderBanner } from '@/interfaces'
import { domains } from '@/config'

interface Props {
    banners: SliderBanner[]
}

export const SecondaryBanners = ({ banners }: Props) => {

    const countBanners = banners.length

    const responsiveClass = countBanners > 3 ? 'grid grid-cols-2' : 'flex flex-col'

    return (

        <div className={ `${responsiveClass} md:flex md:flex-row w-full gap-4` }>
            {
                banners && banners.map(banner => (
                    <Link
                        key={ banner.img }
                        href={ banner.path }
                    >
                        <Image 
                           src={ `${domains.cdn}/${banner.img}` }
                           alt={ banner.color }
                           className='rounded-lg'
                           width={ banner.width }
                           height={ banner.height }
                           unoptimized
                        />
                    </Link>
                ))
            }
        </div>

    )

}