import React, { useState } from 'react';

function EmployeeForm({ addEmployee }) {
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    surname: '',
    email: '',
    position: '',
    department: '',
    phone: '',
    image: '',
    startDate: '',
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.id) {
      employee.id = Date.now().toString();
    }
    addEmployee(employee);
    setEmployee({
      id: '',
      name: '',
      surname: '',
      email: '',
      position: '',
      department: '',
      phone: '',
      image: '',
      startDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="surname"
        value={employee.surname}
        onChange={handleChange}
        placeholder="Surname"
        required
      />
      <input
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        type="text"
        name="department"
        value={employee.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <input
        type="text"
        name="phone"
        value={employee.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        type="text"
        name="image"
        value={employee.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        type="date"
        name="startDate"
        value={employee.startDate}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
