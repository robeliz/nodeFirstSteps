/**
 * http://usejsdoc.org/
 * Roberto Elizo
 */

var http = require("http");
var fs = require("fs");



http.createServer(function(request, response){
	fs.readFile("./index.html", function (err, html){
		response.writeHeader(200,{"Content-type":"application/json"});
		response.write(JSON.stringify({nombre: "Roberto", apellido: "Elizo"}));
		console.log("Servidor iniciado");
		response.end();
	});
}).listen(8080);


