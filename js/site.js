// Start function
function getValues() {
    // Get values from the inputs
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
function displayData(fbArray) {
    // Number of columns per row
    const columnsPerRow = 10;
    let templateRows = "";

    for (let i = 0; i < fbArray.length; i += columnsPerRow) {
        // Start a row
        templateRows += "<tr>";

        // Add cells for this row
        for (let j = 0; j < columnsPerRow; j++) {
            const element = fbArray[i + j];

             // Stop if no more elements
            if (element === undefined) {
                break;
            }

            let cellContent = element;

            if (element === "Fizz") {
                cellContent = `<strong class="fizz">Fizz</strong>`;
            } else if (element === "Buzz") {
                cellContent = `<strong class="buzz">Buzz</strong>`;
            } else if (element === "FizzBuzz") {
                cellContent = `<strong class="fizzbuzz">FizzBuzz</strong>`;
            }

            // Close the row
            templateRows += `<td>${cellContent}</td>`;
        }

        templateRows += "</tr>";
    }

    document.getElementById("results").innerHTML = templateRows;
}

// Set date
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = `©${currentYear}`;