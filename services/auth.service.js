import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const login = (email, password) => {

    if (email !== "admin@correo.com" || password !== "1234") {
        return null;
    }

    const token = jwt.sign(
        { email },
        SECRET_KEY,
        { expiresIn: "1h" }
    );

    return {
        message: "Login exitoso",
        token: `Bearer ${token}`
    };
};