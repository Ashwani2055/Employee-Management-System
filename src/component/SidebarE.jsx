import { NavLink } from "react-router-dom";
import "./Sidebar.css"; 
export default function SidebarE() {
    return (   
        <div className="sidebar">
            <div>
                <h3 style={{ color: 'white',position:'fixed'}}>Employee DashBoard</h3>
            </div>
         <ul>
                <li>
                    <NavLink to="/employee/dashboard">
                     Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/employee/apply-leave">
                        Apply For Leave
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/employee/leave-status">
                        My Leave
                    </NavLink>
                </li>
                 <li>
                    <NavLink to="/employee/task">
                        Task
                    </NavLink>
                </li>
                 <li>
                    <NavLink to="/employee/todolist">
                      To-Do List
                    </NavLink>
                </li>

                  <li>
                    <NavLink to="/employee/profile">
                        My Profile
                    </NavLink>
                </li>
            </ul>
   </div>
           
      
    );
}