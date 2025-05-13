// Get references to the input fields, dropdowns, and buttons
// NEW: Get input field references
const currDateInput = document.getElementById('curr_date_input');
const alfonsoTempInput = document.getElementById('alfonso_temp_input');

// EXISTING: Get dropdown references
const yearDropdown = document.getElementById('year_dropdown');
const monthDropdown = document.getElementById('month_dropdown');

// NEW: Get button references
const currentDateBtn = document.getElementById('current_date_btn');
const currentTempBtn = document.getElementById('current_temp_btn');
const currentYrMonthBtn = document.getElementById('current_yr_month_btn');

// Event listener for the "SUBMIT CURRENT DATE" button
currentDateBtn.addEventListener('click', function() {
    const dateValue = currDateInput.value; // Get the value from the date input field
    console.log("Submitted Current Date:", dateValue); // Print the stored value
});

// Event listener for the "SUBMIT CURRENT TEMP." button
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


console.log("Script loaded. Inputs, Dropdowns, and Buttons are interactive.");
