// from data.js
var tableData = data;

//select table body to get a reference
var tbody = d3.select("tbody");

// display the total database as default

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// select submit button in the html file as reference
var clickHandler = d3.select("#filter-btn");

//Click event
clickHandler.on("click", function() {

//remove/clean existing table
d3.select("tbody").html("");

//prevent page by default
d3.event.preventDefault();

// to get the value and property of the input elements and set all text to lowercase to easy to search and match
var dateTime = d3.select("#datetime").property("value");

var selectedCountry = d3.select("#country").property("value").toLowerCase();

var selectedState = d3.select("#state").property("value").toLowerCase();

var selectedCity = d3.select("#city").property("value").toLowerCase();

var selectedShape = d3.select("#shape").property("value").toLowerCase();

// initialize tableData as filteredData by using condition for all search field
filteredData = tableData;

if (dateTime) {
    filteredData = filteredData.filter(record => record.datetime === dateTime);
}
if (selectedCountry) {
    filteredData = filteredData.filter(record => record.country === selectedCountry);
}
if (selectedState) {
    filteredData = filteredData.filter(record => record.state === selectedState);
}
if (selectedCity) {
    filteredData = filteredData.filter(record => record.city === selectedCity);
}
if (selectedShape) {
    filteredData = filteredData.filter(record => record.shape === selectedShape);
}

// to display the filtered data

filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});
});