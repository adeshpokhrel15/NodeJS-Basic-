const express = require ('express');
const app = express ();
const checkurl = function (res,req,next)
{
    console.warn("current route is ", req.orginalUrl)
next();
}
app.use(checkurl)

router.get ('/', checkurl, function (req,res){
    res.send("Home page");
   
});
app.use('/',router)

app.get ('/login', function (req,res){
    res.send("Login page");
   
});

app.listen(1600);