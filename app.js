const express = require('express');
const app = express();
const PORT = 4000;

const dotenv = require('dotenv')
dotenv.config()

const middlewares = require('./middlewares')
const routes = require('./routes')

middlewares.setupAPP(app)
routes.setup(app)

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });
