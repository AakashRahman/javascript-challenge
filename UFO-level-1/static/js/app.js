// from data.js
var tableData = data;

// YOUR CODE HERE!
//select table body
var tableBody = d3.select("tbody");

//making table
// declare a function for the table
function makingTable(data) {
  // refresh/clean everything
  tableBody.html("");

  // use for loop to generate the data
  data.forEach((dataRow) => {
    var row = tableBody.append("tr");
    // use for loop to geberate table cell
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

  // declare a function for click 
function handleClick() {

  // select date and time
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // use condition to see matches with the date
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  makingTable(filteredData);
}

// to do filder on click on button
d3.selectAll("#filter-btn").on("click", handleClick);

// to show all data in table
makingTable(tableData);