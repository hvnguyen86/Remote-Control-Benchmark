var client = require("socket.io-client");
var host = "http://176.34.100.20:3000";
host = "http://localhost:3000";
var fs = require('fs');
var nodeLog = fs.createWriteStream(__dirname+'/node.log',{flags:'a',mode:0666, encoding:'encoding'});

//host = "http://localhost:3000";
var max =10000;
var min = 1000;

var x=(Math.random() * (max - min)) + min;
var socket = client.connect(host);

var i = 0;

setInterval(function(){
	
	x = (Math.random() * (max - min)) + min;
	socket.emit("testTime",new Date().getTime());
	
},1000);

socket.on("testTime",function(command){
	var log = 
	nodeLog.write(new Date().getTime() - command.time +"\n");
	//console.log(command.id);
	
});