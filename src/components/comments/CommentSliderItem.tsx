import { Comment } from '@/interfaces'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { getAvatarFallbackLetters, getAvatarFallbackBackground } from '@/utils/ui'
import { HiMiniStar, HiOutlineStar } from 'react-icons/hi2'

interface Props {
    comment: Comment
}

export const CommentSliderItem = ({ comment }: Props) => {

    return (

        <article className='w-full md:w-1/2 lg:w-1/3 h-[250px] shrink-0 grow-0 flex flex-col items-center overflow-hidden px-2 py-4'>
            <div className='w-full h-full bg-muted hover:bg-gray-200 rounded-lg py-2 px-4'>
                <header className='flex flex-row justify-end'>
                    <span className='text-xs'>Calificado el { comment.date }</span>
                </header>
                <main>
                    <div className='flex flex-row items-center space-x-5'>
                        <Avatar>
                            {/*<AvatarFallback style={{ background: getAvatarFallbackBackground() }}>{ getAvatarFallbackLetters(comment.firstName) }</AvatarFallback>*/}
                            <AvatarFallback className='bg-gray-300'>{ getAvatarFallbackLetters(comment.firstName) }</AvatarFallback>
                        </Avatar>
                        <span className='font-semibold'>{ comment.firstName }</span>
                    </div>
                    <p className='mx-3 my-3'>{ comment.comment }</p>
                </main>
                <footer className='flex flex-row justify-end'>
                    {
                        Array.from({ length: 5 }, (_, i) => i+1).map(i => 
                            i <= comment.score
                                ? <HiMiniStar key={ i } className='w-5 h-5 text-yellow-300'/>
                                : <HiOutlineStar key={ i } className='w-5 h-5'/>
                        )
                    }
                </footer>
            </div>
        </article>

    )

}