import { Product } from '@/interfaces/product.interface'
import { ProductGridItem } from './ProductGridItem'


interface Props {
    products: Product[]
}

export const ProductGrid = ({ products } : Props) => {

    return (

        <section className='grid grid-cols-2 sm:grid-flow-row sm:auto-rows-auto gap-10 w-full'> 
            {
                products.map(product => <ProductGridItem key={ product.slug } product={ product } />)
            }
        </section>

    )

}