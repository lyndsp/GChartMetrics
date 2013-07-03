google.load('visualization', '1', { packages: ['annotatedtimeline'] });

function drawVisualization() {

    var sprintData = massageData();

    var sprintDataTable = new google.visualization.DataTable();
    sprintDataTable.addColumn('date', 'Sprint Date');
    sprintDataTable.addColumn('number', 'Stories per Sprint');
    sprintDataTable.addColumn('number', 'Stories per Person');

    while (sprintData.length > 1) {
        var row = sprintData.pop();
        sprintDataTable.addRow([row.StartDate, row.StoriesInSprint, row.StoriesPerPerson]);
    }

    var annotatedtimeline = new google.visualization.AnnotatedTimeLine(
        document.getElementById('visualization'));
    annotatedtimeline.draw(sprintDataTable, { 'displayAnnotations': true });
}

google.setOnLoadCallback(drawVisualization);