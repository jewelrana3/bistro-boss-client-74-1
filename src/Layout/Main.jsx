import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";
import ErrorPage from "../ErrorPage";


const Main = () => {
    const location = useLocation()
    const noHeaderNoFooter = location.pathname.includes('/login') ||
    location.pathname.includes('/signup')
    return (
        <div>
            {noHeaderNoFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderNoFooter || <Footer></Footer>}
            <ErrorPage></ErrorPage>
        </div>
    );
};

export default Main;