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
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import ViewAssignment from "../pages/ViewAssignment/ViewAssignment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <Assignments></Assignments>,
                loader: () => fetch('https://online-group-study-server-gold.vercel.app/assignments')
            },
            {
                path: "/my-assignments",
                element: <PrivetRouter><MyAssignments></MyAssignments></PrivetRouter>,
                // loader: ()=> fetch(`https://online-group-study-server-gold.vercel.app/api/v1/my-assignment`)
            },
            {
                path: "/create-assignment",
                element: <PrivetRouter><CreateAssignment></CreateAssignment></PrivetRouter>
            },
            {
                path: "/submitted-assignments",
                element: <PrivetRouter><SubmittedAssignments></SubmittedAssignments></PrivetRouter>,
                loader: () => fetch('https://online-group-study-server-gold.vercel.app/api/v1/submitted-assignment')
            },
            {
                path: "/update-assignment/:id",
                element: <PrivetRouter><UpdateAssignment></UpdateAssignment></PrivetRouter>,
                loader: ({ params }) => fetch(`https://online-group-study-server-gold.vercel.app/assignments/${params.id}`)
            },
            {
                path: "/assignment-details/:id",
                element: <PrivetRouter><ViewAssignment></ViewAssignment></PrivetRouter>,
                loader: ({ params }) => fetch(`https://online-group-study-server-gold.vercel.app/assignments/${params.id}`)
            }
        ]
    }
])

export default router;