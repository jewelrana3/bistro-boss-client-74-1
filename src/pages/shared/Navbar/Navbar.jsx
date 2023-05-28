import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const cart = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/secred'>Secred</Link></li>
        <li><Link to='/'>
            <button className="btn gap-2">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>

        </Link></li>

        <li><Link to='/signup'>Sign Up</Link></li>
        {user ? <><button onClick={handleLogOut}>Log Out</button></> : <><li><Link to='/login'>Login</Link></li></>}
    </>

    return (
        <>
            <div className="navbar fixed bg-opacity-30 z-10 text-white bg-black max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;