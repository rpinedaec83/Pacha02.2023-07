// Función para obtener la imagen de Pokémon
async function getPokemonImage(pokemonName) {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pokemonData = response.data;
  
      if (pokemonData.sprites && pokemonData.sprites.front_default) {
        return pokemonData.sprites.front_default;
      } else {
        return null; // Devuelve nulo si no se encuentra una imagen de Pokémon
      }
    } catch (error) {
      throw error;
    }
  }
  
  // ...
  
  // Ruta para obtener la imagen de Pokémon
  app.get('/pokemon-image/:name', async (req, res) => {
    const { name } = req.params;
  
    try {
      const imageUrl = await getPokemonImage(name);
  
      if (imageUrl) {
        // Envía la URL de la imagen como respuesta
        res.json({ imageUrl });
      } else {
        res.status(404).json({ error: 'No se encontró una imagen de Pokémon' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la imagen de Pokémon' });
    }
  });
  