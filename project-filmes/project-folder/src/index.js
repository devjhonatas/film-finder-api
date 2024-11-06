// src/index.js
const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes');

// Middleware para processar JSON
app.use(express.json());

// Usando as rotas de filmes
app.use('/api', movieRoutes);

// Rota inicial
app.get('/', (req, res) => {
    res.send("Bem-vindo à API de Recomendações de Filmes!");
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});