google.load('visualization', '1', { packages: ['annotatedtimeline'] });

function drawVisualization() {

    var cycleData = massageData();

    var cycleDataTable = new google.visualization.DataTable();
    cycleDataTable.addColumn('date', 'Accepted Date');
    cycleDataTable.addColumn('number', 'Cycle Time');
    

    while (cycleData.length > 1) {
        var row = cycleData.pop();
        cycleDataTable.addRow([row.AcceptedDate, row.CycleTime]);
    }

    var annotatedtimeline = new google.visualization.AnnotatedTimeLine(
        document.getElementById('visualization'));
    annotatedtimeline.draw(cycleDataTable, { 'displayAnnotations': true });
}

google.setOnLoadCallback(drawVisualization);