import React , {useState, useEffect} from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

import EmployeeSearch from './components/EmployeeSearch';
import './App.css'



function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
    setFilteredEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
    setFilteredEmployees([...employees, employee]);
  };

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
  };

  return (
    <div className="App">
      <h1>GM Employee Management</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeSearch setFilteredEmployees={setFilteredEmployees} employees={employees} />
      <EmployeeList
        employees={filteredEmployees}
        updateEmployee={updateEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default App;