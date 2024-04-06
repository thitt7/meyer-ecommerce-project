import React from 'react';
import getProducts from '@lib/getProducts';
import Client from './type/Client';
import { Product } from "@Types/typedef";

const TypeFilter = async () => {
    const types: any = await getTypes();
    
    return <Client types={types} />
}

const getTypes = async () => {
    const products = await getProducts();
    const typesSet = new Set();
    products?.forEach((product: Product) => {
        if (product.product_type) {
            typesSet.add(product.product_type);
        }
    });
    return Array.from(typesSet);
}

export default TypeFilter