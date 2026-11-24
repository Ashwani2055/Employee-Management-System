// import { useState, useContext } from "react";
// import { useState } from "react";
// import "./Attendance.css";

// export default function Attendance() {

//     const [data, setData] = useState({
//         name: "Ajay",
//         Eid: "101",
//         department: "Account"
//     });
//     const [status,setStatus]=useState(false)
//      const { employees } = useContext(noteContext);
//     return (
//         <div className="outerbox">

//             <h3>Attendance</h3>
//             <p>Manage Daily Employee Attendance</p>

//             <div className="outerbox1">
//                 <p>Total Employees</p>
//                 <h2>50</h2>
//             </div>

//             <div className="box">

//                 <div className="attendance-card present-card">
//                     <h3>13</h3>
//                     <p>Present</p>
//                 </div>

//                 <div className="attendance-card absent-card">
//                     <h3>13</h3>
//                     <p>Absent</p>
//                 </div>

//                 <div className="attendance-card leave-card">
//                     <h3>13</h3>
//                     <p>On Leave</p>
//                 </div>

//                 <div className="attendance-card">
//                     <h3>84%</h3>
//                     <p>Attendance</p>
//                 </div>

//             </div>
//  <div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>E.Id</th>
//                             <th>Name</th>
//                             <th>Department</th>
//                             <th>Attendance</th>
//                         </tr>
//                     </thead>
//                            <tbody>
//                     {employees.map((item, index) => (
//                         <tr key={item.employeeId}>
//                             <td>{index + 1}</td>
//                             <td>{item.employeeId}</td>
//                             <td>{item.fullName}</td>
//                             <td>{item.department}</td>
//                                <td>
//                                 <div className="butt">
//                                     <button onClick={()=>setStatus(false)}>A</button>
//                                     <button className="active-p">P</button>
//                                 </div>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//                     {/* <tbody>
//                         <tr>
//                             <td>{data.Eid}</td>
//                             <td>{data.name}</td>
//                             <td>{data.department}</td>
//                             <td>
//                                 <div className="butt">
//                                     <button onClick={()=>setStatus(false)}>A</button>
//                                     <button className="active-p">P</button>
//                                 </div>
//                             </td>
//                         </tr>
//                     </tbody> */}

//                 </table>
//             </div>
//         </div>
 
//     );
// }

import noteContext from "./NoteContext";
import { useContext, useState } from "react";
import "./Attendance.css";

export default function Attendance() {

    const { employees } = useContext(noteContext);

    const [attendance, setAttendance] = useState({});

 const handleAttendance = (e) => {
    setAttendance({
        ...attendance,
        [e.target.id]: e.target.value
    });
};

    const presentCount = Object.values(attendance)
        .filter(status => status === "Present").length;

    const absentCount = Object.values(attendance)
        .filter(status => status === "Absent").length;

    const totalEmployees = employees.length;

    return (
        <div className="outerbox">

            <h3>Attendance</h3>
            <p>Manage Daily Employee Attendance</p>

            <div className="outerbox1">
                <p>Total Employees</p>
                <h2>{totalEmployees}</h2>
            </div>

            <div className="box">

                <div className="attendance-card present-card">
                    <h3>{presentCount}</h3>
                    <p>Present</p>
                </div>

                <div className="attendance-card absent-card">
                    <h3>{absentCount}</h3>
                    <p>Absent</p>
                </div>

                <div className="attendance-card leave-card">
                    <h3>0</h3>
                    <p>On Leave</p>
                </div>

                <div className="attendance-card">
                    <h3>
                        {totalEmployees === 0 ? 0 :
                            Math.round((presentCount / totalEmployees) * 100)}%
                    </h3>
                    <p>Attendance</p>
                </div>

            </div>

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
                    {employees.map((item) => (
                        <tr key={item.employeeId}>
                            <td>{item.employeeId}</td>
                            <td>{item.fullName}</td>
                            <td>{item.department}</td>

                            <td>
                                <div className="butt">
                                    <button value={Absent}
                                        onClick={() => handleAttendance()}
                                    >
                                        A
                                    </button>

                                    <button value={Present}
                                        onClick={() => handleAttendance()}
                                    >
                                        P
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}