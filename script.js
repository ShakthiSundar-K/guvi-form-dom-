document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foods = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(el => el.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    
    if (foods.length < 2) {
        alert("Please select at least two food options.");
        return;
    }
    
    // Append data to table
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).appendChild(document.createTextNode(firstName));
    newRow.insertCell(1).appendChild(document.createTextNode(lastName));
    newRow.insertCell(2).appendChild(document.createTextNode(email));
    newRow.insertCell(3).appendChild(document.createTextNode(address));
    newRow.insertCell(4).appendChild(document.createTextNode(pincode));
    newRow.insertCell(5).appendChild(document.createTextNode(gender));
    newRow.insertCell(6).appendChild(document.createTextNode(foods.join(', ')));
    newRow.insertCell(7).appendChild(document.createTextNode(state));
    newRow.insertCell(8).appendChild(document.createTextNode(country));
    
    // Clear form fields
    document.getElementById('form').reset();
});