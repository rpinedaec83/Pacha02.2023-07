const Supplier = require("../model/supplier.model")
const Material = require("../model/material.model")
const Supply = require("../model/supply.model")


const getSuppliers = async (req, res)=>{
    try{
    const persons = await Person.findAll();
    // res.send(persons)
    res.status(200).json({
        ok: true,
        status: 200,
        body: persons,
        message: "All persons founded"
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
        const personId_ = req.params.personId;

        const person_ = await Person.findAll({
            where: {
                personId: personId_
            }
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: person_,
            message: !!person_.length ? "Person founded" : "No content"
        })

    }catch(err){
        console.log(err);
        res.status(400).json({
            ok: true,
            status: 400,
            message: "Check the request syntax"
        });
    }
}

const postSupplier = async (req, res)=>{
    try{
        const material = await Material.findByPk(req.query.MaterialId)
        console.log("material", material)
        const supply = await Supply.findByPk(req.query.SupplyId)
        console.log("supply", supply)
        if (!material){
            res.status(400).json({message: "Material not found with ID"})
        }
        if (!supply){
            res.status(400).json({message: "Supply not found with ID"})
        }

        await Supplier.sync();
        const supplierCreated = await Supplier.create({
            name: req.body.name,
            ruc: req.body.ruc,
            adress: req.body.adress,
            phone: req.body.phone,
            MaterialId: material.Id,
            SupplyId: supply.Id,
        });
    
        res.status(201).json(
            {
                ok: true,
                status: 200,
                body: supplierCreated, 
                message: `Created supplier with ID: ${supplierCreated.Id}`
            }
        )
    }catch(err){
        console.log(err)
        res.status(400).json({
            error: "An error during creation a Supplier"
        })
    }
}

module.exports = {getSuppliers, getSupplier, postSupplier}