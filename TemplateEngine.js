// dynamic content: each user ko profile dekhauna lie 
// dynamic content can not pass in html file directly so we use template engine 
// template engine is like html file which allows js dynamic content in html file 
// mostly ejs is used as a template engine


const express = require ('express');
const app = express ();

app.set('view engine','ejs');

app.get ("/",function(req,res){

    //res.sendFile(__dirname+'/home.html')
    res.render('profile')

}) 
app.listen(1700)