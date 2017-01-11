/**
 * http://usejsdoc.org/
 * Roberto Elizo
 */

var http = require("http");
var fs = require("fs");



var server = http.createServer(function(request, response){
	fs.readFile("./index.html", function (err, html){
		response.writeHeader(200,{"Content-type":"text/html"});
		response.write(html);
		console.log("Servidor iniciado");
		response.end();
	});
}).listen(8080);



