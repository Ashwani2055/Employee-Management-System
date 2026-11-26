import { useState } from "react";
import EContext from "./EContext";
export default function Estate(props){
    
        const [leave, setLeave] = useState({
            employeeId: "",
            employeeName: "",
            department: "",
            leaveType: "",
            fromDate: "",
            toDate: "",
            reason: ""
          });
        
          const handleChange = (e) => {
            setLeave(
              {
              ...leave,
              [e.target.name]: e.target.value
            });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
        
            console.log(leave);
        
            alert("Leave Application Submitted Successfully!");
        
            // setLeave({
            //   employeeId: "",
            //   employeeName: "",
            //   department: "",
            //   leaveType: "",
            //   fromDate: "",
            //   toDate: "",
            //   reason: ""
            // });
          };
          return(   <EContext.Provider
    value={{ leave, handleChange, handleSubmit }}
>
    {props.children}
</EContext.Provider>
    );
}