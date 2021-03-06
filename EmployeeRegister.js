window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = " ";
            return;
        }
        try {
            (new EmployeePayroleData()).name = name.value;
            textError.textContent = " ";
        } catch (e) {
            textError.textContent = e;
        }
    });
    const salary = document.querySelector('salary');
    const output = document.querySelector('.salary-ouptut');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
});
const save = () => {
    try {
        let EmployeePayroleData = createEmployeePyroll();
        //createandUpdateStorage(employePayrollData);
    } catch (e) {

    }
}
const resetForm = () => {
    setTextValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setvalueByClassName('.text-error', '')
    setValue('#salary', '');
    setValueByClassName('.salary-output', '40000');
    setvalue('#notes', '');
    setValue('#day', '1');
    setvalue('#month', 'January');
    setValue('#Year', '2020');
}
const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    })
}
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
const setValueByClassName = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = values;
}

function createandUpdateStorage(employeePayroleData) {
    let employeePayrollList = JSON.parse(localStorage.grtItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayroleData);
    } else {
        employeePayrollList = [employeePayroleData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

const createEmployeePyroll = () => {
    let employePayrollData = new EmployeePayroleData();
    try {
        employePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
    }
    employeePayroleData.profilePic = getSelectedValues('[name=profile]').pop();
    employePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employePayrollData.department = getSelectedValues('[name=department]');
    employePayrollData.salary = getInputValueById('#salary');
    employePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " +
        getInputValueById('#year');
    employePayrollData.date = Date.parse(date);
    alert(employePayrollData.toString());
    return employePayrollData;
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    if (id.includes("#")) {
        Element.textContent = value;
    } else
        element.textContent = value;
}
const getInputValueById = (id) => {
    let value = docuent.querySelector(id).value;
    return value;
}