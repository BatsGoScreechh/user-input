document.querySelector("#save-btn").addEventListener("click", event => {
    const employeeFirstValue = document.querySelector("#first-name-input").value
    const employeeLastValue = document.querySelector("#last-name-input").value
    const employeeEmailValue = document.querySelector("#email-input").value
    const employeePhoneValue = document.querySelector("#phone-input").value
    const employeeBirthdayValue = document.querySelector("#birthday-input").value
    const employeeDeptValue = document.querySelector("#dept-input").value


    const employeeToAdd = {
        firstName: employeeFirstValue,
        lastName: employeeLastValue,
        email: employeeEmailValue,
        phone: employeePhoneValue,
        birthday: employeeBirthdayValue,
        dept: employeeDeptValue
    }

    fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeToAdd)
    }).then((response) => {
        fetch("http://localhost:8088/employees")
        .then(employees => employees.json())
        .then(allEmployeeInfo => {
            allEmployeeInfo.forEach(employeeInfo => {
                document.querySelector("#output").innerHTML += `<div>
                <label>
                    <p>First Name: ${employeeInfo.firstName}</p>
                    <p>Last Name: ${employeeInfo.lastName}</p>
                    <p>Email Address: ${employeeInfo.email}</p>
                    <p>Phone Number: ${employeeInfo.phone}</p>
                    <p>Birthday: ${employeeInfo.birthday}</p>
                    <p>Department: ${employeeInfo.dept}</p>

                    <hr>
                    </label>
                    </div>`
            })
        })
    })
})