function createTable() {
    let table = document.getElementById("myTable");

    let rn = parseInt(prompt("Input number of rows"), 10);
    let cn = parseInt(prompt("Input number of columns"), 10);

    // Validate input to ensure numbers are positive integers
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    // Clear previous table content (if any)
    table.innerHTML = "";

    // Create table rows and columns dynamically
    for (let i = 0; i < rn; i++) {
        let row = table.insertRow(); // Create a new row

        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell(); // Create a new cell
            cell.textContent = `Row-${i} Column-${j}`; // Assign text content
        }
    }
}
