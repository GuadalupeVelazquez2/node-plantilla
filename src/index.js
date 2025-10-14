const express = require('express');
const app = express();
const rutas = require('./routes');

app.use(express.json());
app.use('/api', rutas);

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));