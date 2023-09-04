
let http = require('http');
let url = require('url')
let api  = require("./apiModule");  

http.createServer(async function (req, res){
  let objURL = url.parse(req.url, true)
  switch (objURL.pathname) {
    case "/cambio":
      res.writeHead(200, {'Content-Type': 'application/json'});
      rate = await api.getExchange()
      !!rate && res.write(rate)
      res.end();
      break;
    case "/traerpokemones":
      if (!objURL.query.nombre){
        res.writeHead(200, {'Content-Type': 'application/json'});
        pokemons = await api.getPokemons()
        !!pokemons && res.write(pokemons)
        res.end();
        break;
      }
      else if(!!objURL.query.nombre){
        pokemons = await api.getPokemons(objURL.query.nombre);
        !!pokemons ? res.write(pokemons) : res.write("Not Found")
        res.end();
        break;
      }else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end("Not Found");
        break;
      }
    default:
      res.writeHead(404, {'Content-Type': 'application/json'});
      res.end(JSON.stringify("Error: 404"))
      break;
  }}).listen(8080)