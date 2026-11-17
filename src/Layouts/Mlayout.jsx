// import MyNavbar from "../component/MyNavbar";
import SidebarM from "../component/SidebarM";
import "./layout.css";
import { Outlet } from "react-router-dom";

function Mlayout() {
    return (
        <>
                  <div className="employee-layout">
            
                            <div className="employee-sidebar">
                                <SidebarM />
                            </div>
            
                            <div className="employee-content">
                                <Outlet />
                            </div>
            
                        </div>
        </>
    );
}


export default Mlayout;


