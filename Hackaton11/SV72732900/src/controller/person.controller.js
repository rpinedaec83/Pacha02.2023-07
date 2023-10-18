const Person = require("../model/person.model")

const getPersons = async (req, res)=>{
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

const getPerson = async (req, res)=>{
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

const postPerson = async (req, res)=>{
    try{
        await Person.sync();
        const createdPerson = await Person.create(req.body);
        res.status(201).json(
            {
                ok: true,
                status: 200,
                body: createdPerson, 
                message: `Created person with ID: ${createdPerson.personId}`
            }
        )

    }catch(err){
        console.log(err)
        res.status(400).json({
            error: "An error during creation a person"
        })
    }
}

module.exports = {getPersons, getPerson, postPerson}