import "./layout.css";
import MyNavbar from "../component/MyNavbar";
import { Outlet } from "react-router-dom";
import SidebarE from "../component/SidebarE.jsx";

function Elayout() {
    return (
        <>
            {/* <MyNavbar /> */}
            
            <div className="employee-layout">

                <div className="employee-sidebar">
                    <SidebarE />
                </div>

                <div className="employee-content">
                    <Outlet />
                </div>

            </div>
        </>
    );
}

export default Elayout;
