
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
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value").toLowerCase();
    var inputState = d3.select("#state").property("value").toLowerCase();
    var inputCountry = d3.select("#country").property("value").toLowerCase();
    var inputShape = d3.select("#shape").property("value").toLowerCase();

    
    // Look at each input value and filter the table
    var filteredData = tableData
    if (inputDate) {
      filteredData = filteredData.filter(row => row.datetime === inputDate);
      }
    if (inputCity) {
      filteredData = filteredData.filter(row => row.city === inputCity);
      }
    if (inputState) {
      filteredData = filteredData.filter(row => row.state === inputState);
      }
    if (inputCountry) {
      filteredData = filteredData.filter(row => row.country === inputCountry);
      }
    if (inputShape) {
      filteredData = filteredData.filter(row => row.shape === inputShape);
      }


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
