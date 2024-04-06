import { Product } from "@Types/typedef";

const filterByColor = async (colors: string[], products: Array<Product>) => {
    const filtered = products.filter((product: Product) => {
        if (product.product_colors) {
            return product.product_colors.some((color: any) => colors.includes(color.hex_value));
        }
        return false;
    });

    return filtered;
}

export default filterByColor;