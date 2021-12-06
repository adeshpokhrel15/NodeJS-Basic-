// var http = require ('http');
// http.createServer( function(req,res) {
//     res.writeHead(200,{'Content-Type':'application\json'})

// res.write('{"name":"Adesh"}');
// res.end();
// }).listen(4000)

// Http is module for server create 
// request ra response is function parameter
// writeHead ko port jaile 200 hunxa and Content-Type\json is fix type 
// res.write ma j mann xa tei lekhne ho 
// res.write paxi jaile END garna parxa 
// server ko port chai your wish 

var http = require ('http');
var data = '{name:"Adesh", address:"Manamaiju"}'
http.createServer( function(req,res) {
    res.writeHead(200,{'Content-Type':'application\json'})

res.write(data);
res.end();
}).listen(4000)
