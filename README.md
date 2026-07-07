# Node-Entrega-Final
# API de Gestión de Productos

Una API RESTful construida con Node.js y Express para gestionar un catálogo de productos. Utiliza **Firebase Firestore** como base de datos y **JSON Web Tokens (JWT)** para proteger los endpoints sensibles de creación y eliminación.

##  Tecnologías Utilizadas

* **Entorno:** Node.js
* **Framework:** Express.js
* **Base de Datos:** Firebase Firestore
* **Autenticación:** JSON Web Token (JWT)
* **Variables de Entorno:** Dotenv

##  Arquitectura del Proyecto

El proyecto sigue una arquitectura en capas para mantener el código limpio y escalable:

* `config/` - Configuraciones externas (ej. conexión a Firebase).
* `controllers/` - Lógica de manejo de peticiones y respuestas (HTTP).
* `middlewares/` - Interceptores (ej. validación de tokens JWT).
* `models/` - Interacción directa con la base de datos (Firestore).
* `routes/` - Definición de los endpoints de la API.
* `services/` - Lógica de negocio principal.


