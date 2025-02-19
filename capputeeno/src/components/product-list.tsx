"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCart } from "./product-cart";

interface ProductsListProps {

}

export function ProductsList(props : ProductsListProps) {
    const { data } = useProducts();
    console.log(data)
    
    return(
        <div>{data?.map(product => 
            <ProductCart 
                key={product.id}
                title={product.name}
                price={product.price_in_cents}
                image={product.image_url}
            />
        )}
        </div>
    )
}