import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import Home from "../pages/home/Home";
import AboutPage from "../pages/about/AboutPage";
import Menu from "../pages/Menu";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <AboutPage />,
      },
      {
        path: "menu",
        element: <Menu/>,
      }
    ],
  },
]);

export default Routes;
