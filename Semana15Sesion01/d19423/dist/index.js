"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _socket = require("socket.io");
var _http = _interopRequireDefault(require("http"));
var _sockets = _interopRequireDefault(require("./sockets"));
var _app = _interopRequireDefault(require("./app"));
var _db = require("./db");
var _config = require("./config");
(0, _db.connectDB)();
var server = _http["default"].createServer(_app["default"]);
var httpServer = server.listen(_config.PORT);
console.log("Server on http://localhost:", _config.PORT);
var io = new _socket.Server(httpServer);
(0, _sockets["default"])(io);