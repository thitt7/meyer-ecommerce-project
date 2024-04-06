import React from 'react';
import { Suspense } from 'react';
import Loading from './loading';
import ProductsPage from './Products';
import getProducts from '@lib/getProducts';
import { Product } from "@Types/typedef";

const Products = async () => {

    const products = await getProducts();
    // const products: Array<Product> = await fetch('/api/products');

    return (
        <Suspense fallback={<Loading/>}>
            <ProductsPage products={products} />
        </Suspense>
    )
}

export default Products;