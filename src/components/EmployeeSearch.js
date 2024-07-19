import React, { useState } from 'react';

function EmployeeSearch({ setFilteredEmployees, employees }) {
  const [searchTerm, setSearchTerm] = useState({
    name: '',
    surname: '',
    id: '',
    department: '',
    tenure: ''
  });

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchTerm((prev) => ({ ...prev, [name]: value }));
    filterEmployees({ ...searchTerm, [name]: value });
  };

  const filterEmployees = (searchTerm) => {
    const filtered = employees.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(searchTerm.name.toLowerCase()) &&
        employee.surname.toLowerCase().includes(searchTerm.surname.toLowerCase()) &&
        employee.id.toLowerCase().includes(searchTerm.id.toLowerCase()) &&
        employee.department.toLowerCase().includes(searchTerm.department.toLowerCase()) &&
        employee.tenure.toLowerCase().includes(searchTerm.tenure.toLowerCase())
      );
    });
    setFilteredEmployees(filtered);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        name="name"
        placeholder="Search by name..."
        value={searchTerm.name}
        onChange={handleSearch}
      />
      <input
        type="text"
        name="surname"
        placeholder="Search by surname..."
        value={searchTerm.surname}
        onChange={handleSearch}
      />
      <input
        type="text"
        name="id"
        placeholder="Search by ID..."
        value={searchTerm.id}
        onChange={handleSearch}
      />
      <input
        type="text"
        name="department"
        placeholder="Search by department..."
        value={searchTerm.department}
        onChange={handleSearch}
      />
      <input
        type="text"
        name="tenure"
        placeholder="Search by tenure..."
        value={searchTerm.tenure}
        onChange={handleSearch}
      />
    </div>
  );
}

export default EmployeeSearch;