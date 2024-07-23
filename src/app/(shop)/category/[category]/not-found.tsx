import { PageNotFound } from '@/components/ui';

export default function NotFound() {

    return (

        <PageNotFound 
            message='No encontramos la categoría que buscas'
            redirect={{ 
                name: 'categorias',
                redirectUrl: '/category/men' 
            }}
        />

    )
    
}