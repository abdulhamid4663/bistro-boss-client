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
            {
                path: "addItems",
                element: <AdminRoute><AddItems /></AdminRoute>
            },
            {
                path: "users",
                element: <AdminRoute><Users /></AdminRoute>
            },
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
                element: <div><h1>This is payment history.</h1></div>
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
        ]
    },
])

export default router;