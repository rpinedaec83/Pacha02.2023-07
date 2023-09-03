const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// localhost:3000
app.get('/', (req, res) => {
    let mensaje = "- Consultar los datos de GitHub de un usuario especifico (http://localhost:3000/github/:username | <a href='http://localhost:3000/github/lbolivar20' target='blank'>Ejemplo</a> )<br>"+
    "- Consultar el Clima de una ciudad o ubicacion especifica (http://localhost:3000/clima/:ciudad | <a href='http://localhost:3000/clima/iquitos' target='blank'>Ejemplo</a>)<br>"+
    "- Consultar el tipo de cambio del dolar en Peru <a href='http://localhost:3000/cambio' target='blank'>( Ejemplo )</a><br>"+
    "- Consultar la lista de Pokemones actual <a href='http://localhost:3000/pokemones' target='blank'>( Ejemplo )</a><br>"+
    "- Consultar los poderes de un pokemon especifico (http://localhost:3000/pokemones/:pokemon | <a href='http://localhost:3000/pokemones/gloom' target='blank'>Ejemplo</a>)<br>"+
    "- Consultar los principales personajes de Rick and Morty <a href='http://localhost:3000/rickandmorty' target='blank'>( Ejemplo )</a><br>"+
    "- Consultar el detalle de cada persojane de Rick and Morty (http://localhost:3000//rickandmorty/:personaje | <a href='http://localhost:3000/rickandmorty/morty' target='blank'>Ejemplo</a>)<br>"+
    "- Consultar el top 10 de bebidas y cocteles <a href='http://localhost:3000/cocteles' target='blank'>( Ejemplo )</a><br>"+
    "- Consultar un listado de productos de una tienda<br>"+
    "- Consultar y traer Fotografias con un determinado tema y tamaño<br>"+
    "- Consultar citas famosas<br>"+
    "- Consultar datos ficticios de un usuario<br>"+
    "- Consultar el top de peliculas de estreno<br>"+
    "- Consultar el detalle de una pelicula especifica<br>"+
    "- Consultar datos especificos de Marte";
    res.send(mensaje);
    res.end();
  })

// localhost:3000/github/:username
app.get('/github/:username',async (req,res) => {
    const username = req.params.username;
    try{
        const {data} = await axios.get(`https://api.github.com/users/${username}`)
        res.json(data);
        res.end();
    }catch(error){
        res.status(500).json({error: "El usuario no existe en Github"})
    }
})

// localhost:3000/clima/:ciudad
app.get('/clima/:ciudad',async (req,res) => {
    const ciudad = req.params.ciudad;
    let key = "02bd8c920e684f6f93632543230309";
    try{
        const {data} = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${ciudad}&aqi=no`)
        res.json(data);
        res.end();
    }catch(error){
        res.status(500).json({error: "No hay datos de la ciudad"})
    }
})

// localhost:3000/cambio
app.get('/cambio',async (req,res) => {

    try{
       const {data} = await axios.get("https://api.frankfurter.app/latest?from=EUR&to=USD")
        res.json(data);
        res.end();
    }catch(error){
        res.status(500).json({error: "No hay datos"})
    }
})

// localhost:3000/pokemones
app.get('/pokemones',async (req,res) => {
    try{
        const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150")
        res.json(data);
        res.end();
    }catch(error){
        res.status(500).json({error: "Error pokemon"})
    }
})
// localhost:3000/pokemones/:pokemon
app.get('/pokemones/:pokemon',async (req,res) => {
    const pokemon = req.params.pokemon;
    try{
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        res.json(data.abilities);
        res.end();
    }catch(error){
        res.status(500).json({error: "El pokemon no existe"})
    }
})

// localhost:3000/rickandmorty
app.get('/rickandmorty',async (req,res) => {
    try{
        const {data} = await axios.get("https://rickandmortyapi.com/api/character")
        res.json(data);
        res.end();
    }catch(error){
        res.status(500).json({error: "Error Rick and Morty"})
    }
})
// localhost:3000/rickandmorty/:randm
app.get('/rickandmorty/:randm',async (req,res) => {
    const randm = req.params.randm;
    try{
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${randm}`)
        res.json(data);
        res.end();
    }catch(error){
        res.status(500).json({error: "El personaje no existe"})
    }
})
// localhost:3000/cocteles
app.get('/cocteles',async (req,res) => {
    const options = {
        method: 'GET',
        url: 'https://the-cocktail-db3.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': 'bb20fa3eabmsha2b5ea4b6cb7513p144ec0jsn94123277cf50',
          'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          res.json(response.data);
      } catch (error) {
        res.status(500).json({error: "No hay cocteles"})
      }
})

app.listen(port, () => {
  console.log(`Servidor iniciado en puerto: ${port}`)
})