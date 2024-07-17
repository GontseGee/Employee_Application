import React , {useState, useEffect} from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

import EmployeeSearch from './components/EmployeeSearch';
import './App.css'

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  // Load employees from localStorage on component mount
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
      setEmployees(storedEmployees);
      setFilteredEmployees(storedEmployees);
    }
  }, []);

  // Save employees to localStorage whenever employees state changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
    setFilteredEmployees(employees);
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="App">
      <EmployeeSearch employees={employees} setFilteredEmployees={setFilteredEmployees} />
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList
        employees={filteredEmployees}
        updateEmployee={updateEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default App;