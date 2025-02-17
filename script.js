function createTable() {
    let table = document.getElementById("myTable");

    let rn = parseInt(prompt("Input number of rows"), 10);
    let cn = parseInt(prompt("Input number of columns"), 10);

    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    table.innerHTML = "";
	for(let i=0;i<rn;i++){
		let row=table.insertRow();
		for(let j=0;j<cn;j++){
			let cell=row.insertCell();
			cell.textContent=`Row-${i} Column-${j}`
		}
		
	}
    
}
