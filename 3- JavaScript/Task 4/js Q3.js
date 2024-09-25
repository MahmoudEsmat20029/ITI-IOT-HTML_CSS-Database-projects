function validateForm() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("ageError").innerText = "";
    document.getElementById("gradeError").innerText = "";
    document.getElementById("result").innerText = "";

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value, 10);
    const grade = parseFloat(document.getElementById("grade").value);

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    }

    if (isNaN(age) || age > 40 || age < 20) {
        document.getElementById("ageError").innerText = "Age must be between 20 and 40.";
        isValid = false;
    }

    if (isNaN(grade) || grade < 0 || grade > 100) {
        document.getElementById("gradeError").innerText = "Grade must be between 0 and 100.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("result").innerText = 'Valid Data: Name - ${name}, Age - ${age}, Grade - ${grade}';

        const table = document.getElementById("validDataTable");
        const row = table.insertRow(-1);
        const nameCell = row.insertCell(0);
        const ageCell = row.insertCell(1);
        const gradeCell = row.insertCell(2);

        nameCell.innerText = name;
        ageCell.innerText = age;
        gradeCell.innerText = grade;
    }
}
