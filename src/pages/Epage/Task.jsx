import './task.css';
export default function Task(){
    return(

        <div>
                <h2>Task Management </h2>
                <p>Assign,monitor and streamine employee deliverable across departments</p>
                    <div className='task'> 
                           <div className="taskcard">
                    <h6>TOTAL TASKS</h6>
                    <h3>18</h3>
                </div>

                 <div className="taskcard">
                    <h6>IN PROGRESS</h6>
                    <h3>2</h3>
                </div>

                 <div className="taskcard">
                    <h6>PENDING REVIEW</h6>
                    <h3>5</h3>
                </div>

                  <div className="taskcard">
                    <h6>COMPLETED</h6>
                    <h3>3</h3>
                  </div>
                  </div>
                  <div>
                     <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Assigned To</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                   <td>Review Finance & Account Department Records</td>
                   <td> Ajay</td>
                   <td ><p className='notstart'>Not Started</p></td>
                   <td ><p className='Mpriority'>Medium</p></td>
                   <td> 7th of Nov</td>
                   
                 </tr>
                  <tr>
                   <td>Review Finance & Account Department Records</td>
                   <td> Rahul</td>
                   <td ><p className='Progress'>In Progress</p></td>
                   <td ><p className='high'>High</p></td>
                   <td> 7th of Nov</td>
                   
                 </tr>
                  <tr>
                   <td>Review Finance & Account Department Records</td>
                   <td> Ajay</td>
                   <td ><p className='notstart'>Not Started</p></td>
                   <td ><p className='high'>Medium</p></td>
                   <td> 7th of Nov</td>
                   
                 </tr>
                  <tr>
                   <td>Review Finance & Account Department Records</td>
                   <td> Ajay</td>
                   <td ><p className='notstart'>Not Started</p></td>
                   <td ><p className='Mpriority'>Medium</p></td>
                   <td> 7th of Nov</td>
                   
                 </tr>
                 
            </tbody>
          </table>
                  </div>
               
        </div>
    );
}