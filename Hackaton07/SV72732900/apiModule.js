// "No se encontro el tipo de cambio de la moneda peruana dentro de la API"
const urlExchange = "https://api.frankfurter.app/latest?from?amount=1&from=USD&to=EUR"
const urlPokemons = "https://pokeapi.co/api/v2/pokemon"

exports.getExchange = async () => {
    const res = await fetch(urlExchange);
    const data = await res.json();
    if (res.status !== 200){
        return false
    }
    else{
        return JSON.stringify({"USD2EUR": data.rates.EUR})
    }
}

exports.getPokemons = async (name = "") => {
    if(!!name){
        const res = await fetch(urlPokemons+`/${name}`);
        if (res.status !== 200){
            return false
        }
        else{
            const data = await res.json();
            return JSON.stringify(data.abilities.map((e, index)=>({"id": index.toString(), "poder": e.ability.name})))
        }
    }else{
        const res = await fetch(urlPokemons+'?limit=30000');
        const data = await res.json();
        if (res.status !== 200){
            return false
        }
        else{
            pokemonsNames = data.results.map((e, index)=>({"id": index.toString() ,"name": e.name}))
            return JSON.stringify(pokemonsNames)
        }
    }
}
