import {createBrowserRouter} from "react-router-dom"
import BaseLayout from "../layouts/baselayout"
import Home from "../views/HomePage"
import Login from "../views/LoginPage"
import Monitoring from "../views/MonitoringPage"
import Maintenance from "../views/MaintenancePage"
import Corrective from "../views/CorrectivePage"
import Breakdown from "../views/BreakdownPage"

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
            {
                path: "/monitoring",
                element: <Monitoring/>
            },
            {
                path: "/maintenance",
                element: <Maintenance/>
            },
            {
                path: "/corrective",
                element: <Corrective/>
            },
            {
                path: "/breakdown",
                element: <Breakdown/>
            },
        ]
    }
])

export default router