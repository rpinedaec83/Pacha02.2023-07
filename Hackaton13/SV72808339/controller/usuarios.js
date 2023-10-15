var fs = require("fs");

module.exports = {
    login(req, res) {
        let user = req.body.name;
        let password = req.body.password;
        let objdata;
        fs.readFile(__dirname +"/../"+"users.json", 'utf8', function (err, data) {
            objdata = JSON.parse(data);

            try {
                let pass = objdata.find(x => x.name === user).password

                if (pass === password){

                    res.status(200).send({message:"LOGIN CORRECTO"})
                } else {
                    res.status(401).send({message:'Usuario o Contraseña incorrectos'})
                }  
            } catch (error) {
                res.status(401).send({message:'Usuario o Contraseña incorrectos'})
            }
        });
    },

    validar(name, password){
        // let user = req.body.name;
        // let password = req.body.password;
        console.log(name)
        console.log(password)
        let objdata;
        fs.readFile(__dirname +"/../"+"users.json", 'utf8', function (err, data) {
            objdata = JSON.parse(data);
            console.log("objeto data:", objdata)

                let pass = objdata.find(x => x.name === name).password
                console.log("PASS: ",pass)

                if (pass === password){
                    console.log(1)
                    return true
                } else {
                    console.log(2)
                    return false
                }  
        });
    },

    add_user(req,res){
        let user = req.body.name;
        let password = req.body.password;
        let email = req.body.email;

        let objdata;

        fs.readFile(__dirname +"/../"+"users.json", 'utf8', function (err, data) {
            objdata = JSON.parse(data);
            let objuser = {
                name: user,
                password: password,
                email: email
            };
            objdata.push(objuser);
            res.status(201).send(objdata)

            fs.writeFile(__dirname +"/../"+"users.json", JSON.stringify(objdata, null, 2) , err => {
                if (err) {
                  console.error(err);
                }
                // file written successfully
            });
        });  
    }
}