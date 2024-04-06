import React from 'react';
import ProductsPage from './Products';
import getProducts from '@lib/getProducts';
import { Product } from "@Types/typedef";

const Products = async () => {

    const products = await getProducts();
    // const products: Array<Product> = await fetch('/api/products');

    return (
        <ProductsPage products={products} />
    )
}

export default Products;