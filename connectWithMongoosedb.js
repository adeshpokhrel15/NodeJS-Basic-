// cloud.mongodb.com
// 1. cluster banaune 
// 2. collection ma gayara Load sample data 
    // database name : adesh collection collection name: pokhrel
    // Database access ma gayara : password: q8sncL9g9fAKAgcP // user name : rajkumar 
    // Network access: 0.0.0.0 
// connect garna aba 

// mongodb+srv://rajkumar:<password>@cluster0.jlnmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// we pass two parameter in then 

const express = require ('express');
const app = express ();
const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://rajkumar:q8sncL9g9fAKAgcP@cluster0.jlnmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/pokhrel',
{

    useNewUrlParser: true,
    useUnifiedTopology: true,
}
).then(()=>{
    console.log("db connected done")
})
