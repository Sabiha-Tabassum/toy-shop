import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },

        {
            path: 'login',
            element: <Login></Login>
        },

        {
            path: 'signup',
            element: <SignUp></SignUp>
        },

        {
            path: 'alltoys',
            element: <AllToys></AllToys>
        },

        {
            path: 'mytoy',
            element: <MyToys></MyToys>
        },

        {
            path: 'blog',
            element: <Blog></Blog>
        },

        {
            path: 'addtoy',
            element: <AddToy></AddToy>
        },

        {
            path: 'details/:id',
            element: <Details></Details>,
            loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
        }
      ]
    },
  ]);

  export default router;