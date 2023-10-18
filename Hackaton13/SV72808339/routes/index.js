const usuarios = require('../controller/usuarios')
const productos = require('../controller/productos');
const compras = require('../controller/compras');
const cupones = require('../controller/cupones');
const pago = require('../controller/pago');
module.exports = (app) => {

    //USER
    app.post('/user/login', usuarios.login)
    app.post('/user/signup', usuarios.add_user)
    //COURSES
    app.post('/courses/create', productos.create_course)
    app.get('/courses', productos.read_courses)
    app.post('/courses/update', productos.update_course)
    app.post('/courses/delete', productos.delete_course)
    //PURCHASE ORDERS
    app.post('/purchases/add', compras.add_purchase)
    app.get('/purchases', compras.read_purchase)
    app.post('/purchases/delete', compras.delete_purchase)
    //PAYMENT GATEAWAY
    app.post('/purchases/pay', pago.pay)
    //COUPONS
    app.post('/coupons/create', cupones.create_coupon)
    app.get('/coupons', cupones.read_coupons)
    app.post('/coupons/edit', cupones.change_coupon)
    app.post('/coupons/delete', cupones.delete_coupon)
}