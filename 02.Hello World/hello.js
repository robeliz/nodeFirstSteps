/**
 * http://usejsdoc.org/
 * Roberto Elizo
 */

var http = require("http");

var requestListener = function(request, response){
	console.log("Hello world");
	response.end("Estas en el buen camino muchacho");
}

var server = http.createServer(requestListener);

server.listen(8080);

