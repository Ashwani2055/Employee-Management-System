
import { useState } from "react";
// import "./Edashboard.css";

export default function Mdashboard() {

    const [employee] = useState({
        name: "Rahul Sharma",
        id: "EMP001",
        department: "Development",
        designation: "React Developer"
    });

    const [leaveRequests] = useState([
        {
            id: 1,
            type: "Casual Leave",
            from: "10 Nov 2026",
            to: "11 Nov 2026",
            status: "Pending"
        },
        {
            id: 2,
            type: "Sick Leave",
            from: "20 Oct 2026",
            to: "20 Oct 2026",
            status: "Approved"
        },
        {
            id: 3,
            type: "Casual Leave",
            from: "05 Sep 2026",
            to: "06 Sep 2026",
            status: "Rejected"
        }
    ]);

    return (
        <div className="employee-dashboard">

            {/* Welcome Section */}
            <div className="dashboard-welcome">
                <div>
                    <h2>Welcome back, {employee.name}!</h2>
                    <p>Here is your employee dashboard overview.</p>
                </div>

                <div className="employee-info">
                    <h5>{employee.id}</h5>
                    <p>{employee.department}</p>
                </div>
            </div>

            {/* Employee Details */}
            <div className="employee-details">
                <div>
                    <span>Employee Name</span>
                    <h5>{employee.name}</h5>
                </div>

                <div>
                    <span>Employee ID</span>
                    <h5>{employee.id}</h5>
                </div>

                <div>
                    <span>Department</span>
                    <h5>{employee.department}</h5>
                </div>

                <div>
                    <span>Designation</span>
                    <h5>{employee.designation}</h5>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="dashboard-cards">

                <div className="stat-card blue">
                    <h6>Present Days</h6>
                    <h2>18</h2>
                    <p>This Month</p>
                </div>

                <div className="stat-card yellow">
                    <h6>Pending Leaves</h6>
                    <h2>2</h2>
                    <p>Waiting for approval</p>
                </div>

                <div className="stat-card green">
                    <h6>Available Leaves</h6>
                    <h2>12</h2>
                    <p>Remaining balance</p>
                </div>

                <div className="stat-card purple">
                    <h6>Absent Days</h6>
                    <h2>1</h2>
                    <p>This Month</p>
                </div>

            </div>

            {/* Recent Leave Requests */}
            <div className="leave-section">

                <h4>My Recent Leave Requests</h4>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Leave Type</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {leaveRequests.map((leave) => (
                                <tr key={leave.id}>
                                    <td>{leave.type}</td>
                                    <td>{leave.from}</td>
                                    <td>{leave.to}</td>
                                    <td>
                                        <span className={`status ${leave.status.toLowerCase()}`}>
                                            {leave.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
}
