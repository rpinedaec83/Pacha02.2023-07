var http = require('http');
const axios = require('axios');

http.createServer(function (req, res) {
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
        case "/agregarproducto":
            let params = {
                id:4,
                nombre:"Z Gok",
                descuento:40,
                precio: 130.99,
                img:"img/6.jpg"
            }
            
        console.log("ingreso a agregarproducto")
            axios.post('http://localhost:3000/productos', params).then(function (response) {
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

            console.log(res.data);
            break;
        default:
            break;
    }

}).listen(8080);

