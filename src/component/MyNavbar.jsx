import "./MyNavbar.css";
import { useNavigate } from "react-router-dom";

export default function MyNavbar() {

    const navigate = useNavigate();

    const employeeName = "Rahul";

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="topbar">

            <h3>EMS</h3>

            <div className="topbar-right">

                <span>Welcome, {employeeName}</span>

                <button onClick={handleLogout}>
                    Logout
                </button>

            </div>

        </div>
    );
}