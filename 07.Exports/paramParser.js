/**
 * http://usejsdoc.org/
 * Roberto Elizo
 */

function parse(request){
	var arrayParam = [];
	
	if(request.url.indexOf('favico.ico')===-1){
		console.log("Estoy recibiendo algo");
		console.log(request.url);
		arrayParam = request.url.split("=");
		console.log(arrayParam);
	}
	
	return arrayParam;
}

function nombre(){
	return "Mi Ojete";
}

module.exports.parse= parse;
module.exports.nombre= nombre;

