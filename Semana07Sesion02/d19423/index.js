const axios = require('axios');

axios.get('https://www.x-codec.net').then(resp => {

    console.log(resp.data);
});