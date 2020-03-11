const express = require ("express");

var app= express();

app.get("/time",(request, response) => {
	response.send("<html>"+new Date ()+"</html>");
});

app.listen(80);

console.log("Server ready");