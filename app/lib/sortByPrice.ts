import { Product } from "@Types/typedef";

const sortProducts = async (products: Product[], order: string) => {

    let sorted = products;

    if (order == 'asc' || order == 'desc') {
        sorted = products.slice().sort((a, b) => {
            if (order === 'asc') {
                return Number(a.price) - Number(b.price);
            } 
            else { return Number(b.price) - Number(a.price); }
        });
    }

    else if (order == 'newest' || order == 'oldest') {
        sorted = products.slice().sort((a, b) => {
            const dateA = new Date(a.updated_at);
            const dateB = new Date(b.updated_at);

            if (order === 'newest') { return dateB.getTime() - dateA.getTime(); } 
            else { return dateA.getTime() - dateB.getTime(); }
        });
    }
    
    return sorted;
};

export default sortProducts;