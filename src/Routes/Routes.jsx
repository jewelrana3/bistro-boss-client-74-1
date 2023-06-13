import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secred from "../pages/shared/Secred/Secred";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../ErrorPage";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManegeItem from "../pages/DashBoard/ManegeItem/ManegeItem";
import Payment from "../pages/DashBoard/Payment/Payment";
// import MyCart from "../pages/DashBoard/MyCart/MyCart";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secred',
          element:<PrivateRouter><Secred></Secred></PrivateRouter>
        },
       
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRouter><DashBoard></DashBoard></PrivateRouter>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'allusers',
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path:'additem',
          element:<AdminRoutes><AddItem></AddItem></AdminRoutes>
        },
        {
          path:'manegeitem',
          element:<ManegeItem></ManegeItem>
        }
      ]
    }
  ]);