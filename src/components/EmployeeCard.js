import React, { useState } from 'react';

function EmployeeCard({ employee, updateEmployee, deleteEmployee }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);

  const handleChange = (e) => {
    setUpdatedEmployee({ ...updatedEmployee, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateEmployee(updatedEmployee);
    setIsEditing(false);
  };

  return (
    <div className="employee-card">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={updatedEmployee.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="surname"
            value={updatedEmployee.surname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={updatedEmployee.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="position"
            value={updatedEmployee.position}
            onChange={handleChange}
          />
          <input
            type="text"
            name="department"
            value={updatedEmployee.department}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            value={updatedEmployee.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            value={updatedEmployee.image}
            onChange={handleChange}
          />
          <input
            type="date"
            name="startDate"
            value={updatedEmployee.startDate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="tenure"
            value={updatedEmployee.tenure}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <img src={employee.image} alt={`${employee.name} ${employee.surname}`} />
          <div>
            <h2>{employee.name} {employee.surname}</h2>
            <p>Email: {employee.email}</p>
            <p>Position: {employee.position}</p>
            <p>Department: {employee.department}</p>
            <p>Phone: {employee.phone}</p>
            <p>Start Date: {employee.startDate}</p>
            <p>Tenure: {employee.tenure}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-button" onClick={() => deleteEmployee(employee.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeCard;