import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
   const[result , setresult] = useState(''); 
  const handleSubmit = async(event) =>{
    event.preventDefault();

    const response = await fetch('http://localhost:4000/api/cartdata', {
      method: 'POST',
      body: JSON.stringify(orderDetails),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
    setresult(result);
  }
  const orderDetails = {
    firstname: firstName,
    lastname: lastName,
    address: address,
    
    // Other order details can be added here
  };

      const {cart} = useSelector((state)=>state);

      const [totalamount , settotalamount] = useState(0);

      useEffect(()=>{
          settotalamount(cart.reduce( (acc , cur) => acc +cur.price, 0 ));
      },[cart])
      
   

  return (

      <div className="flex mx-24">

          {
                  cart.length > 0 ? 
                  (
                      <div className="flex">
                           <div>
                              {
                                  cart.map((item , index) => {
                                    
                                   return( 
                                    <div>
                                    <CartItem  key={item.id}  item={item} itemindex={index}/>
                                    <hr className="border-2 border-black mt-5"/> 
                                    </div>
                                   )
                                  
                              })

                              }
                              <br/>
                                     
                          </div>
                                               
                        
                            <div className="p-5">
                                  <div>
                                      <div className="font-bold text-2xl mx-5 mt-5 text-green-400">Your Cart</div>
                                      <div className="font-bold text-2xl mx-5 mt-2 text-green-400">Summary</div>

                                      <div>
                                      <p className="font-bold text-2xl mx-5 mt-5 text-green-400" > 
                                      Total Items : {cart.length}
                                      </p>
                                     </div>
                                 </div>   
                                 <div>
                              <p className="font-bold text-2xl mx-5 mt-5 text-green-400">
                                    Total Ammount : ${totalamount};
                              </p>
                              <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" className=" mt-5 text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Place Your Order</button>
      </form>

      {result? (<div><h1>order is plcae successfully</h1></div>): ("")}
                          
                              </div> 
                           </div>
                      </div>
                        
                  )
                  :
                  (
                    <div className="w-full h-full mt-36 flex flex-col justify-center items-center">
                          <h1 className="font-bold text-3xl ">Cart Is Empty</h1>
                          <NavLink to="/" >
                            <button className="bg-green-400 text-white p-4 mt-5 rounded-md hover:bg-green-900">Shop Now</button>
                          </NavLink>


                    </div>
                  )


          }


       
     </div>



  )
};

export default Cart;
