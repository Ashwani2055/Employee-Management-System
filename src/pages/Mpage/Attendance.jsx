// 

import { useState } from "react";
import "./Attendance.css";

export default function Attendance() {

    const [data, setData] = useState({
        name: "Ajay",
        Eid: "101",
        department: "Account"
    });
    const [status,setStatus]=useState(false)

    return (
        <div className="outerbox">

            <h3>Attendance</h3>
            <p>Manage Daily Employee Attendance</p>

            <div className="outerbox1">
                <p>Total Employees</p>
                <h2>50</h2>
            </div>

            <div className="box">

                <div className="attendance-card present-card">
                    <h3>13</h3>
                    <p>Present</p>
                </div>

                <div className="attendance-card absent-card">
                    <h3>13</h3>
                    <p>Absent</p>
                </div>

                <div className="attendance-card leave-card">
                    <h3>13</h3>
                    <p>On Leave</p>
                </div>

                <div className="attendance-card">
                    <h3>84%</h3>
                    <p>Attendance</p>
                </div>

            </div>
 <div>
                <table>
                    <thead>
                        <tr>
                            <th>E.Id</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{data.Eid}</td>
                            <td>{data.name}</td>
                            <td>{data.department}</td>
                            <td>
                                <div className="butt">
                                    <button onClick={()=>setStatus(false)}>A</button>
                                    <button className="active-p">P</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
 
    );
}
