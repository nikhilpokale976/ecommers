const mongoose = require('mongoose');

const cartdataschema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
    },
    address:{
            type:String,
    },
}) ;

module.exports = mongoose.model ("Cartdata" , cartdataschema , "data");