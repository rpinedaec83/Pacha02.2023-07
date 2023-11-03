var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var session = require('express-session');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport');
// ======================Mysql DataBase ========================
var con = require('./database/db');
// =========================================================
users = [];
connections = [];
var username;


app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'tom-riddle' }));

app.get('/', function (req, res) {
    authenticate(req, res);
});









function authenticate(req, res) {
    //console.log("authenticate called");
    if (!req.session.user) {
        res.sendFile(__dirname + '/public/login.html');
    }
    else {
        //console.log(req.session.user);
        username = req.session.user;
        res.sendFile(__dirname + '/public/chat.html');
    }
}