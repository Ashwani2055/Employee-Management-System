import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// Layouts
import Elayout from "./Layouts/Elayout";
import Mlayout from "./Layouts/Mlayout";

// Login
// import Login from "./pages/Login";
import Login from "./pages/Login.jsx";

// Employee Pages
import Edashboard from "./pages/Epage/Edashboard";
import ApplyForleave from "./pages/Epage/ApplyForleave";

// Manager Pages
// import Mdashboard from "./pages/Mpage/Mdashboard";

import Mdashboard from "./pages/Mpage/Mdashboard.jsx";
import Attendance from "./pages/Mpage/Attendance";
import Addemployee from "./pages/Mpage/Addemployee.jsx";
// import Profile from "./pages/Epage/Profile.jsx";
import Profile from "./pages/Epage/Profile";
import Employeelist from "./pages/Mpage/Employeelist.jsx";
import Task from "./pages/Epage/Task.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },

    // Employee Routes
    {
        path: "/employee",
        element: <Elayout />,
        children: [
            {
                path: "dashboard",
                element: <Edashboard />
            },
            
            {
                path: "apply-leave",
                element: <ApplyForleave />
            },
         
            
            {
                path: "profile",
                element: <Profile/>
            },
             {
                path: "task",
                element: <Task/>
            }
        ]
    },

    // Manager Routes
    {
        path: "/manager",
        element: <Mlayout />,
        children: [
            {
                path: "dashboard",
                element: <Mdashboard/>
            },
            {
                path: "add-employee",
                element: < Addemployee/>
            },
            {
                path: "employee-list",
               element:<Employeelist/>
            },
            {
                path: "attendance",
                element: <Attendance/>
            }
        ]
    },

    {
        path: "*",
        element: <Navigate to="/" replace />
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;