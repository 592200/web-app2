/*global $, document, Chart, LINECHART, data, options, window*/

$(document).ready(function () {

    'use strict';

    var kwhHouse_SKL = $('.getHouseSKL').map(function(){
        return $(this).val();
    }).get();
    var kwhHouse_HY1 = $('.getHouseHY1').map(function(){
        return $(this).val();
    }).get();
    var kwhHouse_HY2 = $('.getHouseHY2').map(function(){
        return $(this).val();
    }).get();
    var kwhHouse_STU = $('.getHouseSTU').map(function(){
        return $(this).val();
    }).get();
    var kwhHouse_YL1 = $('.getHouseYL1').map(function(){
        return $(this).val();
    }).get();
    var kwhHouse_NW = $('.getHouseNW').map(function(){
        return $(this).val();
    }).get();
    var kwhHouse_SUK = $('.getHouseSUK').map(function(){
        return $(this).val();
    }).get();
    console.log(kwhHouse_SKL);
    // ------------------------------------------------------- //
    // Line Chart
    // ------------------------------------------------------ //
    var legendState = true;
    if ($(window).outerWidth() < 576) {
        legendState = false;
    }
    // kwH House chart
    var LINECHART = $('#lineChartHouse');
    var myLineChart = new Chart(LINECHART, {
        type: 'line',
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                display: legendState
            }
        },
        data: {
            labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
            datasets: [
                {
                    label: "บ้านพัก SKL",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: '#f15765',
                    pointBorderColor: '#f15765',
                    pointHoverBackgroundColor: '#da4c59',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 0,
                    data: kwhHouse_SKL,
                    spanGaps: false
                },
                {
                    label: "บ้านพัก HY1",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#54e69d",
                    pointHoverBackgroundColor: "#44c384",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "#54e69d",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#54e69d",
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: kwhHouse_HY1,
                    spanGaps: false
                },
                {
                    label: "บ้านพัก HY2",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "blue",
                    pointHoverBackgroundColor: "#44c384",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "blue",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "blue",
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: kwhHouse_HY2,
                    spanGaps: false
                },
                {
                    label: "บ้านพัก STU",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "orange",
                    pointHoverBackgroundColor: "orange",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "orange",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "blue",
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: kwhHouse_STU,
                    spanGaps: false
                },
                {
                    label: "บ้านพัก YL1",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#CC6600",
                    pointHoverBackgroundColor: "#CC6600",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "#CC6600",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#CC6600",
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: kwhHouse_YL1,
                    spanGaps: false
                },
                {
                    label: "บ้านพัก NW",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "green",
                    pointHoverBackgroundColor: "green",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "blue",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "green",
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: kwhHouse_NW,
                    spanGaps: false
                },
                {
                    label: "บ้านพัก SUK",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "black",
                    pointHoverBackgroundColor: "black",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "black",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "black",
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: kwhHouse_SUK,
                    spanGaps: false
                }
            ]
        }
    });
   


    // ------------------------------------------------------- //
    // Line Chart 1
    // ------------------------------------------------------ //
    var LINECHART1 = $('#lineChart1');
    var myLineChart = new Chart(LINECHART1, {
        type: 'line',
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 40,
                        min: 0,
                        stepSize: 0.5
                    },
                    display: false,
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G"],
            datasets: [
                {
                    label: "Total Overdue",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: '#6ccef0',
                    pointBorderColor: '#59c2e6',
                    pointHoverBackgroundColor: '#59c2e6',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 3,
                    pointBackgroundColor: "#59c2e6",
                    pointBorderWidth: 0,
                    pointHoverRadius: 4,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 0,
                    pointRadius: 4,
                    pointHitRadius: 0,
                    data: [20, 28, 30, 22, 24, 10, 7],
                    spanGaps: false
                }
            ]
        }
    });



    // ------------------------------------------------------- //
    // Pie Chart
    // ------------------------------------------------------ //
    var PIECHART = $('#pieChart');
    var myPieChart = new Chart(PIECHART, {
        type: 'doughnut',
        options: {
            cutoutPercentage: 80,
            legend: {
                display: false
            }
        },
        data: {
            labels: [
                "First",
                "Second",
                "Third",
                "Fourth"
            ],
            datasets: [
                {
                    data: [300, 50, 100, 60],
                    borderWidth: [0, 0, 0, 0],
                    backgroundColor: [
                        '#44b2d7',
                        "#59c2e6",
                        "#71d1f2",
                        "#96e5ff"
                    ],
                    hoverBackgroundColor: [
                        '#44b2d7',
                        "#59c2e6",
                        "#71d1f2",
                        "#96e5ff"
                    ]
                }]
        }
    });


    // ------------------------------------------------------- //
    // Bar Chart
    // ------------------------------------------------------ //
    var BARCHARTHOME = $('#barChartHome');
    var barChartHome = new Chart(BARCHARTHOME, {
        type: 'bar',
        options:
        {
            scales:
            {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false
                }],
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"],
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)'
                    ],
                    borderColor: [
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)'
                    ],
                    borderWidth: 1,
                    data: [35, 49, 55, 68, 81, 95, 85, 40, 30, 27, 22, 15]
                }
            ]
        }
    });

});
