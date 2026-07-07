import { Router } from "express";
import {
    obtenerProductos,
    obtenerProductosPorId,
    crearProductos,
    eliminarProductos
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", obtenerProductos);
router.get("/:id", obtenerProductosPorId);
router.post("/create", crearProductos);
router.delete("/:id", eliminarProductos);

export default router;