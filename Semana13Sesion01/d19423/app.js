const express = require('express');
const app = express();


var fs = require("fs");
var multer  = require('multer');
var cookieParser = require('cookie-parser')
app.use(express.static('public'));
app.use(multer({dest:'./uploads/'}).single('file'));

app.get('/cookie', function(req, res) {
    console.log("Cookies: ", req.cookies)
 })

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 })

 app.get('/file.html', function (req, res) {
    res.sendFile( __dirname + "/" + "file.html" );
 })

 app.get('/index2.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index2.html" );
 })

 app.post('/file_upload', function (req, res) {
    //console.log(req);
    console.log(req.file.originalname);
    console.log(req.file.path);
    console.log(req.file.mimetype);
    var file = __dirname + "/" + req.file.originalname;
    
    fs.readFile( req.file.path, function (err, data) {
       fs.writeFile(file, data, function (err) {
          if( err ) {
             console.log( err );
             } else {
                response = {
                   message:'File uploaded successfully',
                   filename:req.file.originalname
                };
             }
          
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
    });
 })

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })
 
 var bodyParser = require('body-parser');
 // Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })
 

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
 })

 // This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
 })

 // This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
 })

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
 })
 
 // This responds a GET request for abcd, abxcd, ab123cd, and so on
 app.get('/ab*cd', function(req, res) {   
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
 })
 

const server = app.listen(8081, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})