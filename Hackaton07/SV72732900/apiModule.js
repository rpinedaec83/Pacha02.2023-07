// "No se encontro el tipo de cambio de la moneda peruana dentro de la API"
const urlExchange = "https://api.frankfurter.app/latest?from?amount=1&from=USD&to=EUR"
const urlPokemons = "https://pokeapi.co/api/v2/pokemon"
const urlRickAndMorty = "https://rickandmortyapi.com/api/character"
client_id = "u-e65BiFrOncTgkSm7_iFfjojSkQOiv8qxxr_V45EO4"

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
            pokemonsNames = data.results.map((e, index)=>({"id": index.toString(),"name": e.name}))
            return JSON.stringify(pokemonsNames)
        }
    }
}

exports.getRickAnMorty = async (id = null) => {
    if(!!id){
        const res = await fetch(urlRickAndMorty+`/${id}`);
        if (res.status !== 200){
            return false
        }
        else{
            const data = await res.json();
            return JSON.stringify(data)
        }
    }else{
        const res = await fetch(urlRickAndMorty, {method: "GET"});
        const data = await res.json();
        if (res.status !== 200){
            return false
        }
        else{
            let RickAndMorty = data.results.map((e, index)=>({"id": e.id, "name": e.name}))
            return JSON.stringify(RickAndMorty)
        }
    }
}

exports.getImage = async (pattern = null, w = null, h = null) => {
    
    if(!!pattern){
        if(!!w && !!h){
            const res = await fetch(`https://api.unsplash.com/search/photos?query=${pattern}&per_page=1&client_id=${client_id}`);
            const data = await res.json();
            if (res.status !== 200){
                console.log(data.message)
                return false
            }else{
                return JSON.stringify({"custom_link": `https://source.unsplash.com/${data.results[0].id}/${w}x${h}`})
            }
        }else{
            const res = await fetch(`https://api.unsplash.com/search/photos?query=${pattern}&per_page=1&client_id=${client_id}`);
            const data = await res.json();
            if (res.status !== 200){
                console.log(data.message)
                return false
            }else{
                return JSON.stringify({"custom_link": `https://source.unsplash.com/${data.results[0].id}`})
            }
        }
    }
    else{
        return false;
        }
    }
