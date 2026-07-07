import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const verificarToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ 
            message: "Acceso denegado. Token no proporcionado o formato inválido." 
        });
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        
        req.user = decoded;
        next();
    } catch (error) {
        // Si verify falla (porque el token fue modificado o ya pasaron las horas de expiración)
        return res.status(403).json({ 
            message: "Acceso denegado. Token expirado o inválido." 
        });
    }
};