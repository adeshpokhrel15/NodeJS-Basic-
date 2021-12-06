var http = require ('http');
var uc = require ('upper-case');
http.createServer(function(req,res){

    res.write(uc.upperCase("Hello Sathi haru"));
    res.end();

}).listen(1100)