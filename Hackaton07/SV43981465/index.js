import express from 'express';
import axios from 'axios';

const app = express();

app.get('/:username', async (req, res) => {
    switch (req.url) {
        case "/clima":
            const options = {
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                params: { q: '-12.059199699165026, -77.0418910751902' },
                headers: {
                    'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };

            try {
                axios.request(options)
                    .then(function (response) {
                        // handle success
                        console.log(response);
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify(response.data));
                        res.end();

                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });



            } catch (error) {
                console.log(error)
            }

            break;

    }

    const username = req.params.username;
    try{
      const {data} = await axios.get(`https://api.github.com/users/${username}`);
      res.json(data);
    } catch(error) {
      res.status(500).json({error: "El usuario ingresado no existe en Github. "});
    }
})

app.listen(3000, () => {
    console.log('the server is running!!!');
})