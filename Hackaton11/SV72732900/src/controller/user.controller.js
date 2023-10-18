const Person = require("../model/person.model");
const User = require("../model/user.model");

const getUsers = async (req, res)=>{
    try{
    const users = await User.findAll();
    // res.send(persons)
    res.status(200).json({
        ok: true,
        status: 200,
        body: users,
        message: "All users founded"
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

const getUser = async (req, res)=>{
    try{
        const userId_ = req.params.userId;

        const user_ = await User.findAll({
            where: {
                userId: userId_
            }
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: user_,
            message: !!user_.length ? "User founded" : "No content"
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

const postUser = async (req, res)=>{
    try{
        await User.sync();
        const personId_ = req.params.personId
        const person = await Person.findByPk(personId_)

        if(!person){
            res.status(400).json({message: "person not exists"})
        }
        
        const createdUser = await User.create({
            user: req.body.user,
            psw: req.body.psw,
            PersonId: person.dataValues.Id
        });

        // createdUser.PersonId = person.dataValues.Id
        // await createdUser.save()

        const person_ = await Person.findAll({
            include: 'User',
            attributes: ["dni", "name", "lstName", "adress", "createdAt", "updatedAt"]
        })
        
        res.status(201).json(
            {
                ok: true,
                status: 200,
                body: person_,
                message: `User created with person ID: ${person.dataValues.Id}`
            }
        )

    }catch(err){
        console.log(err)
        res.status(400).json({
            error: "An error during user creation"
        })
    }
}

module.exports = {getUsers, getUser, postUser}