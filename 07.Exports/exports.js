/**
 * http://usejsdoc.org/
 * Roberto Elizo
 */

var http = require("http");
var fs = require("fs");
var parse = require("./paramParser.js");
var render = require("./renderView.js");
var p = parse.parse;
var r = render.render;
var n = parse.nombre;

var server = http.createServer(function(request, response){
	console.log("Servidor iniciado");
	
	if(request.url.indexOf('favico.ico')>0){
		return;
	}
	
	fs.readFile("./index.html", function (err, html){
		console.log(request.url);
		var arrayParam = p(request);
		var nombre = n();
		
		var myhtml = r(html, nombre);
		
		response.writeHeader(200,{"Content-type":"text/html"});
		response.write(myhtml);
		response.end();
	});
}).listen(8080);