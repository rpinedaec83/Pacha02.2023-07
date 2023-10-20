const Purchase = require("../model/purchase.model")
const User = require("../model/user.model")

const getPurchases = async (req, res)=>{
    try{
    const persons = await Purchases.findAll({
        include: {
            model: User
        }
    });
    // res.send(persons)
    res.status(200).json({
        ok: true,
        status: 200,
        body: persons,
        message: "All purchases founded"
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

const postPurchase = async (req, res)=>{
    try{
        const user = await User.findByPk(req.params.userId)

        if(!user){
            res.status(400).json({message: "user not exists"})
        }

        const createdPurchase = await Purchase.create({
            qty: req.body.qty,
            UserId: user.Id
        });

    res.status(200).json({
        ok: true,
        status: 200,
        body: {
            purchase: createdPurchase,
            idUser: user.Id
        },
        message: "A purchase was created"
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

module.exports = {getPurchases, postPurchase}