import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyCart from "../components/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import Users from "../components/Users/Users";
import AddItems from "../components/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../components/ManageItems/ManageItems";
import UpdateItem from "../components/UpdateItem/UpdateItem";
import Payment from "../components/Payment/Payment";
import PaymentHistory from "../components/PaymentHistory/PaymentHistory";
import AdminHome from "../components/AdminHome/AdminHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <div></div>
            },
            {
                path: "/ourMenu",
                element: <OurMenu />
            },
            {
                path: "/ourShop",
                element: <OurShop />
            },
        ]
    },
    {
        path: "/signIn",
        element: <SignIn />
    },
    {
        path: "/signUp",
        element: <SignUp />
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            // only admins related routes
            {
                path: "adminHome",
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: "addItems",
                element: <AdminRoute><AddItems /></AdminRoute>
            },
            {
                path: "manageItems",
                element: <AdminRoute><ManageItems /></AdminRoute>
            },
            {
                path: "updateItem/:id",
                element: <AdminRoute><UpdateItem /></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/menus/${params.id}`)
            },
            {
                path: "users",
                element: <AdminRoute><Users /></AdminRoute>
            },
            // user related routes
            {
                path: "userHome",
                element: <div><h1>This is User Home.</h1></div>
            },
            {
                path: "reservation",
                element: <div><h1>This is reservation.</h1></div>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory />
            },
            {
                path: "myCart",
                element: <MyCart />
            },
            {
                path: "addReview",
                element: <div><h1>This is add review.</h1></div>
            },
            {
                path: "myBooking",
                element: <div><h1>This is my booking.</h1></div>
            },
            {
                path: "payment",
                element: <Payment />
            }
        ]
    },
])

export default router;