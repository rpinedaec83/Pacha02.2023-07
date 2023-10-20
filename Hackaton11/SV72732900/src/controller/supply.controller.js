const Supply = require("../model/supply.model")

const getSupplies = async (req, res)=>{
    try{
    const supplies = await Supply.findAll();
    // res.send(persons)
    res.status(200).json({
        ok: true,
        status: 200,
        body: supplies,
        message: "All supplies founded"
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


const postSupply = async (req, res)=>{
    try{
        await Supply.sync();
        const SupplyCreated = await Supply.create(req.body);
        res.status(201).json(
            {
                ok: true,
                status: 200,
                body: SupplyCreated, 
                message: `Created person with ID: ${SupplyCreated.Id}`
            }
        )

    }catch(err){
        console.log(err)
        res.status(400).json({
            error: "An error during creation a person"
        })
    }
}

module.exports = {getSupplies, postSupply}