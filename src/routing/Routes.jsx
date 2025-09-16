import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import Menu from "../pages/Menu";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import Chef from "../pages/Chef";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

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
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "menu",
        element: <Menu/>,
      },
      {
        path: "chef",
        element: <Chef/>,
      },
      {
        path: "blog",
        element: <Blog/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      }
    ],
  },
]);

export default Routes;
