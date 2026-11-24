// import { useState } from 'react';
// import './elist.css';
// import noteContext from './NoteContext';
// import React ,{useContext} from 'react';
// export default function Employeelist(){
//     const [employee,setEmployee]=useState([
//          {
//         id:101,
//         name:"Rahul",
//         gender:"M",
//         dob:"25/07/1999",
//         dep:"Account",
//         cont:8018320000
//        },
//         {
//         id:102,
//         name:"Ajay",
//         gender:"M",
//         dob:"22/04/1999",
//         dep:"HR",
//         cont:9018320000
//        },
//     ]
//    );
//    const a=useContext(noteContext)
//     return(
//         <div className="t-Container">
//           <table>
//             <thead>
//                 <tr>
//                     <th>S.No</th>
//                     <th>E.Id</th>
//                     <th>Name</th>
//                     <th>Gender</th>
//                     <th>DOB</th>
//                     <th>Department</th>
//                     <th>Contact No.</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>{employee[0].id}</td>
//                     <td>{employee[0].name}</td>
//                     <td>{employee[0].gender}</td>
//                     <td>{employee[0].dob}</td>
//                     <td>{employee[0].dep}</td>
//                     <td>{employee[0].cont}</td>
//                  </tr>
//                    <tr>
//                     <td>2</td>
//                    <td>{employee[1].id}</td>
//                     <td>{employee[1].name}</td>
//                     <td>{employee[1].gender}</td>
//                     <td>{employee[1].dob}</td>
//                     <td>{employee[1].dep}</td>
//                     <td>{employee[1].cont}</td>
//                  </tr>
//                  <tr>
//                   <td>3</td>
//                    <td>{a.id}</td>
//                     <td>{a.name}</td>
//                     <td>{a.gender}</td>
//                     <td>{a.dob}</td>
//                     <td>{a.dep}</td>
//                     <td>{a.cont}</td>

//                  </tr>
//             </tbody>
//           </table>
//         </div>
//     );
// }
import { useContext } from "react";
import noteContext from "./NoteContext";

export default function Employeelist() {

    const { employees } = useContext(noteContext);

    return (
        <div className="t-Container">

            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>E.Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Department</th>
                        <th>Designation</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((item, index) => (
                        <tr key={item.employeeId}>
                            <td>{index + 1}</td>
                            <td>{item.employeeId}</td>
                            <td>{item.fullName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.department}</td>
                            <td>{item.designation}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

            {employees.length === 0 && <p>No Employees Found</p>}

        </div>
    );
}