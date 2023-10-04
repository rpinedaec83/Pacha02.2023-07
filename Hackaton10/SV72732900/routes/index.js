const express = require("express")

const fs = require("fs")

const router = express.Router();

const path = __dirname;

const removeExtension = (filename) => {
    return filename.split('.').shift()
}

fs.readdirSync(path).filter((file)=>{
    const name = removeExtension(file)
    if (name !== 'index'){
        router.use(`/${name}`, require(`./${file}`))
    }
})   

module.exports = router;
