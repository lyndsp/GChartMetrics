function drawVisualization() {

    var sprintData = massageData();

    var tableHtml = "<table><thead><tr><th>Sprint Start Date</th><th># of stories</th><th>Stories per person</th></tr></thead>";

    while (sprintData.length > 1) {
        var row = sprintData.pop();

        tableHtml += "<tr><td>" + row.StartDate.toDateString() + "</td>"
            + "<td>" + row.StoriesInSprint + "</td>"
            + "<td>" + row.StoriesPerPerson + "</td>"
            + "</tr>";
    }

    tableHtml += "</table>";

    document.getElementById('visualization').innerHTML = tableHtml;
}