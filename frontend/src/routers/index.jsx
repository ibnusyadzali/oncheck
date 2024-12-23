import {createBrowserRouter} from "react-router-dom"
import BaseLayout from "../layouts/baselayout"
import Home from "../views/home"
import Login from "../views/login"

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