
const userSchema = require("../models/user")

const getUser = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const user = await userSchema.find({_id: id})
        res.status(200).json(user)}
        else{
            const users = await userSchema.find()
            res.status(200).json(users)
        }
    }catch(err){
        console.log(err)
    }
}

const postUser = async (req, res) => {
    try{
        console.log(req.body)
        const user = userSchema(req.body);
        await user.save()
        res.status(200).json(user)

    }catch(error){
        // res.send(500).json({
        //     error: 'Error al crear usuario'
        // })
        res.status(500).json({'error' : 'Error al crear usuario'})
        // res.sendStatus(500).json({
        //     error: 'Error al crear usuario'
        // })
    }
}

const updateUser = async (req, res) => {
    try{
    const id = req.query.id || false
    await userSchema.findOneAndUpdate({_id: id}, req.body)
    const user = await userSchema.find({_id: id})
    res.status(200).json(user)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: "user not found"
        })
    }
}

const deleteUser = async (req, res) => {
    try{
        const id = req.query.id || false
        await userSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        // res.status(200).json(user)
        }catch(err){
            console.log(err)
            res.status(500).json({
                message: "id not found"
            })
        }
}

module.exports = {getUser, postUser, updateUser, deleteUser}