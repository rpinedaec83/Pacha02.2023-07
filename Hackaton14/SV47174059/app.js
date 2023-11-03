// Importa las bibliotecas necesarias
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mysql = require('mysql');
const socketIo = require('socket.io');

// Configura la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'chat_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conexión a la base de datos MySQL establecida.');
});

// Configura Passport.js para la autenticación OAuth con Google
passport.use(new GoogleStrategy({
  clientID: 'tu_client_id',
  clientSecret: 'tu_client_secret',
  callbackURL: 'http://localhost:3000/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
  // Aquí debes implementar la lógica para guardar o recuperar el usuario en la base de datos
  // por ejemplo, buscarlo en la tabla de usuarios usando su ID de Google

  const user = {
    googleId: profile.id,
    displayName: profile.displayName,
  };

  // Llama a done con el usuario encontrado o creado
  return done(null, user);
}));

// Inicializa Express y Passport.js
const app = express();
app.use(passport.initialize());
app.use(passport.session());

// Rutas para la autenticación OAuth
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Redirige al usuario a la página de chat después de la autenticación exitosa
    res.redirect('/chat');
  }
);

// Ruta para la página de chat
app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});

// Inicializa Socket.io para el chat en tiempo real
const server = app.listen(3000, () => {
  console.log('Aplicación de chat en ejecución en el puerto 3000');
});
const io = socketIo(server);

io.on('connection', socket => {
  // Maneja eventos de chat en tiempo real
  socket.on('message', data => {
    // Guarda el mensaje en la base de datos
    db.query('INSERT INTO messages (user_id, text) VALUES (?, ?)', [userId, data.message], (err, result) => {
      if (err) throw err;
      // Emitir el mensaje a todos los usuarios conectados
      io.emit('message', { user: user.displayName, message: data.message });
    });
  });
});
