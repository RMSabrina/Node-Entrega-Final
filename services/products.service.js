import * as modeloProductos from '../models/products.model.js';

export const obtenerTodos = async () => {
    // Delega la obtención al modelo de datos
    return await modeloProductos.obtenerTodos();
};

export const obtenerPorId = async (id) => {
    return await modeloProductos.obtenerPorId(id);
};

export const crearProducto = async (productoData) => {
    return await modeloProductos.crearProducto(productoData);
};

export const eliminarProducto = async (id) => {
    return await modeloProductos.eliminarProducto(id);
};