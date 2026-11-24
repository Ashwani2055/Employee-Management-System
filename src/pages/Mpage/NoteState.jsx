import { useState } from "react";
import noteContext from "./NoteContext";

export default function NoteState(props) {

    const [employee, setEmployee] = useState({
        employeeId: "",
        fullName: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        joiningDate: "",
        salary: "",
        address: ""
    });

    // Store multiple employees
    const [employees, setEmployees] = useState([]);

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmployees([...employees, employee]);

        alert("Employee Added Successfully!");

        setEmployee({
            employeeId: "",
            fullName: "",
            email: "",
            phone: "",
            department: "",
            designation: "",
            joiningDate: "",
            salary: "",
            address: ""
        });
    };

    return (
        <noteContext.Provider
            value={{ employee, employees, handleChange, handleSubmit }}
        >
            {props.children}
        </noteContext.Provider>
    );
}