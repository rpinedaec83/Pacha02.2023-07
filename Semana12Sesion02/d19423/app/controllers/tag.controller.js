const db = require("../models");
const Tutorial = db.tutorials;
const Tag = db.tag;



/*
req, res)=>{
    const tutorialId = req.params.id;
    const comment = {
        name: req.body.name,
        text: req.body.text
      };
*/
exports.create = (req, res) => {

    const tag = {
        name: req.body.name
    }

    Tag.create(tag)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.findAll = (req, res) => {
    Tag.findAll({
        include: [
            {
                model: Tutorial,
                as: "tutorials",
                attributes: ["id", "title", "description"],
                through: {
                    attributes: [],
                }
            },
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};


exports.addTutorial = (req, res) => {
    //tagId, tutorialId)
    const tagId = req.body.tagId;
    const tutorialId = req.body.tutorialId;

    Tag.findByPk(tagId)
        .then((tag) => {
            if (!tag) {
                res.status(400).send({

                    message:
                        "No se encontro el tag"
                });
            }
            Tutorial.findByPk(tutorialId).then((tutorial) => {
                if (!tutorial) {
                    console.log("Tutorial not found!");
                    return null;
                }

                tag.addTutorial(tutorial);
                res.send(tag);
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};