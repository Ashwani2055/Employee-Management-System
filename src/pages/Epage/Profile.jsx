
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">

      <h2>My Profile</h2>
      <p className="subtitle">View your personal information</p>

      <div className="profile-card">

        <div className="profile-header">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Employee"
          />

          <h3>Rahul Sharma</h3>
          <p>Software Developer</p>
          <span className="status">Active Employee</span>
        </div>

        <hr />

        <div className="profile-details">

          <div>
            <label>Employee ID</label>
            <p>EMP001</p>
          </div>

          <div>
            <label>Full Name</label>
            <p>Rahul Sharma</p>
          </div>

          <div>
            <label>Email Address</label>
            <p>rahul@gmail.com</p>
          </div>

          <div>
            <label>Phone Number</label>
            <p>9876543210</p>
          </div>

          <div>
            <label>Department</label>
            <p>IT Department</p>
          </div>

          <div>
            <label>Joining Date</label>
            <p>10 January 2025</p>
          </div>

          <div>
            <label>Address</label>
            <p>Lucknow, Uttar Pradesh</p>
          </div>

          <div>
            <label>Employment Type</label>
            <p>Full Time</p>
          </div>

        </div>

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>
    </div>
  );
}
