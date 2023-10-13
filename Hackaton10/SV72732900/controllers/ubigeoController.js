const ubigeoSchema = require("../models/ubigeo")

const getUbigeo = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const ubigeo = await ubigeoSchema.find({_id: id})
        res.status(200).json(ubigeo)}
        else{
            const ubigeos = await ubigeoSchema.find()
            res.status(200).json(ubigeos)
        }
    }catch(err){
        console.log(err)
    }
}

const postUbigeo = async (req, res) => {
    try{
        const ubigeo = ubigeoSchema(req.body);
        await ubigeo.save()
        res.status(200).json(ubigeo)

    }catch(err){
        res.send(500).json({
            error: 'Error al crear ubigeo'
        })
    }
}

const updateUbigeo = async (req, res) => {
    try{
    const id = req.query.id || false
    await ubigeoSchema.findOneAndUpdate({_id: id}, req.body)
    const ubigeo = await ubigeoSchema.find({_id: id})
    res.status(200).json(ubigeo)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: "ubigeo not found"
        })
    }
}

const deleteUbigeo = async (req, res) => {
    try{
        const id = req.query.id || false
        await ubigeoSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        // res.status(200).json(ubigeo)
        }catch(err){
            console.log(err)
            res.status(500).json({
                message: "id not found"
            })
        }
}

module.exports = {getUbigeo, postUbigeo, updateUbigeo, deleteUbigeo}