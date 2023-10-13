const materialSchema = require("../models/material")

const getMaterial = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const material = await materialSchema.find({_id: id})
        res.status(200).json(material)}
        else{
            const materiales = await materialSchema.find()
            res.status(200).json(materiales)
        }
    }catch(err){
        console.log(err)
    }
}

const postMaterial = async (req, res) => {
    try{
        const material = materialSchema(req.body);
        await material.save()
        res.status(200).json(material)

    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'Error al crear material'
        })
    }
}

const updateMaterial = async (req, res) => {
    try{
    const id = req.query.id || false
    await materialSchema.findOneAndUpdate({_id: id}, req.body)
    const material = await materialSchema.find({_id: id})
    res.status(200).json(material)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: "material not found"
        })
    }
}

const deleteMaterial = async (req, res) => {
    try{
        const id = req.query.id || false
        await materialSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        }catch(err){
            console.log(err)
            res.status(500).json({
                message: "id not found"
            })
        }
}

module.exports = {getMaterial, postMaterial, updateMaterial, deleteMaterial}