const axios = require('axios');

// ...

// Ruta para consultar datos de GitHub de un usuario
app.get('/github/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const userData = response.data;

    // Envía los datos JSON como respuesta
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar los datos de GitHub' });
  }
});
