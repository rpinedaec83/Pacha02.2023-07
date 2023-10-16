module.exports = {
    login(req, res) {
        let usuario = req.body.username;
        let password = req.body.password;
        if(password === "123456")
            res.send({"username":usuario, "password":password});
        else
            res.status(401).send({message:"El password es incorrecto"})
    },
    add_user(req,res){
        let usuario = req.body.username;
        let password = req.body.password;
        let correo_electronico = req.body.email
        res.status(201).send({message:`El usuario ${usuario} ha sido creado correctamente`})
    }
}