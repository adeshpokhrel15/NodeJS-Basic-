var express = require ('express');
var app = express ();

app.get('/home',function(req,res){
    res.send("Hello from home ")
});


app.get('/about',function(req,res){
    res.send("Hello from about ")
});

app.post('/contact',function(req,res){
    res.send("Hello from contact ")
}).listen(1500)


// get means we are getting something 
// post mean we are sending something 
// post most of the time we use in while calling API