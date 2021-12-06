var http = require ('http');
http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':"text/html"})

    res.write("Hello Bro HTML page banam");
    res.write("<h1>Hello Adesh <h1>");
    res.write("<input type='text' />");
    res.end();
}).listen(1000)