// import the data from data.js
const tableData = data;

//D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage. 
    //It is often used by data professionals to create dashboards, 
    //or a collection of visual data (such as graphs and maps), for presentation.

// Reference the HTML table using d3. Data-Driven Documents (D3 for short)
var tbody = d3.select("tbody");

//Basically, this entire line—tbody.html("");—tells JavaScript to use an empty string when creating the table; 
//in other words, create a blank canvas. This is a standard way to clear data.
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
        }
      );
    });
  }

  function handleClick() {

    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

  
    //There are two ways to test for equality in JavaScript: == and ===. While they look similar, there are differences. A triple equal sign (===) is checking for strict equality. 
    //This means that the type and value have to match perfectly.

    //A double equals sign (==) is checking for loose equality. This means that the type and value are loosely matched. 
    //For more information about equality in JavaScript

    d3.selectAll("#filter-btn").on("click", handleClick); //by adding .on("click", handleClick);, 
    //we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked.

    // Build the table when the page loads
    buildTable(tableData);