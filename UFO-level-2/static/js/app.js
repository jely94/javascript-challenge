
// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

//Refactor to use Arrow Functions!
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Create event handler 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // console.log(inputValue);
    var filteredData = tableData
    if (inputValue) {
        filteredData = tableData.filter(row => row.datetime === inputValue);
        }

    console.log(filteredData);

    // Clear out table
    tbody.html("")

    // Filter and return data by input date
    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}
