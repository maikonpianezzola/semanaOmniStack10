const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://maikon:maikon@cluster0-m2br9.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros:
// Query Params: request.query (filtros, ordenação, paginação,...)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

// MongoDB (não-relacional)

// app.use(cors({ origin: 'http://localhost:3000'}))
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);