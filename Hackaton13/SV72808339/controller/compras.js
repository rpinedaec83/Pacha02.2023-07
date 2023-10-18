var fs = require("fs");
const { stringify } = require("querystring");

module.exports = {

    add_purchase(req,res){
        let id = req.body.id;

        fs.readFile(__dirname +"/../"+"products.json", 'utf8', function (err, data) {
            let productos = JSON.parse(data);

            fs.readFile(__dirname +"/../"+"purchases.json", 'utf8', function (err, data) {
                const compras = JSON.parse(data);

                productos[id-1].id = compras.products.length + 1

                compras.products.push(productos[id-1])
                
                fs.writeFile(__dirname +"/../"+"purchases.json", JSON.stringify(compras.products, null, 2), err => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send({ message: 'Error al escribir en el archivo de compras' })
                    }

                })
                res.send(compras);
            })
        })
    },

    read_purchase(req,res){
        fs.readFile(__dirname +"/../"+"purchases.json", 'utf8', function (err, data) {
            list = JSON.parse(data);

            let total_price = 0;

            list.products.map(e => {
                total_price += e.price
            })

            list.total_price = total_price

            // console.log("total price:",total_price)
            console.log(list)

            res.status(201).send(list)

        })
    },

    delete_purchase(req,res){

        let id = req.body.id;

        fs.readFile(__dirname +"/../"+"purchases.json", 'utf8', function (err, data) {
            datarray = JSON.parse(data);

            index = id-1

            datarray.products.splice(index,1)

            for (let i = id-1; i < datarray.length; i++) {
                
                datarray[i].id = i+1
                
            }

            fs.writeFile(__dirname +"/../"+"purchases.json", JSON.stringify(datarray, null, 2), err => {
                if(err) {
                    console.error(err);
                }
            })

            res.status(200).send(datarray)

        })

    }
}
