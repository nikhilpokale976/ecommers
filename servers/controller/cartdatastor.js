const Cartdata = require('../model/cartdatastore');


exports.cartdatastor = async (req , res ) => {
            try{

                const {firstname , lastname , address} = req.body;
                console.log(firstname);

                const data = await Cartdata.create({firstname , lastname , address});
                console.log(data);
                res.status(200).json({
                    success:true,
                    data:data,
                    message:"data fetch successfully",
                })


            }catch(error){
                console.log('error occured in create cart  ');
                res.status(400).json({
                    succsse:true,
                    message:error,
                })
            }

}