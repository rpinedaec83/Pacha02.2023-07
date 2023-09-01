const axios = require('axios');
const url = require('url');


async function doGetRequest() {
    axios.get('https://www.x-codec.net').then(resp => {
        let data = resp.data;
        console.log(data);
    });
}

async function doGetRequest2() {
    axios.get('https://www.elcomercio.com').then(resp => {
        let data = resp.data;
        sleep(4000)
        console.log(data);
    });
}


function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

//doGetRequest2();
// doGetRequest();


async function makeRequest() {

    const config = {
        method: 'get',
        url: 'http://webcode.me'
    }

    let res = await axios(config)

    console.log(res.status);
    if (res.status == "200") {
        console.log(res.data);
    }
    else {
        console.log(" error")
    }
}

// makeRequest();

async function doHeadRequest() {

    let res = await axios.head('http://webcode.me');

    console.log(`Status: ${res.status}`)
    console.log(`Server: ${res.headers.server}`)
    console.log(`Date: ${res.headers.date}`)
}

//   doHeadRequest();

async function makeRequest() {

    const config = {
        method: 'get',
        url: 'http://webcode.me',
        headers: { 'User-Agent': 'Axios - console app' }
    }

    let res = await axios(config)

    console.log(res.request._header);
}

// makeRequest();



async function doGetRequest() {

    let payload = { name: 'John Doe', occupation: 'gardener' };

    const params = new url.URLSearchParams(payload);

    let res = await axios.get(`http://httpbin.org/get?${params}`);

    let data = res.data;
    console.log(data);
}

// doGetRequest();

async function getNumberOfFollowers() {

    let res = await axios.get('https://api.github.com/users/rpinedaec83');

    let nOfFollowers = res.data.followers;
    let location = res.data.location;
    console.log(res.data);
    console.log(`# of followers: ${nOfFollowers}`)
    console.log(`Location: ${location}`)
}

//   getNumberOfFollowers();

async function doPostRequest() {

    let payload = { name: 'John Doe', occupation: 'gardener' };

    let res = await axios.post('http://httpbin.org/post', payload);

    let data = res.data;
    console.log(data);
}

// doPostRequest();
const FormData = require('form-data');

async function doPostRequest() {

    const form_data = new FormData();
    form_data.append('name', 'John Doe');
    form_data.append('occupation', 'gardener');

    let res = await axios.post('http://httpbin.org/post', form_data,
        { headers: form_data.getHeaders() });

    let data = res.data;
    console.log(data);
}

// doPostRequest();

const fs = require('fs');

var config = {
    responseType: 'stream'
};

let uri = 'https://images.dog.ceo/breeds/setter-english/n02100735_4870.jpg';

async function getImage() {

    let resp = await axios.get(uri, config);
    resp.data.pipe(fs.createWriteStream('image.jpg'));
}

// getImage();

async function doRequests(urls) {

    const fetchUrl = (url) => axios.get(url);
    const promises = urls.map(fetchUrl);

    let responses = await Promise.all(promises);

    responses.forEach(resp => {
        let msg = `${resp.config.url} -> ${resp.headers.server}: ${resp.status}`;
        console.log(msg);
    });
}

let urls = [
    'http://webcode.me',
    'https://example.com',
    'http://httpbin.org',
    'https://clojure.org',
    'https://fsharp.org',
    'https://symfony.com',
    'https://www.perl.org',
    'https://www.php.net',
    'https://www.python.org',
    'https://code.visualstudio.com',
    'https://github.com'
];

// doRequests(urls);

//-12.059199699165026, -77.0418910751902
async function clima() {
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
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
// clima();

async function rankingFifa() {
const options = {
  method: 'GET',
  url: 'https://allsportsapi2.p.rapidapi.com/api/rankings/fifa',
  headers: {
    'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
    'X-RapidAPI-Host': 'allsportsapi2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}

// rankingFifa();

async function makePostRequest() {

    params = {
        id: 6,
        first_name: 'Fred',
        last_name: 'Blair',
        email: 'freddyb34@gmail.com'
      }

    let res = await axios.post('http://localhost:3000/users/', params);

    console.log(res.data);
}

// makePostRequest();

async function doGetRequest() {

    let res = await axios.get('http://localhost:3000/users/');
  
    let data = res.data;
    console.log(data);
  }
  
//   doGetRequest();

async function doDeleteRequest() {

    let res = await axios.delete('http://localhost:3000/users/2/');

    console.log(res.status);
}

doDeleteRequest();