import { createBrowserRouter } from "react-router-dom";
import { paths } from "../paths";
import { HomePage } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const router = createBrowserRouter([
    {
        path: paths.home,
        element: <HomePage />
    },
    {
        path: paths.login,
        element: <Login />
    },
    {
        path: paths.register,
        element: <Register />
    },
])