const express = require("express")
const User = require("../models/user")
const {getHash, verifyHash} = require("../helpers/hash")

const router = express.Router()

router.post("/login", async (req, res) => {
    try{
        const {user , psw } = req.body
        const usrFounded = await User.findOne({where: {
            user: user
        }})

        if (!!usrFounded) {
        const validator = await verifyHash(psw, usrFounded.psw)

        validator && (
        // res.redirect("http://localhost:3000/api/v1/front/courses").json({
        //     ok: true,
        //     status: 200,
        //     body: {
        //         "id": usrFounded.id,
        //         "auth": true
        //     },
        //     message: "Authorized"
        // })
        res.redirect("http://localhost:3000/api/v1/front/courses?id=" + JSON.stringify({
            id: usrFounded.id,
            usr: usrFounded.user
        }))
        // .json({
        //     ok: true,
        //     status: 200,
        //     body: {
        //         "id": usrFounded.id,
        //         "user": usrFounded.user,
        //         "auth": true
        //     },
        //     message: "Authorized"
        // })
        )

        !validator && (
            res.status(401).json({
                ok: false,
                status: 401,
                message: "Unauthorized"
            })
        )
        }else{
            res.status(204).send("User not founded")
        }
    
    }catch(err){
        console.log(err)
    }
}
)


router.post("/register", async (req, res) => {
    try{
        const hashValue = await getHash(req.body.psw);
        const userCreated = await User.create({
            user: req.body.user, 
            psw: hashValue
        })
        
        res.redirect("http://localhost:3000/api/v1/front/login")
        // res.status(201).json({
        //     ok: true,
        //     status: 201,
        //     body: userCreated,
        //     message: "User Saved"
        // })

    }catch(err){
        res.status(403).json({
            ok: false,
            status: 403,
            body: {
                error: err.name
            },
            message: "User already exists"
        })
    }
})

module.exports = router;


