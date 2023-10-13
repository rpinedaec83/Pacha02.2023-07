const armarioSchema = require("../models/armario")

const getArmario = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const armario = await armarioSchema.find({_id: id})
        res.status(200).json(armario)}
        else{
            const armarios = await armarioSchema.find()
            res.status(200).json(armarios)
        }
    }catch(err){
        console.log(err)
        res.status(200).json({
            error: "No se pudo obtener armario"
        })
    }
}

const postArmario = async (req, res) => {
    try{
        const armario = armarioSchema(req.body);
        await armario.save()
        res.status(200).json(armario)

    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'Error al crear armario'
        })
    }
}

const updateArmario = async (req, res) => {
    try{
    const id = req.query.id || false
    await armarioSchema.findOneAndUpdate({_id: id}, req.body)
    const armario = await armarioSchema.find({_id: id})
    res.status(200).json(armario)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: "armario not found"
        })
    }
}

const deleteArmario = async (req, res) => {
    try{
        const id = req.query.id || false
        await armarioSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        }catch(err){
            console.log(err)
            res.status(500).json({
                message: "id not found"
            })
        }
}

module.exports = {getArmario, postArmario, updateArmario, deleteArmario}