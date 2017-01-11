var express = require("express");

var app = express();

app.set("view engine","pug");

app.get("/", function (request, response){
	response.render('index', {nombre: 'Rober', adjetivo:'Vamos maldito hijo de puta'});
});

app.listen(8080);

