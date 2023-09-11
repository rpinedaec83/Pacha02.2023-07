import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/:resource', async (req, res) => {
    const resource = req.params.resource;
    try {
        switch (resource) {
            case 'github':
                const githubData = await axios.get('https://api.github.com/users/renzo');
                res.json(githubData.data);
                break;
            case 'weather':
                const city = req.query.city || 'ciudadpordefecto';
                const { weatherData } = await axios.get(`https://api.weatherapi.com/v1/current.json?key=your-api-key&q=${city}`);
                res.json(weatherData.data);
                break;
            case 'tipoCambio':
                const tipoCambioData = await axios.get('https://api.apis.net.pe/v1/tipo-cambio-sunat');
                res.json(tipoCambioData.data);
                break;
            case 'pokemones':
                const pokemonesData = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
                res.json(pokemonesData.data);
                break;
            case 'pokemonEspecifico':
                const pokemon = 'ditto';
                const pokemonEspecificoData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                res.json(pokemonEspecificoData.data);
                break;
            case 'rick&morty':
                const rickmortyData = await axios.get('https://rickandmortyapi.com/api/character');
                res.json(rickmortyData.data);
                break;
            case 'rick&mortyDetalles':
                const rickmortyDetallesData = await axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10');
                res.json(rickmortyDetallesData.data);
                break;
            case 'bebidas':
                const bebidasData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/randomselection.php');
                res.json(bebidasData.data);
                break;
            case 'productos':
                const productosData = await axios.get('https://fakestoreapi.com/products');
                res.json(productosData.data);
                break;
            case 'fotografia':
                const response = await axios.get('https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&w=1500&dpr=2', {
                responseType: 'arraybuffer', // Solicita la respuesta en formato binario
                });
                if (response.status === 200) {
                    const imageBuffer = Buffer.from(response.data, 'binary'); // Convierte los datos binarios en un buffer
                    res.set('Content-Type', 'image/jpeg'); // Establece el tipo de contenido como imagen JPEG (ajusta según el formato de la imagen)
                    res.end(imageBuffer); // Envía la imagen como respuesta
                } else {
                    res.status(response.status).json({ message: 'Error en la solicitud a la API de imágenes' });
                }
                break;
            case 'cita':
                const citaData = await axios.get('https://frasedeldia.azurewebsites.net/api/phrase');
                res.json(citaData.data);
                break;
            case 'detallePelicula':
                const api = "https://www.omdbapi.com/?";
                const apiKey = "apikey=18eaeb4f";
                const detallePeliculaData = await axios.get(api+apiKey+'&s=The Matrix'+"&type=movie"+"&page=1");
                res.json(detallePeliculaData.data);
            case 'random':
                const randomData = await axios.get('https://randomuser.me/api/');
                res.json(randomData.data);
                break;
            case 'marte':
                const marteData = await axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
                res.json(marteData.data);
                break
            default:
                res.status(404).json({ message: 'Recurso no encontrado' });
            
        }
    } catch (error) {
        res.status(500).json({ message: 'Error en la solicitud' });
    }
});

app.listen(port, () => {
    console.log(`API Gateway listening on port ${port}`);
});

