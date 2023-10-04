const produccionSchema = require("../models/produccion")

const getProduccion = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const produccion = await produccionSchema.find({_id: id})
        res.status(200).json(produccion)}
        else{
            const producciones = await produccionSchema.find()
            res.status(200).json(producciones)
        }
    }catch(err){
        console.log(err)
    }
}

const postProduccion = async (req, res) => {
    try{
        const produccion = produccionSchema(req.body);
        await produccion.save()
        res.status(200).json(produccion)

    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'Error al crear produccion'
        })
    }
}

const updateProduccion = async (req, res) => {
    try{
    const id = req.query.id || false
    await produccionSchema.findOneAndUpdate({_id: id}, req.body)
    const produccion = await produccionSchema.find({_id: id})
    res.status(200).json(produccion)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: "produccion not found"
        })
    }
}

const deleteProduccion = async (req, res) => {
    try{
        const id = req.query.id || false
        await produccionSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        }catch(err){
            console.log(err)
            res.status(500).json({
                message: "id not found"
            })
        }
}

module.exports = {getProduccion, postProduccion, updateProduccion, deleteProduccion}