var http = require ('http');
http.createServer(function(req,res){
    res.write("NodeMon lie ho hai bro");
    res.end();


}).listen(1200)