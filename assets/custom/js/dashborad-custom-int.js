
/*
|--------------------------------------------------------------------------
| Document ready function
|--------------------------------------------------------------------------
*/

$(document).ready(function () {
    getDashboardSummery();
})

var chart_data;

function getDashboardSummery() {
    $.ajax({
        type: "GET",
        url: "/get-dashboard-summary-data-ajax",
        headers: {
            'X-CSRF-TOKEN': $('meta[name=token]').attr('content')
        },
        data: {
            "_token": token,
        },
        cache: false,
        success: function (response) {

            if (response.success == true) {
                
                if(response.data.paid) {
                    $('#paid').html(response.data.paid);
                } else {
                    $('#paid').html('0');
                }

                if(response.data.settled) {
                    $('#settled').html(response.data.settled);
                } else {
                    $('#settled').html('0');
                }

                if(response.data.confirm) {
                    $('#pending').html(response.data.confirm);
                } else {
                    $('#pending').html('0');
                }

                if(response.data.ready_to_ship) {
                    $('#ready-to-ship').html(response.data.ready_to_ship);
                } else {
                    $('#ready-to-ship').html('0');
                }

                if(response.data.shipped) {
                    $('#shipped').html(response.data.shipped);
                } else {
                    $('#shipped').html('0');
                }

                if(response.data.cancelled) {
                    $('#cancellations').html(response.data.cancelled);
                } else {
                    $('#cancellations').html('0');
                }

                if(response.data.returned) {
                    $('#returned').html(response.data.returned);
                } else {
                    $('#returned').html('0');
                }

                if (response.data.pending_ernings_in_courier) {
                    $('#pending-ernings-in-courier').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'LKR' }).format(response.data.pending_ernings_in_courier).replace(/\D00$/, ''));
                } else {
                    $('#pending-ernings-in-courier').html('LKR 0');
                }

                if (response.data.recived_ernings) {
                    $('#recived-ernings').html(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'LKR' }).format(response.data.recived_ernings).replace(/\D00$/, ''));
                } else {
                    $('#recived-ernings').html('LKR 0');
                }


                if (response.data.sales_chart) {
                    initializeSaleChart(response.data.sales_chart);
                } else {
                    $('#sales-chart').html('No Data Available');
                }

            }

        },

    });

}


function initializeSaleChart(chart_data) {
    var salesGraphChartData = {
        labels: chart_data.map(item => item.date),
        datasets: [
            {
                label: 'Sales Value',
                fill: false,
                borderWidth: 2,
                lineTension: 0,
                spanGaps: true,
                borderColor: '#efefef',
                pointRadius: 3,
                pointHoverRadius: 7,
                pointColor: '#efefef',
                pointBackgroundColor: '#efefef',
                data: chart_data.map(item => item.grand_total)
            }
        ]
    }

    var salesGraphChartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: '#efefef'
                },
                gridLines: {
                    display: false,
                    color: '#efefef',
                    drawBorder: false
                }
            }],
            yAxes: [{
                ticks: {
                    stepSize: 5000,
                    fontColor: '#efefef'
                },
                gridLines: {
                    display: true,
                    color: '#efefef',
                    drawBorder: false
                }
            }]
        }
    }

    var salesGraphChart = new Chart(salesGraphChartCanvas, { // lgtm[js/unused-local-variable]
        type: 'line',
        data: salesGraphChartData,
        options: salesGraphChartOptions

    });
}


$(function () {
    $.ajax({
        type: "get",
        url: "/get_vendor_order_status_ajax",
        headers: {
            'X-CSRF-TOKEN': $('meta[name=token]').attr('content')
        },
        data: {
            "_token": token,
        },
        cache: false,
        success: function (response) {
            if(response.success == true){
                $("#member-count .member-loader").remove();
                drawPie(response.data);
            }
        }
    });
});

function drawPie(data) {
    //-------------
    //- PIE CHART -
    //-------------
    // Get context with jQuery - using jQuery's .get() method.
    var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
    var pieOptions = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            show: true,
        }
    }
    var pieData = {
        labels: [
            'Paid',
            'Pending',
            'Cancelled',
            'In Packing',
            'In Courier',
            'Settled',
            'Returned',
        ],
        datasets: [{
            data: [data.paid,data.confirm,data.cancelled, data.in_packing, data.in_courier, data.settled, data.returned],
            backgroundColor: ['#6610f2','#00c0ef','#f56954','#6AA7CB','#FFC133', '#00a65a', '#FF0000'],
        }],

    }
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieData,
        options: {
            pieOptions,
            legend: {
                position: 'right',
             }
        }
    });
}


























































































































































































































