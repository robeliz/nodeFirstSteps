var express = require("express");

var app = express();

app.set("view engine","pug");

app.get("/", function (request, response){
	response.render("index");
});

app.get("/:nombre", function(request ,response){
	console.log(request.params.nombre);
	response.render("form",{nombre:request.params.nombre});
});

app.post("/", function(request ,response){
	console.log(request);
	response.render("form");
});

app.listen(8080);

