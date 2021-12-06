// this file is for Mongoose Model 

const mongoose = require ('mongoose');
let userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    emailid: String,
    age: Number
})
module.exports = mongoose.model('pokhrel',userSchema);