interface Props {
    title: string
    subtitle?: string
    className?: string
}

export const Title = ({ title, subtitle, className } : Props) => {

    return (

        <article className={ `space-y-2 ${className}` }>
            <h1 className='text-2xl font-semibold antialiased'>{ title }</h1>
            {
                subtitle && <h3 className='text-sm mb-3'>{ subtitle }</h3>
            }
        </article>

    )

}