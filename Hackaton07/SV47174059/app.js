const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Ruta para consultar datos de GitHub de un usuario
app.get('/github/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const userData = response.data;
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar los datos de GitHub' });
  }
});

// Ruta para consultar el tipo de cambio del dólar en Perú
app.get('/dollar-exchange', async (req, res) => {
  try {
    const response = await axios.get('https://www.frankfurter.app/latest?from=USD&to=PEN');
    const exchangeData = response.data;
    res.json(exchangeData);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar el tipo de cambio del dólar' });
  }
});

// Agrega rutas para las demás APIs aquí

// Ruta para consultar la lista de Pokémon
app.get('/pokemon', async (req, res) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      const pokemonData = response.data;
      res.json(pokemonData);
    } catch (error) {
      res.status(500).json({ error: 'Error al consultar la lista de Pokémon' });
    }
  });

  // Ruta para consultar los personajes de Rick and Morty
  app.get('/rickandmorty/characters', async (req, res) => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/');
      const charactersData = response.data;
      res.json(charactersData);
    } catch (error) {
      res.status(500).json({ error: 'Error al consultar los personajes de Rick and Morty' });
    }
  });

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
