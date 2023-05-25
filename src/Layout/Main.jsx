import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation()
    const noHeaderNoFooter = location.pathname.includes('/login')
    return (
        <div>
            {noHeaderNoFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderNoFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;