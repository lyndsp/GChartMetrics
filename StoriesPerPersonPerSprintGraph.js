google.load('visualization', '1', { packages: ['annotatedtimeline'] });

function drawVisualization() {

    var sprintData = massageData();

    var sprintDataTable = new google.visualization.DataTable();
    sprintData.addColumn('date', 'Sprint Date');
    sprintData.addColumn('number', 'Stories per Sprint');
    sprintData.addColumn('number', 'Stories per Person');

    while (sprintData.length > 1) {
        var row = sprintData.pop();
        sprintData.addRow([row.StartDate, row.StoriesInSprint, row.StoriesPerPerson]);
    }

    var annotatedtimeline = new google.visualization.AnnotatedTimeLine(
        document.getElementById('visualization'));
    annotatedtimeline.draw(sprintData, { 'displayAnnotations': true });
}

google.setOnLoadCallback(drawVisualization);