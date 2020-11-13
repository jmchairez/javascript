// from data.js
var tableData = data;

// YOUR CODE HERE!
var tablebody = d3.select("tbody");

tableData.forEach(function(sighting){
    var new_row = tablebody.append("tr")
    new_row.append("td").text(sighting.datetime);
    new_row.append("td").text(sighting.city);
    new_row.append("td").text(sighting.state);
    new_row.append("td").text(sighting.country);
    new_row.append("td").text(sighting.shape);
    new_row.append("td").text(sighting.durationMinutes);
    new_row.append("td").text(sighting.comments);
});

var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", filtertable);
form.on("submit", filtertable);

function filtertable(){
    d3.event.preventDefault();

    var fil = 0;

    var datetime = d3.select("#datetime").property("value");
    if(datetime.length > 0){
        var ufo = tableData.filter(function(sighting){
            return sighting.datetime == datetime
        });
        fil ++;
    };

    var city = d3.select("#city").property("value");
    if(city.length > 0 && fil >0){
        ufo = ufo.filter(function(sighting){
            return sighting.city == city
        });
        fil++;
    }else if(city.length >0 && fil ==0){
        var ufo = tableData.filter(function(sighting){
            return sighting.city == city
        });
        fil ++;
    };