const express = require("express");
const product = require("../model/product.model");

const router = express.Router();

router.get("/", async (req, res)=>{
    try{
    const products = await product.findAll();
    // res.send(products)
    res.status(200).json({
        ok: true,
        status: 200,
        body: products,
        message: "All products founded"
    })
    }catch(err){
        console.log(err)
        res.status(400).json({
            ok: false,
            status: 400,
            message: "Check the request sintax"
        })
    }
});

router.get("/:productId", async (req, res)=>{
    try{
        const productId_ = req.params.productId;

        const product_ = await product.findAll({
            where: {
                productId: productId_
            }
        });

        res.status(200).json({
            ok: true,
            status: 200,
            body: product_,
            message: !!product_.length ? "Product founded" : "No content"
        })

    }catch(err){
        console.log(err);
        res.status(400).json({
            ok: true,
            status: 400,
            message: "Check the request syntax"
        });
    }
});

router.post("/", async (req, res)=>{
    try{
        await product.sync();
        const createdProduct = await product.create(req.body);
        console.log(createdProduct);
        res.status(201).json(
            {
                ok: true,
                status: 200,
                body: createdProduct, 
                message: `Created product with ID: ${createdProduct.productId}`
            }
        )

    }catch(err){
        console.log(err)
        res.status(400).json({
            error: "Hubo un error al agrear producto"
        })
    }
});

router.put("/:productId", async (req, res)=>{
    try{
        
        const productId_ = req.params.productId;
        const product_ = await product.findAll({
            where: {
                productId: productId_
            }
        });

        if(!!product_.length){
            console.log(req.body)
            await product.update(req.body, {
                where: {
                    productId: productId_
                }
            });
            res.status(200).json(
                {
                    ok: true,
                    status: 200,
                    message: `Product with ID: ${productId_} was edited`
                }
            )
        }else{
            res.status(200).json(
                {
                    ok: false,
                    status: 200,
                    message: `Product not founded`
                }
            )
        }
    }catch(err){
        console.log(err)
        res.status(400).json({
            error: "An error during Update"
        })
    }
});


router.delete("/:productId", async (req, res)=>{
    try{
        
        const productId_ = req.params.productId;
        const product_ = await product.findAll({
            where: {
                productId: productId_
            }
        });

        if(!!product_.length){
            console.log(req.body)
            await product.destroy({
                where: {
                    productId: productId_
                }
            });
            res.status(204).json(
                {
                    ok: true,
                    status: 204,
                    message: `Product with ID: ${productId_} was deleted`
                }
            )
        }else{
            res.status(204).json(
                {
                    ok: false,
                    status: 204,
                    message: `Product not founded`
                }
            )
        }
    }catch(err){
        console.log(err)
        res.status(400).json({
            error: "An error during delete"
        })
    }
});

module.exports = router;
