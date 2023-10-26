const express = require("express")
const router = express.Router()
const path = require("path")
const fs = require("fs")

router.get("/:image", (req, res)=>{
    try{
        let filePath = path.join( __dirname, `../../public/images/${req.params.image}`)
        if (fs.existsSync(filePath)){
            res.sendFile(filePath)
        }else{
            res.status(404).json({
                ok: false,
                status: 404,
                message: "Image not found"
            })
        }
    }catch(err){
        console.log(err)
    }
})

module.exports = router