import { Product } from "@Types/typedef";

const filterByRating = async (min: string | null = '0', max: string | null = '5', products: Array<Product>) => {

    let maxNum: number = Infinity;
    if (max !== null) {maxNum = Number(max)}

    console.log('filtering by rating....', min, max, products)
    const filtered = products.filter((product: Product) => {
        return (product.rating !== null && product.rating !== undefined && Number(product.rating) >= Number(min) && Number(product.rating) <= maxNum)
    })
    
    return filtered;
}

export default filterByRating;