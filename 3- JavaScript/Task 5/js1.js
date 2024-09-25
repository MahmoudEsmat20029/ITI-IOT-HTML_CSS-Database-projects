function validateForm() {
    // Get values from the form
    const nameInput = document.getElementById("name");
    const gradeInput = document.getElementById("grade");
    const name = nameInput.value.trim();
    const grade = parseInt(gradeInput.value, 10);

    const nameError = document.getElementById("nameError");
    const gradeError = document.getElementById("gradeError");

    let isValid = true;

    // Validate name
    if (name === "") {
        nameError.textContent = "StudentName is required.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate grade
    if (isNaN(grade) || grade < 0 || grade > 100) {
        gradeError.textContent = "Grade must be between 0 and 100.";
        isValid = false;
    } else {
        gradeError.textContent = "";
    }

    // If validation passes, add student to the table
    if (isValid) {
        addStudentToTable(name, grade);
        nameInput.value = ''; // Reset the name input field
        gradeInput.value = ''; // Reset the grade input field
    }
}

function addStudentToTable(name, grade) {
    const resultTable = document.getElementById("table");
    let tableBody = resultTable.querySelector('tbody');

    // Create tbody if it doesn't exist
    if (!tableBody) {
        tableBody = document.createElement('tbody');
        resultTable.appendChild(tableBody);
    }

    // Create a new row and cells
    const newRow = tableBody.insertRow();
    const nameCell = newRow.insertCell(0);
    const gradeCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2); // New cell for actions

    // Set the cell contents
    nameCell.textContent = name;
    gradeCell.textContent = grade;

    // Create and append the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'action-button';
    deleteButton.onclick = function() {
        // Remove the row from the table
        tableBody.removeChild(newRow);
        applyRowColors(tableBody); // Reapply row colors after deletion
    };
    actionCell.appendChild(deleteButton);

    // Apply alternating row colors
    applyRowColors(tableBody);
}

function applyRowColors(tableBody) {
    for (let i = 0; i < tableBody.rows.length; i++) {
        const row = tableBody.rows[i];
        row.style.backgroundColor = i % 2 === 0 ? '#f9f9f9' : '#ffffff'; // Alternate colors
    }
}

function applyFilters() {
    const filter = document.getElementById('filter').value;
    const studentsTable = document.getElementById('table').getElementsByTagName('tbody')[0];

    if (!studentsTable) return;

    for (let row of studentsTable.rows) {
        const grade = parseFloat(row.cells[1].textContent);
        if (filter === 'failed' && grade >= 60) {
            row.style.display = 'none';
        } else if (filter === 'success' && grade < 60) {
            row.style.display = 'none';
        } else {
            row.style.display = '';
        }
    }

    applyRowColors(studentsTable);
}

function applySorting() {
    const sort = document.getElementById('sort').value;
    const studentsTable = document.getElementById('table').getElementsByTagName('tbody')[0];
    const rows = Array.from(studentsTable.rows);

    rows.sort((a, b) => {
        if (sort === 'name') {
            return a.cells[0].textContent.localeCompare(b.cells[0].textContent);
        } else if (sort === 'grade') {
            return parseFloat(a.cells[1].textContent) - parseFloat(b.cells[1].textContent);
        }
    });

    // Clear the existing rows and append sorted rows
    studentsTable.innerHTML = '';
    rows.forEach(row => studentsTable.appendChild(row));

    applyRowColors(studentsTable); // Reapply row colors after sorting
}

document.getElementById('filter').addEventListener('change', applyFilters);
document.getElementById('sort').addEventListener('change', applySorting);
