import { Product } from "@Types/typedef";

const filterByResults = async (results: string, products: Array<Product>) => {

    return products.slice(0, Number(results));
}

export default filterByResults;