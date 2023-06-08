
    $( document ).ready(function() {
        $("#ready_to_ship").hide();
        $("#print_way_bill").hide();
        getOrderCount();
    });
/*
|--------------------------------------------------------------------------
| Function Set serach Data
|--------------------------------------------------------------------------
|
*/
    function serachData() {
        var base_url = window.location.origin;
        var selected_vendor_id = $('#vendor_select').val();
        var date = $("#reservation").val();
        var date_url = "";
        var arr = date.split(" - ");
        var form = arr[0];
        var to = arr[1];
        console.log();
        if(date != "" && selected_vendor_id != "") {
            // url_replaced = currnt_url.split('&&id')[0];
            // console.log(url);
            //http://127.0.0.1:8000/manage-orders/confirm ?from=04/17/2023 &&to=05/17/2023&&id=9
            // vendor_url += "&&id="+selected_vendor_id;
            // location.replace(url_replaced + vendor_url);
            date_url += "?from="+form+"&&to="+to;
            location.replace(base_url + "/manage-orders/" + selected_status + date_url + "&&id="+ selected_vendor_id);
        }
        if(date != "" && selected_vendor_id == ""){
            date_url += "?from="+form+"&&to="+to;
            location.replace(base_url + "/manage-orders/" + selected_status + date_url);
        }
        if(date == "" && selected_vendor_id != ""){
            location.replace(base_url + "/manage-orders/" + selected_status+"?id="+ selected_vendor_id);
        }
    }
/*
|--------------------------------------------------------------------------
| Function Set Disable All Select
|--------------------------------------------------------------------------
|
*/
    function setDisableAllSelect(){
       if($('tbody .form-check-input').length > 0){
            $('#select-all').prop("disabled",false);
       }else{
            $('#select-all').prop("disabled",true);
       }
    }
    /*
    |--------------------------------------------------------------------------
    | Function check box
    |--------------------------------------------------------------------------
    |
    */
    $("#select-all").click(function (event) {
        if (this.checked && selected_status == 'confirm') {
            $(":checkbox").each(function () {
                this.checked = true;
                $("#ready_to_ship").show();
                $("#print_way_bill").show();
            });
        }
        else if(this.checked && selected_status == 'in_packing'){

            $(":checkbox").each(function () {
                this.checked = true;
                $("#ready_to_ship").hide();
                $("#print_way_bill").show();
            });
        }
        else {
            $(":checkbox").each(function () {
                this.checked = false;
                $("#ready_to_ship").hide();
                $("#print_way_bill").hide();
            });
        }
        setStatus();
    });

      /*
    |--------------------------------------------------------------------------
    | Function My Listing Action Button
    |--------------------------------------------------------------------------
    |
    */
$(".table-check-box").click(function (event) {
    if ($(".table-check-box:checked").length > 0) {
        if (this.checked && selected_status == 'confirm') {
            $("#ready_to_ship").show();
            $("#print_way_bill").show();
        }
        if (this.checked && selected_status == 'in_packing') {
            $("#print_way_bill").show();
        }
    } else {
        $("#ready_to_ship").hide();
        $("#print_way_bill").hide();
    }
    setStatus();
});
  /*
    |--------------------------------------------------------------------------
    | Function set Status
    |--------------------------------------------------------------------------
    |
    */
    function setStatus(){
        var html_status = '';
        var status      = '';
        var btn_class   = '';
        if( selected_status == 'confirm' || selected_status == 'in_packing'){
            btn_class = 'btn btn-warning search-btn';
        }
        $("#ready_to_ship").attr('class',btn_class);
        $("#print_way_bill").attr('class',btn_class);
    }

/*
|--------------------------------------------------------------------------
| Function Set bulk Update Ready To Ship
|--------------------------------------------------------------------------
|
*/

    function bulkUpdateReadyToShip(status){

        var checkedVals =   [];
        checkedVals     =   $(".form-check-input:checkbox:checked").map(function () {
                            return this.value;
                        }).get();
        printed         =  $(".form-check-input:checkbox:checked").map(function () {
                                return this.getAttribute('data-value');
                            }).get();

       var isVaild = true;

       printed.forEach(function(item) {
        if (item != 1) {
            isVaild = false;
          }
        });

        if(isVaild == true){
            actionData(status,checkedVals,ele=null);
        }else{
            toastr.error('One or More unprinted Orders has been selected!');
        }

    }

/*
|--------------------------------------------------------------------------
| Function Set single Update Ready To Ship
|--------------------------------------------------------------------------
|
*/

    function singleUpdateReadyToShip(status,id,ele){
            $("input[type='button']:checked").closest('tr').remove();
            var checkedVals =   [];
                checkedVals.push(id);

                actionData(status,checkedVals,ele);
    }

/*
|--------------------------------------------------------------------------
| Function manage order  action Data
|--------------------------------------------------------------------------
|
*/
function actionData(status,checkedVals,ele) {

    if (checkedVals.length > 0 ) {
        $.ajax({
            type: "POST",
            url: "/manage-orders-bulk-status-update-ajax",
            headers: {
                "X-CSRF-TOKEN": $("meta[name=token]").attr("content"),
            },
            data: {
              "_token"       : token,
              "checked_vals" : checkedVals,
              "status"       : status,
            },
            cache: false,
            success: function (response) {
                if (response.success == true) {
                    toastr.success(response.message);

                    if(ele == null){
                        $("input[type=checkbox]:checked(:checked)").closest('tr').remove();
                        $("#ready_to_ship").hide();
                        $("#print_way_bill").hide();
                    }
                    else{
                        $(ele).closest('tr').closest('tr').remove();
                    }

                    setDisableAllSelect();
                    getOrderCount();
                } else {
                    toastr.success(response.message);
                }
            },
        });
    }
}


/*
|--------------------------------------------------------------------------
| Function single Print Way Bill
|--------------------------------------------------------------------------
|
*/

function singlePrintWayBill(ele) {
    $(ele).closest("tr").find(":checkbox").prop('checked',true);
    $("#formId").submit();
 }
/*
|--------------------------------------------------------------------------
| Function set get Order Count
|--------------------------------------------------------------------------
|
*/
 function getOrderCount(){
    var arr = select_date_range.split(" - ");
    var form = arr[0];
    var to = arr[1];
    $.ajax({
        type: "GET",
        dataType: "json",
        url: '/manage-order-count-status-ajax',
        data: {
            "_token": token,
            "selected_vendor": selected_vendor,
            "form": form,
            "to": to,
            },
        cache: false,
        success: function (data) {
            $('#pending-count').html('Pending('+data.pending_count+')');
            $('#ready-to-ship-count').html('in Packing('+data.ready_to_ship_count+')');
            $('#shipped-count').html('in Courier('+data.shipped_count+')');
            $('#delivered_count').html('Settled('+data.delivered_count+')');
            $('#cancelled-count').html('Cancelled('+data.cancelled_count+')');
            $('#returned-count').html('Returned('+data.returned_count+')');
            $('#paid-count').html('Paid('+data.paid_count+')');
        },
    });

}

/*
|--------------------------------------------------------------------------
| Function- Select vendor
|--------------------------------------------------------------------------
|
*/
$("#vendor_select").change(function (event) {
    var base_url = window.location.origin;
    var selected_vendor_id = $('#vendor_select').val();
    if(selected_vendor_id != ""){
    location.replace(base_url + "/manage-orders/" + selected_status+"?id="+ selected_vendor_id);
    }
});


/*
|--------------------------------------------------------------------------
| Function - Clear-  vendor and Date search
|--------------------------------------------------------------------------
|
*/
function clearData(){
    var base_url = window.location.origin;
    location.replace(base_url + "/manage-orders/" + selected_status);
}





