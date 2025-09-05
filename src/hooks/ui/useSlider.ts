import { useEffect, useState } from 'react'
import { BreakPointCount } from '@/interfaces'

export const useSlider = (breakPointConfig: BreakPointCount) => {

    const [countItems, setCountItems] = useState(0)
    const [breakPoint, setBreakPoint] = useState<string>('default')
    const [currentSlide, setCurrentSlide] = useState({
        position: 0,
        current: 0
    })

    const nextSlide = (indexSlide: number) => {

        const nextPosition = indexSlide*100

        console.log('Next position: ', {
            ...currentSlide,
            position: nextPosition,
            current: indexSlide
        })

        setCurrentSlide((currentSlide) => ({
            ...currentSlide,
            position: nextPosition,
            current: indexSlide
        }))

    }

    useEffect(() => {

        const updateMediaQuery = () => {

            if (!breakPointConfig) return

            const width = window.innerWidth

            switch (true) {
                case width >= 1280:
                    setBreakPoint('xl')
                   break
                   
                case width >= 1024:
                    setBreakPoint('lg')
                  break

                case width >= 768:
                    setBreakPoint('md')
                   break

                default:
                    setBreakPoint('default')
            }

        }

        updateMediaQuery()

        window.addEventListener('resize', updateMediaQuery)

        return () => window.removeEventListener('resize', updateMediaQuery)

    }, [])

    useEffect(() => {

        if (breakPointConfig) {

            setCountItems(breakPointConfig[breakPoint])
            setCurrentSlide({
                position: 0,
                current: 0
            })

        }

        return

    }, [breakPoint])

    return {
        countItems,
        currentSlide,
        nextSlide
    }

}