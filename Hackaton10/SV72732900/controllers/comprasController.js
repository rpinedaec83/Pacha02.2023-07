const compraSchema = require("../models/compras")

const getCompra = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const compra = await compraSchema.find({_id: id})
        res.status(200).json(compra)}
        else{
            const compras = await compraSchema.find()
            res.status(200).json(compras)
        }
    }catch(err){
        console.log(err)
    }
}

const postCompra = async (req, res) => {
    try{
        const compra = compraSchema(req.body);
        await compra.save()
        res.status(200).json(compra)

    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'Error al crear compra'
        })
    }
}

const updateCompra = async (req, res) => {
    try{
    const id = req.query.id || false
    await compraSchema.findOneAndUpdate({_id: id}, req.body)
    const compra = await compraSchema.find({_id: id})
    res.status(200).json(compra)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: "compra not found"
        })
    }
}

const deleteCompra = async (req, res) => {
    try{
        const id = req.query.id || false
        await compraSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        }catch(err){
            console.log(err)
            res.status(500).json({
                message: "id not found"
            })
        }
}

module.exports = {getCompra, postCompra, updateCompra, deleteCompra}