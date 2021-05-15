

var button = d3.select("#filter-btn")

var form = d3.select("#form")

button.on("click", runEnter);
form.on("submit", runEnter);




function runEnter() {
    d3.event.preventDefault();

    var input_element = d3.select("#datetime")

    var input_value = input_element.property("value")

    var filtered_data = data.filter(date => date.datetime === input_value)

    console.log(filtered_data)

}