
let http = require('http');
let url = require('url')
let api  = require("./apiModule");
let fs = require('fs');  
let cheerio = require('cheerio')
// $('img').replaceWith(`<span>ivan</span>`)

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
    case "/rickandmorty":
      if (!objURL.query.id){
        res.writeHead(200, {'Content-Type': 'application/json'});
        rickAndmorty = await api.getRickAnMorty()
        !!rickAndmorty && res.write(rickAndmorty)
        res.end();
        break;
      }
      else if(!!objURL.query.id){
        rickAndmorty = await api.getRickAnMorty(objURL.query.id);
        !!rickAndmorty ? res.write(rickAndmorty) : res.write("Not Found")
        res.end();
        break;
      }else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end("Not Found");
        break;
      }
    case "/imagenes":
      if (!objURL.query.tema){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write("Not Found")
        res.end();
        break;
      }else if(!!objURL.query.tema){
        if(!!objURL.query.ancho && !!objURL.query.alto){
          res.writeHead(200, {'Content-Type': 'application/json'});
          imgLink = await api.getImage(objURL.query.tema,objURL.query.ancho, objURL.query.alto);
          !!imgLink ? res.write(imgLink) : res.write("Not Found");
          res.end();
          break;
        }else{
          res.writeHead(200, {'Content-Type': 'application/json'});
          imgLink = await api.getImage(objURL.query.tema);
          !!imgLink ? res.write(imgLink) : res.write("Not Found")
          res.end();
          break;
        }
      }
      else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end("Not Found");
        break;
      }
    default:
      res.writeHead(404, {'Content-Type': 'application/json'});
      res.end(JSON.stringify("Error: 404"))
      break;
  }}).listen(8080)