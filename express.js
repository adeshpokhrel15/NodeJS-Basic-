var express = require ('express');
var app = express();

app.get('/about',function(req,res){
    res.send("Hello World")
}).listen(1400)
// .get helps to take request and response from browser
