var fs = require("fs");
const { stringify } = require("querystring");
module.exports = {

    create_course(req,res){
        let name = req.body.name;
        let description = req.body.description;
        let img = req.body.img;
        let banner = req.body.banner;
        let price = req.body.price;

        let datarray;

        fs.readFile(__dirname +"/../"+"products.json", 'utf8', function (err, data) {
            datarray = JSON.parse(data);
            let new_course = {
                id: datarray.length + 1,
                name: name,
                description: description,
                img: img,
                banner: banner,
                price: price
            };
            datarray.push(new_course);
            res.status(201).send(datarray)

            fs.writeFile(__dirname +"/../"+"products.json", JSON.stringify(datarray, null, 2) , err => {
                if (err) {
                  console.error(err);
                }
                // file written successfully
            });
        });
    },

    read_courses(req,res){
        fs.readFile(__dirname +"/../"+"products.json", 'utf8', function (err, data) {
            data = JSON.parse(data);
            res.status(201).send(data)
        })
    },

    update_course(req,res){
        let id = req.body.id;
        
        updated_course = {
             name: req.body.name,
             description: req.body.description,
             img: req.body.img,
             banner: req.body.banner,
             price: req.body.price
        }

        let datarray;

        fs.readFile(__dirname +"/../"+"products.json", 'utf8', function (err, data) {
            datarray = JSON.parse(data);
            let index = id -1;

            for(const key in updated_course){
                if(updated_course[key] != null && updated_course[key] !== ""){
                    datarray[index][key] = updated_course[key];
                }
            }

            fs.writeFile(__dirname +"/../"+"products.json", JSON.stringify(datarray, null, 2) , err => {
                if (err) {
                  console.error(err);
                }

                res.status(200).send(datarray[index])
            });

        })
    },

    delete_course(req,res){
        let id = req.body.id;

        fs.readFile(__dirname +"/../"+"products.json", 'utf8', function (err, data) {
            datarray = JSON.parse(data);

            datarray.splice(id-1,1)

            for (let i = id-1; i < datarray.length; i++) {
                
                datarray[i].id = i+1
                
            }

            fs.writeFile(__dirname +"/../"+"products.json", JSON.stringify(datarray, null, 2), err => {
                if(err) {
                    console.error(err);
                }
            })

            res.status(200).send(datarray)

        })


    }
}
