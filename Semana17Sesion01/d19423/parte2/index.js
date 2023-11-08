const cors = require("cors");
const express = require("express");
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

// Middlewares here 
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());

let arrProductos = [
    { id: 1, name: "Producto1", price: 55 , description:"Descripcion Producto 1", quantity:1}, 
    { id: 2, name: "Producto2" , price: 88 , description:"Descripcion Producto 2", quantity:1}, 
    { id: 3, name: "Producto3" , price: 33 , description:"Descripcion Producto 3", quantity:1},
    { id: 4, name: "Producto4", price: 55 , description:"Descripcion Producto 4", quantity:1}, 
    { id: 5, name: "Producto5" , price: 88 , description:"Descripcion Producto 5", quantity:1}, 
    { id: 6, name: "Producto6" , price: 33 , description:"Descripcion Producto 6", quantity:1}
]
// Routes here 
app.get("/", (req, res) => {
    res.render('pages/index', { productos: arrProductos });
});

app.get("/success",(req,res)=>{
    console.log(req);
    res.render('pages/success', { productos: arrProductos });
})
app.get("/cancel",(req,res)=>{
    console.log(req);
    res.render('pages/cancel', { productos: arrProductos });
})

app.post("/api/create-checkout-session", async (req, res) => {
    const { product } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "pen",
                    product_data: {
                        name: product.name,
                    },
                    unit_amount: product.price * 100,
                },
                quantity: product.quantity,
            },
        ],
        mode: "payment",
        success_url: "http://localhost:8000/success",
        cancel_url: "http://localhost:8000/cancel",
    });
    res.json({ id: session.id });
});

// Listen 
app.listen(8000, () => {
    console.log("Server started at port 8000");
}); 