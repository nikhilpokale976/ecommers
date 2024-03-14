const mongoose = require('mongoose');

const cartschema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:String,
    },
    description:{
            type:String,
    },
    image:{
            type:String
    },
    rating:{
        type:String,
    }
}) ;

module.exports = mongoose.model ("Cart" , cartschema , "cart");