

var button = d3.select("#filter-btn")

var form = d3.select("#form")


//allows for "enter" press and button click
button.on("click", runEnter);
form.on("submit", runEnter);


function runEnter() {
    //stops whole page refreshing
    d3.event.preventDefault();

    //checks for values
    var input_element = d3.select("#datetime")
    var input_value = input_element.property("value")
    var filtered_data = data.filter(date => date.datetime === input_value)

    //selects and clears table of old results
    var tbody = d3.select("tbody")
    tbody.selectAll("tr").remove();
    
    //loads results
    filtered_data.forEach(function(mydata) {
        var row = tbody.append("tr")
        Object.entries(mydata).forEach(([key,val]) => {
            console.log(key,val)
            var cell = row.append("td")
            cell.text(val)
        })
    })
}