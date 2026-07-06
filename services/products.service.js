export const getProducts = () => {
    return [
        {
            id: 1,
            nombre: "Producto de prueba"
        }
    ];
};

export const getProductById = (id) => {
    return {
        id,
        nombre: "Producto de prueba"
    };
};

export const createProduct = (product) => {
    return product;
};

export const deleteProduct = (id) => {
    return true;
};