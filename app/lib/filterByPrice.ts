import { Product } from "@Types/typedef";

const filterByPrice = async (min: string | null = '0', max: string | null, products: Array<Product>) => {
    
    let maxNum: number = Infinity;
    if (max !== null) {maxNum = Number(max)}
    // maxNum = Number(max)

    console.log('MIN: ', min, 'MAX: ', max, 'MAXNUM: ', maxNum)

    const filtered = products.filter((el) => {
        return (Number(el.price) >= Number(min) && Number(el.price) <= maxNum)
    })
    return filtered;
}

export default filterByPrice;