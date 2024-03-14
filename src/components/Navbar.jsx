import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const {cart} =useSelector((state)=>state);
  return (
    <div>
        <nav className="flex mx-[150px] justify-between ">
                  <NavLink to="/">
                  <div className="m-5">
                    <img src="./logo.png" className="h-12"></img>
                  </div>
                  </NavLink>

                  <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                            <NavLink to="/">
                            <p className="">Home</p></NavLink>

                            <NavLink to="/cart">
                            <div className="relative">
                            <HiShoppingCart  className="text-2xl"/>
                            {
                              cart.length > 0 && <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full">{cart.length}</span>
                            }
                            </div>
                            </NavLink>


                  </div>
        </nav>



        </div>



      


  )
};

export default Navbar;
