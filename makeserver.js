var http = require ('http');
http.createServer (function(req,res){
    res.write("Hello World from 5000 server");
    res.end();

}).listen(5000)