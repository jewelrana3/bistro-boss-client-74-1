import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaPaypal, FaCalendarAlt, FaHome } from 'react-icons/fa';
import useCart from "../hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart()
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                mycart
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  ">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/home'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/calendar'><FaCalendarAlt></FaCalendarAlt>Calendar</NavLink></li>
                    <li><NavLink to='/payment'><FaPaypal></FaPaypal>Payment History</NavLink></li>
                    <li>
                        <NavLink to='mycart'>
                        <FaShoppingCart></FaShoppingCart>My Cart
                        <span className="badge badge-secondary">+{cart?.length || 0}</span>
                        </NavLink></li>
                    <div className="divider">OR</div>
                    <li><NavLink to='/'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/menu'>Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;