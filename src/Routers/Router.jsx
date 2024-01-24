import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Assignments from "../pages/Assignments/Assignments";
import MyAssignments from "../pages/MyAssignments/MyAssignments";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import SubmittedAssignments from "../pages/SubmittedAssignments/SubmittedAssignments";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <SignUp></SignUp>
            },
            {
                path: "/assignments",
                element: <Assignments></Assignments>
            },
            {
                path: "/my-assignments",
                element: <PrivetRouter><MyAssignments></MyAssignments></PrivetRouter>
            },
            {
                path: "/create-assignment",
                element: <CreateAssignment></CreateAssignment>
            },
            {
                path: "/submitted-assignments",
                element: <SubmittedAssignments></SubmittedAssignments>
            }
        ]
    }
])

export default router;