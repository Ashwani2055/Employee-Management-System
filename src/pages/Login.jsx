// import { useNavigate } from "react-router-dom";
// import "./login.css";
// export default function Login() {

//     const navigate = useNavigate();  
//     // basically a help karta HAI EK PAGE SE DUSARE PAGE MEY JAANE K LIYE AUR A REACT ROUTER DOM SE AATA HAI 

//     return (
//         <div className="main-container">

//             <div className="welcome">
//                 <h1>Welcome Back!</h1>
//                 <p>Please select your account type to continue.</p>
//             </div>

//             <div className="login-container">

//                 <div className="login-card employee">
//                     <h2>Employee</h2>
//                     <p>Employee portal</p>

//                     <button
//                         className="login-btn employee-btn"
//                         onClick={() => navigate("/employee/dashboard")}
//                     >
//                         Login
//                     </button>
//                 </div>

//                 <div className="login-card manager">
//                     <h2>Manager</h2>
//                     <p>Manager portal</p>

//                     <button
//                         className="login-btn manager-btn"
//                         onClick={() => navigate("/manager/dashboard")}
//                     >
//                         Login
//                     </button>
//                 </div>

//             </div>
//         </div>
//     );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Manager Login Details
    const manager = {
        email: "manager@gmail.com",
        password: "12345"
    };

    // Employee Login Details
    const employees = [
        {
            email: "employee@gmail.com",
            password: "12345"
        },
        {
            email: "employee2@gmail.com",
            password: "67890"
        },
        {
            email: "employee3@gmail.com",
            password: "11111"
        }
    ];

    const handleLogin = (e) => {

        e.preventDefault();

        // Check Manager Login
        if (
            email === manager.email &&
            password === manager.password
        ) {

            navigate("/manager/dashboard");

        }

        // Check Employee Login
        else if (
            employees.find(
                (item) =>
                    item.email === email &&
                    item.password === password
            )
        ) {

            navigate("/employee/dashboard");

        }

        // Invalid Login
        else {

            setError("Invalid email or password");

        }

    };

  
return (
    <div className="main-container">

        {/* Left Side */}
        <div className="login-left">

            <div className="logo">
                <span>◈</span> EMS Portal
            </div>

            <div className="login-content">

                <div className="welcome">
                    <h1>Welcome back</h1>
                    <p>Please enter your details</p>
                </div>

                <form className="login-card" onSubmit={handleLogin}>

                    <label>Email address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                        }}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError("");
                        }}
                        required
                    />

                    {error && (
                        <p className="error-message">{error}</p>
                    )}

                    <button type="submit" className="login-btn">
                        Sign in
                    </button>

                    <p className="login-footer">
                        Employee & Manager Portal
                    </p>

                </form>

            </div>
        </div>

        {/* Right Side */}
        <div className="login-right">
            <div className="right-content">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>

                <div className="illustration">
                    <span>EMS</span>
                    <h1>Manage your workforce</h1>
                    <p>One place to manage employees, attendance and leaves.</p>
                    <div className="illustration-icon">👨‍💼</div>
                </div>
            </div>
        </div>

    </div>
);


}
