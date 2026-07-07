export const obtenerTodos = () => {
    return [
        {
            id: 1,
            nombre: "Producto de prueba"
        }
    ];
};

export const obtenerPorId = (id) => {
    return {
        id,
        nombre: "Producto de prueba"
    };
};

export const crearProducto = (product) => {
    return product;
};

export const eliminarProducto = (id) => {
    return true;
};