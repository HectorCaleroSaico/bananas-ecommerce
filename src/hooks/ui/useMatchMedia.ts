import { useEffect, useState } from 'react'

export const useMatchMedia = (mediaQuery: string) => {

    const [isMatch, setIsMatch] = useState<boolean>(false)

    useEffect(() => {

        const mediaWatcher = window.matchMedia(mediaQuery)
        
        const componentChangeHandler = () => setIsMatch(mediaWatcher.matches)

        componentChangeHandler()

        mediaWatcher.addEventListener('change', componentChangeHandler)

        return () => {

            mediaWatcher.removeEventListener('change', componentChangeHandler)

        }

    }, [mediaQuery])

    return {
        isMatch
    }

}