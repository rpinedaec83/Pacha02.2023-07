const express = require("express");

const router = express.Router()

const fs = require("fs")

const path = __dirname;

console.log(path)

const removeExtension = (filename) => {
    return filename.split('.').shift()
}

fs.readdirSync(path).filter((file)=>{
    const name = removeExtension(file)
    if (name !== 'index'){
        router.use(`/${name}`, require(`./${file}`))
    }
}) 


module.exports = router