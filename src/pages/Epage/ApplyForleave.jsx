
import { useContext } from "react";
import EContext from "./EContext";
import './ApplyLeave.css';

export default function ApplyForleave() {

  // const [leave, setLeave] = useState({
  //   employeeId: "",
  //   employeeName: "",
  //   department: "",
  //   leaveType: "",
  //   fromDate: "",
  //   toDate: "",
  //   reason: ""
  // });

  // const handleChange = (e) => {
  //   setLeave(
  //     {
  //     ...leave,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(leave);

  //   alert("Leave Application Submitted Successfully!");

  //   setLeave({
  //     employeeId: "",
  //     employeeName: "",
  //     department: "",
  //     leaveType: "",
  //     fromDate: "",
  //     toDate: "",
  //     reason: ""
  //   });
  // };
  const context = useContext(EContext);

const { leave, handleChange, handleSubmit } = context;
  return (
    <div className="leave-container">

      <h2>Apply for Leave</h2>
      <p>Fill in the details to submit your leave request.</p>

      <form onSubmit={handleSubmit}>

        <div className="leave-grid">

          <div className="leave-group">
            <label>Employee ID</label>
            <input
              type="text"
              name="employeeId"
              placeholder="EMP001"
              value={leave.employeeId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="leave-group">
            <label>Employee Name</label>
            <input
              type="text"
              name="employeeName"
              placeholder="Enter your name"
              value={leave.employeeName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="leave-group">
            <label>Department</label>
            <select
              name="department"
              value={leave.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          <div className="leave-group">
            <label>Leave Type</label>
            <select
              name="leaveType"
              value={leave.leaveType}
              onChange={handleChange}
              required
            >
              <option value="">Select Leave Type</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Paid Leave">Paid Leave</option>
              <option value="Unpaid Leave">Unpaid Leave</option>
              <option value="Emergency Leave">Emergency Leave</option>
            </select>
          </div>

          <div className="leave-group">
            <label>From Date</label>
            <input
              type="date"
              name="fromDate"
              value={leave.fromDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="leave-group">
            <label>To Date</label>
            <input
              type="date"
              name="toDate"
              value={leave.toDate}
              onChange={handleChange}
              min={leave.fromDate || undefined}
              required
            />
          </div>

        </div>

        <div className="leave-group reason-group">
          <label>Reason for Leave</label>
          <textarea
            name="reason"
            placeholder="Explain why you need leave..."
            value={leave.reason}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="leave-btn">
          Submit Leave Request
        </button>

      </form>

    </div>
  );
}
