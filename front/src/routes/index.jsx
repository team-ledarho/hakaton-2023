import { createBrowserRouter } from "react-router-dom";
import { paths } from "@paths";
import { HomePage } from "@pages/home";
import { Login } from "@pages/login";
import { Register } from "@pages/register";
import { Personal } from "@pages/personal";
import { Settings } from "@pages/settings";
import { Auth } from "../services/feature/auth.feature";

export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <HomePage />,
  },
  {
    path: paths.login,
    element: (
      <Auth>
        <Login />
      </Auth>
    ),
  },
  {
    path: paths.register,
    element: (
      <Auth>
        <Register />
      </Auth>
    ),
  },
  {
    path: paths.personal,
    element: (
      <Auth>
        <Personal />
      </Auth>
    ),
  },
  {
    path: paths.settings,
    element: (
      <Auth>
        <Settings />
      </Auth>
    ),
  },
]);
