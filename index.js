import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// --- Rutas del proyecto  ---

app.use("/api/products", productsRoutes);
app.use("/auth", authRoutes);
app.get('/api', (req, res) => {
    res.json({ mensaje: 'Bienvenido a la API del proyecto' });
});
app.get('/', (req, res) => {
    res.json({ mensaje: 'Bienvenido. Para utilizar esta API, realice las peticiones incluyendo /api' });
});


// Middleware para manejar rutas desconocidas (404)
// Al final de todas las rutas para capturar cualquier petición que no coincida
app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        error: 'Not Found',
        mensaje: `La ruta solicitada '${req.originalUrl}' no fue encontrada en este servidor.`
    });
});

app.listen(PORT, () => {
    console.log(`Servidor inicializado correctamente en el puerto ${PORT}`);
});