const Material = require("../model/material.model")
const Supplier = require("../model/supplier.model")

const getMaterials = async (req, res)=>{
    try{
    const materials = await Material.findAll();
    // res.send(persons)
    res.status(200).json({
        ok: true,
        status: 200,
        body: materials,
        message: "All materials founded"
    })
    }catch(err){
        console.log(err)
        res.status(400).json({
            ok: false,
            status: 400,
            message: "Check the request sintax"
        })
    }
}


const getSupplier = async (req, res)=>{
    try{
        const materiales = await Material.findAll({
            include: {
                model: Supplier,
                attributes: ["Id", "name"]
            },
            attributes: ["Id","wood", "price"]
        })

        res.status(200).json({
            ok: true,
            status: 200,
            body: materiales,
            message: "All materials founded"
        })

    }catch(err){
        
        res.status(400).json({
            ok: false,
            status: 400,
            message: "Items not found"
        })

    }
}


const postMaterial = async (req, res)=>{
    try{
        await Material.sync();
        const MaterialCreated = await Material.create(req.body);
        res.status(201).json(
            {
                ok: true,
                status: 200,
                body: MaterialCreated, 
                message: `Created material with ID: ${MaterialCreated.Id}`
            }
        )

    }catch(err){
        console.log(err)
        res.status(400).json({
            error: "An error during creation a person"
        })
    }
}

module.exports = {getMaterials, getSupplier, postMaterial}