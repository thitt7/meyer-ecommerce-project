const getProducts = async () => {
    const URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';
    // const URL = 'http://localhost:3000/api';
    const products = await fetch(URL);
    return await products.json();
}

export default getProducts;