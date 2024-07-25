import { Product } from '@/interfaces/product.interface'
import { ProductGridItem } from './ProductGridItem'


interface Props {
    products: Product[]
}

export const ProductGrid = ({ products } : Props) => {

    return (

        <section className='grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] justify-items-center gap-10'> 
            {
                products.map(product => <ProductGridItem key={ product.slug } product={ product } />)
            }
        </section>

    )

}