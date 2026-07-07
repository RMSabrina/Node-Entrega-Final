import { Router } from "express";
import {
    obtenerProductos,
    obtenerProductosPorId,
    crearProductos,
    eliminarProductos
} from "../controllers/products.controller.js";

import { verificarToken } from "../middlewares/auth.middleware.js";

const router = Router();

// Rutas públicas
router.get("/", obtenerProductos);
router.get("/:id", obtenerProductosPorId);

// Rutas protegidas
router.post("/create", verificarToken, crearProductos);
router.delete("/:id", verificarToken, eliminarProductos);

export default router;