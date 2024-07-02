// Write your solution in this file!
let employee = {
    name: "Tom Lee",
    streetAddress: "Ngong Lane 123 St"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
