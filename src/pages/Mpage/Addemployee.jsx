
import { useState } from "react";
import "./Addemp.css";
export default function Addemployee() {

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

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(employee);

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
    <div className="employee-container">

      <h2>Add New Employee</h2>
      <p>Enter employee information below</p>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          <div className="form-group">
            <label>Employee ID</label>
            <input
              type="text"
              name="employeeId"
              placeholder="EMP001"
              value={employee.employeeId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={employee.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={employee.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={employee.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              name="department"
              value={employee.department}
              onChange={handleChange}
              required
            >
              <option value="">Select department</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              placeholder="e.g. Software Developer"
              value={employee.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Joining Date</label>
            <input
              type="date"
              name="joiningDate"
              value={employee.joiningDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input
              type="number"
              name="salary"
              placeholder="Enter salary"
              value={employee.salary}
              onChange={handleChange}
              required
            />
          </div>

        </div>

        <div className="form-group address-group">
          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter employee address"
            value={employee.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="add-btn">
          Add Employee
        </button>

      </form>

    </div>
  );
}
