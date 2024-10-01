// Write your solution in this file!

const employee = {
    name: "John Doe",
    age: 30,
    position: "Developer"
};

// 1. updateEmployeeWithKeyAndValue
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// 2. destructivelyUpdateEmployeeWithKeyAndValue
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// 3. deleteFromEmployeeByKey
function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...newEmployee } = employee; 
    return newEmployee;
}

// 4. destructivelyDeleteFromEmployeeByKey
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Example usage:
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Senior Developer");
console.log(updatedEmployee); 
console.log(employee); 

const modifiedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "age", 31);
console.log(modifiedEmployee); 
console.log(employee); 

const employeeWithoutAge = deleteFromEmployeeByKey(employee, "age");
console.log(employeeWithoutAge); 
console.log(employee); 

const employeeAfterDeletion = destructivelyDeleteFromEmployeeByKey(employee, "position");
console.log(employeeAfterDeletion); 
console.log(employee); 
