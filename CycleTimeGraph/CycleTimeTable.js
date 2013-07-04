function drawVisualization() {

    var sprintData = massageData();

    var tableHtml = "<table><thead><tr><th>Accepted Date of Story</th><th>Story Cycle Time</th></tr></thead>";

    while (sprintData.length > 0) {
        var row = sprintData.pop();

        tableHtml += "<tr><td>" + row.AcceptedDate.toDateString() +"</td>"
            + "<td>" + row.CycleTime + "</td>"
            + "</tr>";
    }

    tableHtml += "</table>";

    document.getElementById('visualization').innerHTML = tableHtml;
}