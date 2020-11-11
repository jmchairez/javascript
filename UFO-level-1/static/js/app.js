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

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var ufo = tableData.filter(function(sighting){
        return sighting.datetime == inputValue
    });

    tablebody.html("")
    if (ufo.length === 0){
        var new_row = tablebody.append("tr")
        new_row.append("td").text("NaN");
        new_row.append("td").text("NaN");
        new_row.append("td").text("NaN");
        new_row.append("td").text("NaN");
        new_row.append("td").text("NaN");
        new_row.append("td").text("NaN");
        new_row.append("td").text("NaN");
    }else{
        ufo.forEach(function(sighting){
            
            var new_row = tablebody.append("tr")
            new_row.append("td").text(sighting.datetime);
            new_row.append("td").text(sighting.city);
            new_row.append("td").text(sighting.state);
            new_row.append("td").text(sighting.country);
            new_row.append("td").text(sighting.shape);
            new_row.append("td").text(sighting.durationMinutes);
            new_row.append("td").text(sighting.comments);
        });
    };

};
