
$(function () {

    //-------------
    //- LINE CHART -
    //--------------
    var areaChartData = {
        labels: ['March', 'April', 'May'],
        datasets: [
            {
                label: 'Active Cases',
                backgroundColor: 'rgba(92,225,230,0.5)',
                borderWidth: 2,
                labelColor: '#5ce1e6',
                borderColor: "#fe0023",
                fillColor: 'rgba(210, 214, 222, 1)',
                strokeColor: 'rgba(210, 214, 222, 1)',
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: [57, 235, 274]
            },
            {
                label: 'New Cases',
                backgroundColor: 'rgba(92,225,230,0.8)',
                borderWidth: 1,
                borderColor: "#5ce1e6",
                fillColor: '#5ce1e6',
                strokeColor: '#5ce1e6',
                pointColor: '#3b8bba',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data: [59, 337, 69]
            }
        ]
    }





    var infectionrateData = {
        labels: ['March', 'April', 'May'],
        datasets: [
            {
                label: 'Infection Rate',
                backgroundColor: 'rgba(92,225,230,0.5)',
                borderWidth: 2,
                labelColor: '#5ce1e6',
                borderColor: "#5ce1e6",
                fillColor: 'rgba(210, 214, 222, 1)',
                strokeColor: 'rgba(210, 214, 222, 1)',
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: [59, 396, 465]
            }
        ]
    }









    var areaChartOptions = {
        fontColor: "#5CE1e6",
        //Boolean - If we should show the scale at all
        showScale: true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: false,
        //String - Colour of the grid lines
        scaleGridLineColor: 'rgba(92,225,230,0.5)',
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - Whether the line is curved between points
        bezierCurve: true,
        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.3,
        //Boolean - Whether to show a dot for each point
        pointDot: false,
        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,
        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,
        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,
        //Boolean - Whether to fill the dataset with a color
        datasetFill: true,
        //String - A legend template
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:#5ce1e6"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,
        //Boolean - whether to make the chart responsive to window resizing
        responsive: true
    }

    var lineChartCanvas = $('#oltmsVoltageChart').get(0).getContext('2d');
    var infectionrateCanvas = $('#infectionrate').get(0).getContext('2d');
    var lineChart = new Chart(lineChartCanvas,{
        type: 'line',
        data: areaChartData,
        options: {
            legend: {
                labels: {
                    fontColor: "#5CE1e6"
                    // fontSize: 18
                }
            }}
    });



    var infectionChart = new Chart(infectionrateCanvas,{
        type: 'line',
        data: infectionrateData,
        options: {
            legend: {
                labels: {
                    fontColor: "#5CE1e6"
                    // fontSize: 18
                }
            }}

    });





    areaChartOptions.datasetFill = false
    // lineChart.Line(areaChartData, lineChartOptions)
});

var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Infections",
    data: [266, 129],
    lineTension: 0,
    datasetFill: true,
    fill: true,
    // borderColor: 'red'
    borderColor: 'rgba(92,225,230,0.9)',

};

var dataSecond = {
    label: "Deaths",
    data: [17, 6],
    lineTension: 0,
    fill: false,
    borderColor: 'rgba(255,0,0,0.9)',
    // backgroundColor: 'red'
};

var speedData = {
    labels: ["Nairobi", "Mombasa"],
    datasets: [dataFirst, dataSecond]
};

var chartOptions = {
    legend: {
        display: true,
        position: 'top',
        labels: {
            boxWidth: 80,
            fontColor: '#5ce1e6'
        }
    }
};

var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
});






      