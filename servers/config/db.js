const mongoose = require('mongoose');
require("dotenv").config();
exports.dbconnect = async() =>{
    try{
           await mongoose.connect(process.env.MONGO_URL)
            .then(()=>(console.log('db connected')))
            .catch((error)=>console.log(error));
    }
    catch(error){
        console.log(error);

    }
}
