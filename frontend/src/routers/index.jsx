import {createBrowserRouter} from "react-router-dom"
import BaseLayout from "../layouts/baselayout"
import Home from "../views/HomePage"
import Login from "../views/LoginPage"

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        element: <BaseLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
        ]
    }
])

export default router