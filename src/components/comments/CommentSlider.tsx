'use client'

import { useSlider } from '@/hooks'
import { BreakPointCount, Comment } from '@/interfaces'
import { CommentSliderItem } from './CommentSliderItem';

interface Props {
    comments: Comment[]
}

const breakPointsCount: BreakPointCount = {
    xl: 2,
    lg: 3,
    md: 3,
    default: 6
};

export const CommentSlider = ({ comments }: Props) => {

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
                    comments.map(comment => <CommentSliderItem key={ comment.id } comment={ comment }/>)
                }
            </div>
            <ul className='flex items-center justify-center gap-4'>
                {
                    Array.from({ length: countItems }).map((value, index) => 
                        <button key={ index }
                            className={ `${currentSlide.current === (index) ? 'bg-primary' : 'bg-gray-200'} transition-all w-3 h-3 rounded-full ${index}` }
                            onClick={ () => nextSlide(index) }
                        ></button>
                    )
                }
            </ul>
        </section>

    )

}