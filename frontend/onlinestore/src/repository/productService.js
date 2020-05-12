const productsService = {
    fetchProducts: () => {
        return axios.get("/products")
            .then((result) => {
                return result.data.map((productJSON) => {
                    return Object.assign(new Proizvod(), productJSON);
                })
            })
    },
    getProduct: (idProizvod) => {
        return axios.get(`/products/${idProizvod}`)
            .then((result) => {
                return Object.assign(new Proizvod(), result.data);
            })
    },
    createProduct: (productData) => {
        return axios.post("/products", productData);
    },
    createOrder: (orderData) => {
        return axios.post("/products/order", orderData);
    },

};


export default productsService;