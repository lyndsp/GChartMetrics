google.load('visualization', '1', { packages: ['corechart'] });


function drawVisualization() {

    var cycleData = massageData();

    var cycleDataTable = new google.visualization.DataTable();
    cycleDataTable.addColumn('date', 'Accepted Date');
    cycleDataTable.addColumn('number', 'Team 1');
    cycleDataTable.addColumn('number', 'Team 2');


    while (cycleData.length > 0) {
        var row = cycleData.pop();
                  cycleDataTable.addRow([row.AcceptedDate, row.CycleTime1, row.CycleTime2]);
              
    }

    var options = {
        title: "Cycle Times",
        hAxis: { title: "Date" },
        vAxis: { title: "Cycle Time: Days" }
    };

        var chart = new google.visualization.ScatterChart(
            document.getElementById('visualization'));
        chart.draw(cycleDataTable, options, { 'displayAnnotations': true });
    }

    google.setOnLoadCallback(drawVisualization);
