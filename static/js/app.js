// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.

var filters = [
  { id: "datetime", value: "" },
  { id: "city", value: "" },
  { id: "state", value: "" },
  { id: "country", value: "" },
  { id: "shape", value: "" }];

// 3. Use this function to update the filters. 

// 4a. Save the element that was changed as a variable.

// 4b. Save the value that was changed as a variable.

// 4c. Save the id of the filter that was changed as a variable.

// 5. If a filter value was entered then add that filterId and value
// to the filters list. Otherwise, clear that filter from the filters object.

function updateFilters(elementId) {

  filters.forEach(function (item) {

    if (item.id === elementId) {
      let selectvalue = d3.select("#" + elementId).property("value");
      item.value = selectvalue;
    }




  });
  filterTable(filters);
  console.log(filters)

  // let selectdate = d3.select("#datetime").property("value");
  // let selectcity = d3.select("#city").property("value");
  // let selectstate = d3.select("#state").property("value");
  // let selectcountry = d3.select("#country").property("value");
  // let selectshape = d3.select("#shape").property("value");


  // filters.length = 0;

  // if (elementID === "date") {

  //   filters.push({ id: "date", value: selectdate });
  // }

  // if (selectcity) {
  //   filters.push({ id: "city", value: selectcity });
  // }

  // if (selectstate) {
  //   filters.push({ id: "state", value: selectstate });
  // }

  // if (selectcountry) {
  //   filters.push({ id: "country", value: selectcountry });
  // }

  // if (selectshape) {
  //   filters.push({ id: "shape", value: selectshape });
  // }

  // return filters;
}

function filterTable(filters) {

  let filteredData = tableData;

  filters.forEach(function (item) {

    if (item.id === "datetime" && item.value!=="") {

      filteredData = filteredData.filter(row => row.datetime === item.value);

    }


    if (item.id === "city" && item.value!=="") {

      filteredData = filteredData.filter(row => row.selectcity === item.value);
    }

    if (item.id === "state" && item.value!=="") {

      filteredData = filteredData.filter(row => row.selectstate === item.value);
    }

    if (item.id === "country" && item.value!=="") {

      filteredData = filteredData.filter(row => row.selectcountry === item.value);
    }

    if (item.id === "shape" && item.value!=="") {

      filteredData = filteredData.filter(row => row.selectshape === item.value);
    };





    // 6. Call function to apply all filters and rebuild the table
    //filterTable();

  });

  buildTable(filteredData)
  console.log(filteredData);

}
// 7. Use this function to filter the table when data is entered.

      // 8. Set the filtered data to the tableData.


      // 9. Loop through all of the filters and keep any data that
      // matches the filter values


      // 10. Finally, rebuild the table using the filtered data



// 2. Attach an event to listen for changes to each filter

let text = d3.select("#text");
  // Build the table when the page loads
  buildTable(tableData);

