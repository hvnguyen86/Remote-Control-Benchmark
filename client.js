var client = require("socket.io-client");
var host = "http://localhost:3000";

//host = "http://localhost:3000";
var max =10000;
var min = 1000;

var x=(Math.random() * (max - min)) + min;
var socket = client.connect(host);


setInterval(function(){
	x = (Math.random() * (max - min)) + min;
	socket.emit("testTime",new Date().getTime());
},x);

process.on("exit",function(){
	socket.emit("testTime","Im disconnected");
	socket.disconnect();
});