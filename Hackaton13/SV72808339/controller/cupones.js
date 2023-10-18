var fs = require("fs");
const { stringify } = require("querystring");

module.exports = {

    create_coupon(req, res){

        function generarAlfaNumerico(length){
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let result = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length)
                result += characters.charAt(randomIndex)  
            }
            return result;
        }

        let name = req.body.name;
        let discount = req.body.discount;
        let description = req.body.description;

        const cupon_code = generarAlfaNumerico(8)
        
        let lista_cupones

        fs.readFile(__dirname +"/../"+"coupons.json", 'utf8', function (err, data) {
            lista_cupones = JSON.parse(data);
            let new_coupon = {
                id: lista_cupones.length + 1,
                code: cupon_code,
                name: name,
                discount: discount,
                description: description,
            };
            lista_cupones.push(new_coupon);
            res.status(201).send(new_coupon)

            fs.writeFile(__dirname +"/../"+"coupons.json", JSON.stringify(lista_cupones, null, 2) , err => {
                if (err) {
                  console.error(err);
                }
                // file written successfully
            });
        });
    },

    read_coupons(req,res){
        fs.readFile(__dirname +"/../"+"coupons.json", 'utf8', function (err, data) {
            data = JSON.parse(data);
            res.status(201).send(data)
        })
    },

    change_coupon(req,res){
        let id = req.body.id;
        
        updated_coupon = {
             name: req.body.name,
             discount: req.body.discount,
             description: req.body.description
        }

        fs.readFile(__dirname +"/../"+"coupons.json", 'utf8', function (err, data) {
            let datarray = JSON.parse(data);
            let index = id-1;

            for(const key in updated_coupon){
                if(updated_coupon[key] != null && updated_coupon[key] !== ""){
                    datarray[index][key] = updated_coupon[key];
                }
            }

            fs.writeFile(__dirname +"/../"+"coupons.json", JSON.stringify(datarray, null, 2) , err => {
                if (err) {
                  console.error(err);
                }

                res.status(200).send(datarray[index])
            });

        })
    },

    delete_coupon(req,res){
        let id = req.body.id;

        fs.readFile(__dirname +"/../"+"coupons.json", 'utf8', function (err, data) {
            datarray = JSON.parse(data);

            datarray.splice(id-1,1)

            for (let i = id-1; i < datarray.length; i++) {
                
                datarray[i].id = i+1
                
            }

            fs.writeFile(__dirname +"/../"+"coupons.json", JSON.stringify(datarray, null, 2), err => {
                if(err) {
                    console.error(err);
                }
            })

            res.status(200).send(datarray)

        })


    }
}