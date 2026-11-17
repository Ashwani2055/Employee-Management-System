import { useState } from 'react';
import './elist.css';
export default function Employeelist(){
    const [employee,setEmployee]=useState([
         {
        id:101,
        name:"Rahul",
        gender:"M",
        dob:"25/07/1999",
        dep:"Account",
        cont:8018320000
       },
        {
        id:102,
        name:"Ajay",
        gender:"M",
        dob:"22/04/1999",
        dep:"HR",
        cont:9018320000
       },
    ]
   );
    return(
        <div className="t-Container">
          <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>E.Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Department</th>
                    <th>Contact No.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{employee[0].id}</td>
                    <td>{employee[0].name}</td>
                    <td>{employee[0].gender}</td>
                    <td>{employee[0].dob}</td>
                    <td>{employee[0].dep}</td>
                    <td>{employee[0].cont}</td>
                 </tr>
                   <tr>
                    <td>2</td>
                   <td>{employee[1].id}</td>
                    <td>{employee[1].name}</td>
                    <td>{employee[1].gender}</td>
                    <td>{employee[1].dob}</td>
                    <td>{employee[1].dep}</td>
                    <td>{employee[1].cont}</td>
                 </tr>
            </tbody>
          </table>
        </div>
    );
}