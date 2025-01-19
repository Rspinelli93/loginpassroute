
// GUIA:

//! - USADO EN APP.JS

//* - USADO EN RUTAS.JS

//? - USADO EN MIDDLEWARES.JS





// Snippets de código para poder componer el programa

//! Usado?: SI
  const middlewares = require('./middlewares');
//--- Explicación: Te traes los middlewares

// -------------------------------------------------------------------------------------

//! Usado?: SI
const bodyParser = require('body-parser');
//--- Explicación: Middleware que procesa la informacion del input del usuario

// -------------------------------------------------------------------------------------

//? Usado?: SI
const session = require('express-session');
//--- Explicación: componente en middlewares que almacena la información durante una sesión que 
// se activa cuando el usuario ha introducido la palabra correcta.

// -------------------------------------------------------------------------------------

//! Usado?: SI
const express = require('express');
//--- Explicación: requieres express

// -------------------------------------------------------------------------------------

//? Usado?: si
const bodyParser = require('body-parser');
//--- Explicación:  Middleware que procesa la informacion del input del usuario

// -------------------------------------------------------------------------------------

//! Usado?: si
const session = require('express-session');
//--- Explicación:

// -------------------------------------------------------------------------------------

//* Usado?: SI
const dotenv = require('dotenv');
//--- Explicación: Requerimos la variable secreta desde el documento .env

// -------------------------------------------------------------------------------------

//! Usado?: si
const middlewares = require('./middlewares');
//--- Explicación: traemos las funciones de middlewares.js

// -------------------------------------------------------------------------------------

//! Usado?: si
const routes = require('./routes');
//--- Explicación: traemos las funciones de routes.js

// -------------------------------------------------------------------------------------

//* Usado?: si
dotenv.config();
//--- Explicación: cargar el contenido de la variable desde .env

// -------------------------------------------------------------------------------------

//! Usado?: si 
const app = express();
//--- Explicación: express en una const

// -------------------------------------------------------------------------------------

//! Usado?: si
const PORT = 4000;
//--- Explicación: puerto

// -------------------------------------------------------------------------------------

//! Usado?: si
const dotenv = require('dotenv');
//--- Explicación: =

// -------------------------------------------------------------------------------------

//! Usado?: si
dotenv.config();
//--- Explicación: =

// -------------------------------------------------------------------------------------

//! Usado?: si
middlewares.setupApp(app);
//--- Explicación: accede a la funcion ubicada en middlewares.js

// -------------------------------------------------------------------------------------

//! Usado?: si
routes.setup(app);
//--- Explicación:  accede a la funcion ubicada en routes.js

// -------------------------------------------------------------------------------------

//? Usado?: SI
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: Validacion de palabra si correcta o no


// -------------------------------------------------------------------------------------


//*Usado?: SI
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: Redireccion en caso de palabra correcta o incorrecta


// -------------------------------------------------------------------------------------


//* Usado?: si
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: respuesta enviada en caso de que la palabra sea correcta


// -------------------------------------------------------------------------------------

//? Usado?: SI

const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};

//--- Explicación: Configura los datos como un objeto


//* Usado?: si
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: Crea la pagina del perfil con un boton para cerrar sesion

// -------------------------------------------------------------------------------------

//! Usado?: si
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: usamos la funcion bodyPArser

// -------------------------------------------------------------------------------------

//! Usado?: si
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: se crea la sesion

// -------------------------------------------------------------------------------------

//! Usado?: si
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: 

// -------------------------------------------------------------------------------------

//? Usado?: SI
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: Verifica si la sesion esta abierta o no, y te lanza error si no esta abierta la sesion

// -------------------------------------------------------------------------------------


//*Usado?:  si
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 

// -------------------------------------------------------------------------------------


//*Usado?: si
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 

// -------------------------------------------------------------------------------------

//*Usado?: si
module.exports = {
  setup,
};
//--- Explicación: Exportamos la funcion 

// -------------------------------------------------------------------------------------

//? Usado?: SI
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación: Exportamos las funciones de Middlewares

// -------------------------------------------------------------------------------------

