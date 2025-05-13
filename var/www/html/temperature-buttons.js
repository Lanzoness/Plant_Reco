// Get references to the input fields, dropdowns, and buttons
// Get input field references
const currDateInput = document.getElementById('curr_date_input');
const alfonsoTempInput = document.getElementById('alfonso_temp_input');

// Get dropdown references
const yearDropdown = document.getElementById('year_dropdown');
const monthDropdown = document.getElementById('month_dropdown');

// Get Clear button reference
const tempClearBtn = document.getElementById('temp_clear_btn');

// Get button references
const currentDateBtn = document.getElementById('current_date_btn');
const currentTempBtn = document.getElementById('current_temp_btn');
const currentYrMonthBtn = document.getElementById('current_yr_month_btn');

// Event listener for the "SUBMIT CURRENT DATE" button
// NOTE: It does not limit the user inputs to 2 digits only (it also accepts letters) [-reesey]
currentDateBtn.addEventListener('click', function() {
    const dateValue = currDateInput.value; // Get the value from the date input field
    console.log("Submitted Current Date:", dateValue); // Print the stored value
});

// Event listener for the "SUBMIT CURRENT TEMP." button
// NOTE: It accepts letters [-reesey]
currentTempBtn.addEventListener('click', function() {
    const tempValue = alfonsoTempInput.value; // Get the value from the temperature input field
    console.log("Submitted Current Temperature:", tempValue); // Print the stored value
});

// Event listener for the "SUBMIT YEAR & MONTH" button
currentYrMonthBtn.addEventListener('click', function() {
    const selectedYear = yearDropdown.value; // Get the selected value from the year dropdown
    const selectedMonth = monthDropdown.value; // Get the selected value from the month dropdown

    // Check if default options are still selected (optional, but good practice)
    if (selectedYear === "" || selectedMonth === "") {
        console.log("Please select both a year and a month.");
        // You might want to alert the user or prevent submission here
    } else {
        console.log("Submitted Year:", selectedYear); // Print the selected year
        console.log("Submitted Month:", selectedMonth); // Print the selected month
    }
});

// Event listener for the "CLEAR INPUTS" button
tempClearBtn.addEventListener('click', function() {
    // Clear input fields by setting their value to an empty string
    currDateInput.value = '';
    alfonsoTempInput.value = '';

    // Reset dropdowns to the first option (which is the disabled placeholder)
    yearDropdown.selectedIndex = 0;
    monthDropdown.selectedIndex = 0;

    console.log("Inputs and dropdowns cleared.");
});

console.log("Script loaded. Inputs, Dropdowns, and Buttons are interactive.");
