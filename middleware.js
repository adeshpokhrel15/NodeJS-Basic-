// use in routes
// by creating common function we can use routes anywhere 
// chechurl wala function is middleware

const express = require ('express');
const app = express ();
const checkurl = function (res,req,next)
{
    console.warn("current route is ", req.orginalUrl)
next();
}
app.use(checkurl)


app.get ('/', function (req,res){
    res.send("Home page");
   
});
app.get ('/login', function (req,res){
    res.send("Login page");
   
});



app.listen(1600);