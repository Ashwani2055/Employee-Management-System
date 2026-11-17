import { useNavigate } from "react-router-dom";
import "./login.css";
export default function Login() {

    const navigate = useNavigate();  
    // basically a help karta HAI EK PAGE SE DUSARE PAGE MEY JAANE K LIYE AUR A REACT ROUTER DOM SE AATA HAI 

    return (
        <div className="main-container">

            <div className="welcome">
                <h1>Welcome Back!</h1>
                <p>Please select your account type to continue.</p>
            </div>

            <div className="login-container">

                <div className="login-card employee">
                    <h2>Employee</h2>
                    <p>Employee portal</p>

                    <button
                        className="login-btn employee-btn"
                        onClick={() => navigate("/employee/dashboard")}
                    >
                        Login
                    </button>
                </div>

                <div className="login-card manager">
                    <h2>Manager</h2>
                    <p>Manager portal</p>

                    <button
                        className="login-btn manager-btn"
                        onClick={() => navigate("/manager/dashboard")}
                    >
                        Login
                    </button>
                </div>

            </div>
        </div>
    );
}