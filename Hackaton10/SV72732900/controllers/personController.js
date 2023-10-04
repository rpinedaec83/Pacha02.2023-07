
const personSchema = require("../models/person")

const getPerson = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const person = await personSchema.find({_id: id})
        res.status(200).json(person)}
        else{
            const persons = await personSchema.find()
            res.status(200).json(persons)
        }
    }catch(err){
        console.log(err)
    }
}

const getPersons = async(req, res) => {
    try{
        const persons = await personSchema.find()
        res.status(200).json(persons)
    }catch(err){
        res.send(500).json(
            {error: "¡No se encontraron personas!"}
        )
    }
}

const postPerson = async (req, res) => {
    try{
        const person = personSchema(req.body);
        await person.save()
        res.status(200).json(person)

    }catch(err){
        res.send(500).json({
            error: 'Error al crear persona'
        })
    }
}

const updatePerson = async (req, res) => {
    try{
    const id = req.query.id || false
    await personSchema.findOneAndUpdate({_id: id}, req.body)
    const person = await personSchema.find({_id: id})
    res.status(200).json(person)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: "person not found"
        })
    }
}

const deletePerson = async (req, res) => {
    try{
        const id = req.query.id || false
        await personSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        // res.status(200).json(person)
        }catch(err){
            console.log(err)
            res.status(500).json({
                message: "id not found"
            })
        }
}

module.exports = {getPerson, postPerson, updatePerson, deletePerson}