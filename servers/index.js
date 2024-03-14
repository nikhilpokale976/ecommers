const express =require('express');
const App = express();
App.use(express.json());
const cors = require("cors");
require('dotenv').config
const {dbconnect} = require('./config/db');
const data = require('./router/router')
const PORT = process.env.PORT || 5000

App.use(
        cors({
          origin: "*",
        })
      );


App.listen(PORT ,(req , res) => {
        console.log(`app run on a ${PORT}`);
})

App.use("/api", data);

dbconnect();