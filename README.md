# Node Plantilla

## 🚀 Descripción
Plantilla base para proyectos con Node.js y Express, lista para desarrollo con nodemon.

## 📂 Estructura del proyecto
src/
├── index.js # Punto de entrada del servidor
├── routes/ # Definición de rutas (endpoints)
├── controllers/ # Controladores: lógica de negocio
├── services/ # Servicios auxiliares
├── models/ # Modelos de datos
├── middlewares/ # Middlewares personalizados
└── config/ # Configuraciones generales

## 🧠 Scripts disponibles
- `npm start` → Inicia el servidor normalmente.
- `npm run dev` → Inicia el servidor con **nodemon** (reinicio automático).

## 📦 Requisitos
- Node.js
- npm
- Git

## 🌐 Ejecución
```bash
npm install
npm run dev
Abre: 

yaml
Copiar código

---

## 🪣 **9. Hacer commit y push**

```bash
git add .
git commit -m "Proyecto base Node con estructura y scripts"
git branch -M main
git remote add origin https://github.com/tu-usuario/node-plantilla.git
git push -u origin main