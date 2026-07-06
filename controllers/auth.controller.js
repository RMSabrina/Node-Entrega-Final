import * as authService from "../services/auth.service.js";

export const login = (req, res) => {

    const { email, password } = req.body;

    const result = authService.login(email, password);

    if (!result) {
        return res.status(401).json({
            message: "Credenciales inválidas"
        });
    }

    res.json(result);
};