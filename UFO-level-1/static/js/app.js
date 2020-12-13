// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// loop through the data and append each sighting as a row in the table

tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// 

var button = d3.select('#filter-btn');

var inputField = d3.select("#datetime");

button.on("click", sortData);

inputField.on("change", sortData);


function sortData() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    tbody.html("")

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

