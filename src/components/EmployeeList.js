import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeList({ employees, updateEmployee, deleteEmployee }) {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          updateEmployee={updateEmployee}
          deleteEmployee={deleteEmployee}
        />
      ))}
    </div>
  );
}

export default EmployeeList;
