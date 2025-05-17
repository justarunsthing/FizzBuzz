// Start function
function getValues() {
    // Get values form the inputs
    let fizzValue = document.getElementById("fizz-value").value;
    let buzzValue = document.getElementById("buzz-value").value;

    // Type casting
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // Validation
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        let fbArray = fizzBuzz(fizzValue, buzzValue);

        // Display data
        displayData(fbArray);
    } else {
        alert("Error: You must enter integers!");
    }
}

// Number or fizz or buzz or fizz buzz?
function fizzBuzz(fizzValue, buzzValue){
    let returnArray = [];

    // Loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        // Check to see if divisible by both
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push("FizzBuzz");

        // Check to see if divisible by fizz value
        } else if (i % fizzValue == 0) {
            returnArray.push("Fizz");

        // Check to see if divisible by fizz value
        } else if (i % buzzValue == 0) {
            returnArray.push("Buzz");
        } else {
            returnArray.push(i);
        }
    }

    return returnArray;
}

// Loop over the array and create a table row for each item
function displayData(fbArray){
    let templateRows = "";

    // Loop over the array
    fbArray.forEach(element => {
        if (element.isInteger) {
            templateRows += `<tr><td>${element}</td></tr>`;
        } else {
            templateRows += `<tr><td><strong>${element}</strong></td></tr>`;
        }
    });

    document.getElementById("results").innerHTML = templateRows;
}