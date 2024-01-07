import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Phone from "../Pages/Phone/Phone";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`/Course.json`),
      },
      {
        path: "/Favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Phones/:id",
        element: <Phone></Phone>,
        loader: () => fetch(`/Course.json`),
      },
    ],
  },
]);

export default route;
