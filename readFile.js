var http = require ('http');
var fs= require ('fs');
http.createServer(function (req,res){
    fs.readFile('readfile.html',function(err,data){
        res.writeHead(200,{'Content-Type':"text/html"});
        res.write(data);
        res.end();
    })


}).listen(1300)


// fs is also the name of the module which is required to read the file module 
// read file takes the two parameter one is html file name and another is callback function 
    //which takes error and data as parameter

