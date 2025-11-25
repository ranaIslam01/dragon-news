import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CatagoryNews from "../Pages/CatagoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import Loder from "../Components/Loder";
import ErrorPage from "../Pages/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CatagoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loder></Loder>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivetRoute>
        <NewsDetails></NewsDetails>
      </PrivetRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loder></Loder>
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>
  },
]);
