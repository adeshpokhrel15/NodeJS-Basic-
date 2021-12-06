const express = require ('express');
const app = express ();
const mongoose = require('mongoose');

const User = require('./pokhrel')

mongoose.connect('mongodb+srv://rajkumar:q8sncL9g9fAKAgcP@cluster0.jlnmv.mongodb.net/pokhrel?retryWrites=true&w=majority',
{

    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);

app.get('/pokhrel',function(req,res){
    var data= User.find().then((data)=>{
        res.json(data)
    })
})
app.listen(1900)