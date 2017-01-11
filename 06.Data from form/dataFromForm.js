/**
 * http://usejsdoc.org/
 * Roberto Elizo
 */

var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
	console.log("Servidor iniciado");
	
	if(request.url.indexOf('favico.ico')>0){
		return;
	}
	
	fs.readFile("./index.html", function (err, html){
		var html_string = html.toString();
		var nombre = "Rober";
		var arrayParam = [];
		
		console.log(request.url);
		
		if(request.url.indexOf('favico.ico')===-1){
			console.log("Estoy recibiendo algo");
			console.log(request.url);
			arrayParam = request.url.split("=");
			console.log(arrayParam);
		}
		
		html_string = html_string.replace("{nombre}", arrayParam[1]);
		
		response.writeHeader(200,{"Content-type":"text/html"});
		response.write(html_string);
		response.end();
	});
}).listen(8080);