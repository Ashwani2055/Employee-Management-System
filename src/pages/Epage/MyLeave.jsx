import EContext from './EContext';
import { useContext } from "react";
import './Leave.css';
export default function MyLeave(){
    const { leave } = useContext(EContext);

    return(
        <div className="leave-list-container">

            <h2>Employee Leave Applications</h2>

            <div className="table-responsive">

                <table className="leave-table">

                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Department</th>
                            <th>Leave Type</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Reason</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>{leave.employeeId}</td>
                           <td>{leave.employeeName}</td>
                            <td>{leave.department}</td>
                            <td>{leave.leaveType}</td>
                            <td>{leave.fromDate}</td>
                            <td>{leave.toDate}</td>
                            <td>{leave.reason}</td>
                        </tr>

                     

                    </tbody>

                </table>

            </div>

        </div>
    );
}