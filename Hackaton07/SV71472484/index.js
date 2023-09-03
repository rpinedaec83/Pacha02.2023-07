const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const fs = require('fs');

// localhost:3000
app.get('/', (req, res) => {
    let mensaje = "- Consultar los datos de GitHub de un usuario especifico (http://localhost:3000/github/:username | <a href='http://localhost:3000/github/lbolivar20' target='blank'>Ejemplo</a> )<br>"+
    "- Consultar el Clima de una ciudad o ubicacion especifica (http://localhost:3000/clima/:ciudad | <a href='http://localhost:3000/clima/iquitos' target='blank'>Ejemplo</a>)<br>"+
    "- Consultar el tipo de cambio del dolar en Peru <a href='http://localhost:3000/cambio' target='blank'>( Ejemplo )</a><br>"+
    "- Consultar la lista de Pokemones actual <a href='http://localhost:3000/pokemones' target='blank'>( Ejemplo )</a><br>"+
    "- Consultar los poderes de un pokemon especifico (http://localhost:3000/pokemones/:pokemon | <a href='http://localhost:3000/pokemones/gloom' target='blank'>Ejemplo</a>)<br>"+
    "- Consultar los principales personajes de Rick and Morty <a href='http://localhost:3000/rickandmorty' target='blank'>( Ejemplo )</a><br>"+
    "- Consultar el detalle de cada persojane de Rick and Morty (http://localhost:3000/rickandmorty/:personaje | <a href='http://localhost:3000/rickandmorty/morty' target='blank'>Ejemplo</a>)<br>"+
    "- Consultar el top 10 de bebidas y cocteles <a href='http://localhost:3000/cocteles' target='blank'>( Ejemplo )</a><br>"+
    "- Consultar un listado de productos de una tienda <a href='http://localhost:3000/tienda' target='blank'>( Ejemplo )</a><br>"+
    "- Consultar y traer Fotografias con un determinado tema y tamaño (http://localhost:3000/foto/:anchodelafoto | <a href='http://localhost:3000/foto/750' target='blank'>Ejemplo</a>)<br>"+
    "- Consultar citas famosas <a href='http://localhost:3000/citas' target='blank'>( Ejemplo )</a><br>"+
    "- Consultar datos ficticios de un usuario <a href='http://localhost:3000/usuario' target='blank'>( Ejemplo )</a><br>"+
    "- Consultar el top de peliculas de estreno<a href='http://localhost:3000/peliculas' target='blank'>( Ejemplo )</a><br>"+
    "- Consultar el detalle de una pelicula especifica (http://localhost:3000/peliculas/:id | <a href='http://localhost:3000/peliculas/615656' target='blank'>Ejemplo</a>)<br>"+
    "- Consultar datos especificos de Marte <a href='http://localhost:3000/marte' target='blank'>( Ejemplo )</a>";
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
    let key = "bb20fa3eabmsha2b5ea4b6cb7513p144ec0jsn94123277cf50"
    const options = {
        method: 'GET',
        url: 'https://the-cocktail-db3.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': `${key}`,
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

// localhost:3000/tienda
app.get('/tienda',async (req,res) => {
    try{
        const {data} = await axios.get("https://fakestoreapi.com/products")
        res.json(data);
        res.end();
    }catch(error){
        res.status(500).json({error: "No hay productos"})
    }
})

// localhost:3000/foto
app.get('/foto/:ancho',async (req,res) => {
    const ancho = req.params.ancho;
   try{
    axios({
        method: 'get',
        url: `https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&w=${ancho}&dpr=2`,
        responseType: 'stream'
      })
        .then(function (response) {
          response.data.pipe(fs.createWriteStream(`img/imagen_${ancho}.jpg`))
        });
        res.send(`img/imagen_${ancho}.jpg ha sido creada`);
        res.end();
    }catch(error){
        res.status(500).json({error: "No hay fotografia"})
    }
})

// localhost:3000/citas
app.get('/citas',async (req,res) => {
    let key = "hp08xyZUL7BojmVijGTMdc1HLfSwflcochJ1d51L"
    const options = {
        method: 'GET',
        url: 'https://quotes.rest/qod?language=en',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${key}`
        }
      };
      
      try {
          const response = await axios.request(options);
          res.json(response.data);
      } catch (error) {
        res.status(500).json({error: "Se ha excedido el limite diario(5)"})
      }
})

// localhost:3000/usuario
app.get('/usuario',async (req,res) => {

    try{
       const {data} = await axios.get("https://randomuser.me/api/")
        res.json(data);
        res.end();
    }catch(error){
        res.status(500).json({error: "No hay datos"})
    }
})

// localhost:3000/peliculas
app.get('/peliculas',async (req,res) => {
    let key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2VlZThiMmI1ZjZkMWI4YjVlMzMxN2ZmNGU0MWFmNSIsInN1YiI6IjY0ZjRjMmM1N2Q0MWFhMDBmZTllMzM5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YNnpwdfAJEKAjbi26sUZnJUQR37hJgYAVgW59JtRoNs"
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${key}`
        }
      };
      
      try {
          const response = await axios.request(options);
          res.json(response.data);
      } catch (error) {
        res.status(500).json({error: "Se ha excedido el limite diario(5)"})
      }
})

app.get('/peliculas/:id',async (req,res) => {
    const id = req.params.id;
    let key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2VlZThiMmI1ZjZkMWI4YjVlMzMxN2ZmNGU0MWFmNSIsInN1YiI6IjY0ZjRjMmM1N2Q0MWFhMDBmZTllMzM5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YNnpwdfAJEKAjbi26sUZnJUQR37hJgYAVgW59JtRoNs"
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${key}`
        }
      };
      
      try {
          const response = await axios.request(options);
          res.json(response.data);
      } catch (error) {
        res.status(500).json({error: "Se ha excedido el limite diario(5)"})
      }
})

// localhost:3000/marte/:randm
app.get('/marte',async (req,res) => {

    try{
        const {data} = await axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
        res.json(data);
        res.end();
    }catch(error){
        res.status(500).json({error: "datos no validos"})
    }
})
// 

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto: ${port}`)
})