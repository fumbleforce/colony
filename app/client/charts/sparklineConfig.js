HighchartConfigs._configs.sparkline = {
    exporting: { enabled: false },
    chart: {
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        borderWidth: 0,
        type: 'line',
        margin: [2, 0, 2, 0],
        height: 20,
        style: {
            overflow: 'visible'
        },
        skipClone: true
    },
    title: {
        text: ''
    },
    credits: {
        enabled: false
    },
    xAxis: {
        labels: {
            enabled: false
        },
        title: {
            text: null
        },
        visible: false,
        startOnTick: false,
        endOnTick: false,
        tickPositions: [],
        gridLineWidth: 0,
        minorGridLineWidth: 0,

    },
    yAxis: {
        endOnTick: false,
        startOnTick: false,
        gridLineColor: 'transparent',
        labels: {
            enabled: false
        },
        title: {
            text: null
        },
        tickPositions: [0]
    },
    legend: {
        enabled: false
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ': ' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    plotOptions: {
        line: {
            softThreshold: false
        },
        
        series: {
            animation: false,
            lineWidth: 2,
            shadow: false,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            marker: {
                radius: 1,
                states: {
                    hover: {
                        radius: 2
                    }
                }
            },
            fillOpacity: 0.25
        },
        column: {
            negativeColor: '#910000',
            borderColor: 'transparent'
        }
    }
};