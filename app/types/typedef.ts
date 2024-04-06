export type Product = {
    id: number;
    brand: string;
    name: string;
    price: string;
    price_sign?: any;
    currency?: any;
    image_link: string;
    product_link: string;
    website_link: string;
    description: string;
    rating?: number;
    category?: any;
    product_type: string;
    tag_list?: Array<any>;
    created_at: string;
    updated_at: string;
    product_api_url: string;
    api_featured_image: string;
    product_colors?: Array<any>;
}