import { Product } from "@Types/typedef";

const filterByType = async (type: string, products: Array<Product>) => {
    const filtered = products.filter((product: Product) => {
        return product.product_type === type;
    })
  return filtered;
}

export default filterByType