import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const router = Router();
const SECRET_KEY = process.env.SECRET_KEY;

// POST /auth/login
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    // simulación simple de validación
    if (email === "admin@correo.com" && password === "1234") {

        const token = jwt.sign(
            { email },
            SECRET_KEY,
            { expiresIn: "1h" }
        );

        return res.json({
            message: "Login exitoso",
            token: `Bearer ${token}`
        });
    }

    res.status(401).json({
        message: "Credenciales inválidas"
    });
});

export default router;