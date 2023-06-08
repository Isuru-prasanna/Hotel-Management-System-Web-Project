

$(document).ready(function () {
    getReportsSummery();
    $(".card").hide();
})

var chart_data;

function getReportsSummery() {
    $.ajax({
        type: "GET",
        url: "/get-reports-summary-data-ajax",
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
                if(response.data.returned) {
                    $('#returned').html(response.data.returned);
                } else {
                    $('#returned').html('0');
                }
                if(response.data.in_courier) {
                    $('#in_courier').html(response.data.in_courier);
                } else {
                    $('#in_courier').html('0');
                }
            }
        }

    });
}

function reportView(status){
   // $('tbody').closest('tr').remove()
    $(".card").show();
    if(status == 'returned'){
        $(".header-title").html('Return Orders')
    }if(status == 'settled'){
        $(".header-title").html('Settled Orders')
    }
    if(status == 'in_courier'){
        $(".header-title").html('In Courier Orders')
    }
    if(status == 'paid'){
        $(".header-title").html('Paid Orders')
    }
    

    $(function() {
        $("#example1").DataTable({
            "responsive": true,
            "lengthChange": true,
            "autoWidth": false,
            "destroy": true,
            "searching": true,

            "columns": [{
                    "data": "search_code"
                },
                {
                    "data": "item_description"
                },
                {
                    "data": "vendor_commission",
                    render: function(data, type, row) {
                        return new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'LKR'
                        }).format(data);
                        return parseFloat(data == null ? 0:data).toFixed(2);
                    }

                }
            ],
            "ajax": {
                "url": "/get-reports-data-ajax",
                "type": "GET",
                "headers": {
                    'X-CSRF-TOKEN': $('meta[name=token]').attr('content')
                },
                "data": {
                    "_token": token,
                    "status": status,
                }
            }
        }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    });
}
