const proveedorSchema = require("../models/proveedor")

const getProveedor = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const proveedor = await proveedorSchema.find({_id: id})
        res.status(200).json(proveedor)}
        else{
            const proveedores = await proveedorSchema.find()
            res.status(200).json(proveedores)
        }
    }catch(err){
        console.log(err)
    }
}

const postProveedor = async (req, res) => {
    try{
        const proveedor = proveedorSchema(req.body);
        await proveedor.save()
        res.status(200).json(proveedor)

    }catch(err){
        res.send(500).json({
            error: 'Error al crear proveedor'
        })
    }
}

const updateProveedor = async (req, res) => {
    try{
    const id = req.query.id || false
    await proveedorSchema.findOneAndUpdate({_id: id}, req.body)
    const proveedor = await proveedorSchema.find({_id: id})
    res.status(200).json(proveedor)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: "proveedor not found"
        })
    }
}

const deleteProveedor = async (req, res) => {
    try{
        const id = req.query.id || false
        await proveedorSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        // res.status(200).json(proveedor)
        }catch(err){
            console.log(err)
            res.status(500).json({
                message: "id not found"
            })
        }
}

module.exports = {getProveedor, postProveedor, updateProveedor, deleteProveedor}