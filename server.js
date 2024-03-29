const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')
// iniciando o app
const app = express();
app.use(express.json());

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
 { useNewUrlParser: true }
);
requireDir('./src/models');

// hello const Product = mongoose.model('Product');

// rotas
app.use('/api', require('./src/routes'))

app.listen(3001);