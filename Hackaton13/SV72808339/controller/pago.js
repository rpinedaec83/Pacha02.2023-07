const usuarios = require('../controller/usuarios');
const productos = require('../controller/productos');
const compras = require('../controller/compras');
const cupones = require('../controller/cupones');
const pago = require('../controller/pago');
var fs = require("fs");
const { stringify } = require("querystring");


module.exports = {

    pay(req, res){

        let user = req.body.name;
        let password = req.body.password;
        let numero = req.body.numero;
        let fecha = req.body.fecha;
        let cvv = req.body.cvv;
        
        let objdata;
        fs.readFile(__dirname +"/../"+"users.json", 'utf8', function (err, data) {
            objdata = JSON.parse(data);

            try {
                let pass = objdata.find(x => x.name === user).password

                if (pass === password){

                    fs.readFile(__dirname +"/../"+"purchases.json", 'utf8', function (err, data) {
                        list = JSON.parse(data);
            
                        let total_price = 0;
            
                        list.products.map(e => {
                            total_price += e.price
                        })
            
                        list.total_price = total_price
            
                        res.status(201).send({message: "COMPRA FINALIZADA!", list})
            
                    })
                    
                } else {
                    res.status(401).send({message:'Usuario o Contraseña incorrectos'})
                }  
            } catch (error) {
                res.status(401).send({message:'Usuario o Contraseña incorrectos'})
            }
        });
        



    }

}