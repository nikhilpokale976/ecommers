const Cart = require('../model/cartdata');


exports.cartdata = async (req , res ) => {
            try{

                const data = await Cart.find({});
                res.status(200).json({
                    success:true,
                    data:data,
                    message:"data fetch successfully",
                })


            }catch(error){
                console.log('error occured in cart data ');
                res.status(400).json({
                    succsse:true,
                    message:error,
                })
            }

}