const express = require('express');
const conexaobd = require("../bin/conexaobd");
// App
const app = express();

// Load routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);
const descubraRoutes = require('./routes/descubraRouter')
app.use("/api/descubra", descubraRoutes);
module.exports = app;




