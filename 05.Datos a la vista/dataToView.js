/**
 * http://usejsdoc.org/
 * Roberto Elizo
 */

var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
	console.log("Servidor iniciado");
	fs.readFile("./index.html", function (err, html){
		var html_string = html.toString();
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		var nombre = "Rober";
		var otra_var = "un fiera, me maten !!";
		
		for(var i = variables.length -1 ;i>=0; i-- ){
			var value = eval(variables[i]);
			html_string = html_string.replace("{"+variables[i]+"}", value);
		}
		
		response.writeHeader(200,{"Content-type":"text/html"});
		response.write(html_string);
		
		response.end();
	});
}).listen(8080);