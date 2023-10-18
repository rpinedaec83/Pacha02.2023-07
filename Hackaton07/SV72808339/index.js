const { isAxiosError } = require('axios');
express = require('express');
axios = require('axios');

const app = express();

app.get('/user/:username', async (req, res)=> {
    const username = req.params.username;

    try {
        const {data} = await axios.get(`https://api.github.com/users/${username}`)
        res.status(200).json(data)
    } catch(error) {
        res.status(500).send({message:"ERROR: User not found"})
    }
})

app.get('/weather/:city', async (req, res)=> {
    const city = req.params.city;
    
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: city},
        headers: {
          'X-RapidAPI-Key': '6b944e8dfemshdfecff5043ef665p12a62fjsnaab37ccce6ea',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    try {
        const response = await axios.request(options);
        res.status(200).send(response.data)
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "ERROR: City not found"})
    }
    
})

app.get('/exchange', async (req,res)=>{
    try {
        const {data} = await axios.get('https://api.apis.net.pe/v1/tipo-cambio-sunat')
        res.status(200).json(data)
    } catch(error) {
        res.status(500).send({message:"ERROR: User not found"})
    }
})

app.get('/pokemon', async (req,res)=>{
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1017`)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({message:"ERROR: There was a pokemistake"})
    }
})
app.get('/pokemon/:pokemon', async (req,res)=>{
    const pokemon = req.params.pokemon;

    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        res.status(200).send(data.abilities)
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"ERROR: There was a pokemistake, you could have mispelled the name"})
    }
})

app.get('/rickandmorty', async (req,res)=>{
    try {
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/1,2,3,4,5`)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({message:"ERROR: There was a mistake"})
    }
})
app.get('/rickandmorty/:character', async (req,res)=>{
    const character = req.params.character;
    try {
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${character}`)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({message:"ERROR: There was a mistake"})
    }
})

app.get('/cocktails', async (req,res)=> {
    const options = {
        method: 'GET',
        url: 'https://the-cocktail-db3.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': '6b944e8dfemshdfecff5043ef665p12a62fjsnaab37ccce6ea',
          'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          res.send(response.data);
      } catch (error) {
          console.error(error);
      }
})

app.get('/products', async (req,res)=>{
    try {
        const {data} = await axios.get(`https://fakestoreapi.com/products`)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({message:"ERROR: Couldn't send the products list"})
        console.log(error)
    }
})

app.get('/photos/topics', async (req,res)=>{
    try {
        const {data} = await axios.get(`https://api.unsplash.com/topics?client_id=dm1pD4bXRDbW6w_Ata_qef7d3ovAWJOWSYlr07yr664`)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({message:"ERROR: Can't send the topics list"})
        console.log("ERR0R")
    }
})

app.get('/quote', async (req,res)=> {
    let token = "z0wRMoRItoRSJhcFl81iGE4jEA2iXRsDzdZx8bx2"

    const options = {
        method: 'GET',
        url: 'https://quotes.rest/quote/random?language=en&limit=1',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };
      
      try {
          const response = await axios.request(options);
          res.json(response.data);
      } catch (error) {
        res.status(500).json({message: "ERROR"})
    }
})

app.get('/random_user', async (req,res)=> {
    try {
        const {data} = await axios.get(`https://randomuser.me/api/`)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/movies', async (req,res)=> {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjM3YzdiNmQ1NmFhNTFlMDkyZmU3OGM1MTg5YmYzYyIsInN1YiI6IjY1MmY1OTZhMDI0ZWM4MDBlNDQ3MmI5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MBHEE9eJno5ET3-JeSrUjo_usWMLMurafvX4Qd08khM`
        }
      };
      
      try {
          const response = await axios.request(options);
          res.json(response.data);
      } catch (error) {
        res.status(500).json({message: "ERROR"})
      }
})
app.get('/movies/:id', async (req,res)=> {
    const id = req.params.id;
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjM3YzdiNmQ1NmFhNTFlMDkyZmU3OGM1MTg5YmYzYyIsInN1YiI6IjY1MmY1OTZhMDI0ZWM4MDBlNDQ3MmI5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MBHEE9eJno5ET3-JeSrUjo_usWMLMurafvX4Qd08khM`
        }
      };
      
      try {
          const response = await axios.request(options);
          res.json(response.data);
      } catch (error) {
        res.status(500).json({message: error})
      }
})

app.get('/mars', async (req,res)=> {
    let token = "5bw4ZOpDsaUR4rv4Yh6ctN5kNCDB6pWBfjQrJYG5"

    const options = {
        method: 'GET',
        url: `https://api.nasa.gov/insight_weather/?api_key=${token}&feedtype=json&ver=1.0`,
        headers: {
          'accept': 'application/json',
          'Authorization': `${token}`
        }
      };
      
      try {
          const response = await axios.request(options);
          res.json(response.data);
      } catch (error) {
        res.status(500).json({message: error})
    }
})

app.listen(8080, () => {
    console.log('Server running')
})