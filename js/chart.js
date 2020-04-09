window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Te prekurit me COVID 19 ne baza gjinore, vendi: Kosova "
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 41, label: "Femra", color: "#ff001e" },
                {
                    y: 46, label: "Meshkuj", color: "#990609"
                },
                { y: 97, label: "Te pa konfirmuar", color: "#d43f42", },
            ]
        }]
    });

    var chart1 = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Statisika mbi rastet dhe moshat perkatese"
        },
        axisY: {
            title: "Rastet"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "#990609",
            legendText: "Mosha",
            dataPoints: [
                { y: 6, label: "0-9", color: "#990609" },
                { y: 12, label: "10-19", color: "#990609" },
                { y: 20, label: "20-29", color: "#990609" },
                { y: 12, label: "30-39", color: "#990609" },
                { y: 11, label: "40-49", color: "#990609" },
                { y: 12, label: "50-59", color: "#990609" },
                { y: 4, label: "60-69", color: "#990609" },
                { y: 9, label: "70+", color: "#990609" },
                { y: 98, label: "Te pakonfirmuar" , color:"#990609"}
            ]
        }]
    });
    chart.render();
    chart1.render();

}