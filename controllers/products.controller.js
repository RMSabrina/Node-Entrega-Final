import * as productsService from '../services/products.service.js';

export const obtenerProductos = async (req, res) => {
    try {
        const productos = await productsService.obtenerTodos();
        res.status(200).json({ data: productos });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

export const obtenerProductosPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await productsService.obtenerPorId(id);
        
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.status(200).json({ data: producto });
    } catch (error) {
        console.error("Error capturado en el controlador:", error);
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

export const crearProductos = async (req, res) => {
    try {
        const data = req.body;
        const nuevoProducto = await productsService.crearProducto(data);

        if (!nuevoProducto) {
            return res.status(400).json({
                error: "Ya existe un producto con ese ID."
            });
        }

        res.status(201).json({ 
            mensaje: 'Producto creado exitosamente', 
            data: nuevoProducto 
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};

export const eliminarProductos = async (req, res) => {
    try {
        const { id } = req.params;
        const eliminado = await productsService.eliminarProducto(id);
        
        if (!eliminado) {
            return res.status(404).json({ error: 'Producto no encontrado para eliminar' });
        }
        res.status(200).json({ mensaje: `Producto con ID: ${id} eliminado correctamente` });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};