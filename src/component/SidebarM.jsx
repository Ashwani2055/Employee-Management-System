import { NavLink } from "react-router-dom";

export default function SidebarM() {
    return (
        <div className="sidebar">
             <div>
             <h3 style={{ color: 'white',position:'fixed'}}>Manager Panel</h3>
             </div>
        

            <ul>
                  <li>
                    <NavLink to="/manager/dashboard">
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/manager/employee-list">
                        Employee List
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/manager/leave-requests">
                        Leave Request
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/manager/attendance">
                        Attendance
                    </NavLink>
                </li>

              
                  <li>
                    <NavLink to="/manager/add-employee">
                       Add Employee
                    </NavLink>
                </li>
            </ul>

        </div>
    );
}