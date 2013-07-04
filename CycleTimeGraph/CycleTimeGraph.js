google.load('visualization', '1', { packages: ['corechart'] });


function drawVisualization() {

    var cycleData = massageData();

    var cycleDataTable = new google.visualization.DataTable();
    cycleDataTable.addColumn('date', 'Accepted Date');
    cycleDataTable.addColumn('number', 'Cycle Time: Team 1');
    cycleDataTable.addColumn('number', 'Cycle Time: Team 2');


    while (cycleData.length > 0) {
        var row = cycleData.pop();
                  cycleDataTable.addRow([row.AcceptedDate, row.CycleTime1, row.CycleTime2]);
              
    }

        var options = {
            title: "Cycle Times",
            color: "red",
        }

        var chart = new google.visualization.ScatterChart(
            document.getElementById('visualization'));
        chart.draw(cycleDataTable, options, { 'displayAnnotations': true });
    }

    google.setOnLoadCallback(drawVisualization);
