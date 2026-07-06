import * as productsService from "../services/products.service.js";

export const getProducts = (req, res) => {
    const products = productsService.getProducts();

    res.json(products);
};

export const getProductById = (req, res) => {
    const { id } = req.params;

    const product = productsService.getProductById(id);

    res.json(product);
};

export const createProduct = (req, res) => {
    const product = req.body;

    const newProduct = productsService.createProduct(product);

    res.status(201).json(newProduct);
};

export const deleteProduct = (req, res) => {
    const { id } = req.params;

    productsService.deleteProduct(id);

    res.json({
        message: "Producto eliminado"
    });
};