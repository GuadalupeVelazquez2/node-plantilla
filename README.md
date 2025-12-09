# Node Plantilla

## Descripción
Este proyecto es una **plantilla base para aplicaciones Node.js con Express**, pensada para iniciar desarrollos de APIs de forma rápida y organizada.  
Incluye la estructura de carpetas más común y scripts configurados para ejecución en modo desarrollo con **nodemon**.

---

## Requisitos previos
Antes de ejecutar este proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

---

## Estructura del proyecto
node-plantilla/
│
├── src/
│ ├── index.js # Punto de entrada principal del servidor
│ ├── routes/ # Archivos con las rutas (endpoints) de la API
│ │ └── index.js
│ ├── controllers/ # Controladores que manejan la lógica de negocio
│ │ └── placeholder.js
│ ├── services/ # Servicios auxiliares (por ejemplo, conexión a BD)
│ ├── models/ # Modelos de datos o esquemas
│ ├── middlewares/ # Funciones intermedias (autenticación, validación, etc.)
│ └── config/ # Archivos de configuración (variables, entorno, etc.)
│
├── package.json # Configuración de dependencias y scripts
└── README.md # Documentación del proyecto

## Scripts disponibles

En el archivo `package.json` se definieron los siguientes scripts:

```json
"scripts": {
  "start": "node src/index.js",
  "dev": "nodemon src/index.js"
}
