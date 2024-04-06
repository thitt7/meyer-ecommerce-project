import React, {useState} from 'react';
import getProducts from '@lib/getProducts';
import Client from './color/Client';
import { Product } from "@Types/typedef";

const ColorFilter = async () => {

  const colors: any = await getColors();
    
  return <Client colors={colors} />

}

const getColors = async () => {
  const products = await getProducts();
  const hexValuesSet = new Set();
  
  products?.forEach((product: Product) => {
    product.product_colors?.forEach((color: any) => {
      if (color.hex_value) {
        hexValuesSet.add(color.hex_value);
      }
    });
  });
  
  return Array.from(hexValuesSet);
}


export default ColorFilter