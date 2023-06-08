$(document).ready(function () {
    $("#action_button").hide();
    $("#action_button2").hide();
    $("#action_button3").hide();
   getProductCount();
});

  /*
    |--------------------------------------------------------------------------
    | Function Product List Bulk serach Data
    |--------------------------------------------------------------------------
    |
    */
    function serachData() {
        var base_url = window.location.origin;
        var category = $("#category").val();
        var product_id = $("#product_id").val();
        var product_name = $("#product_name").val();
        var sku = $("#sku").val();
        var url = "";

        if (category != "" || product_id != "" || product_name != "" || sku != "") {
            if (category != "") {
                url += "?category=" + category;
            }
            if (product_id != "") {
                if (category == "") {
                    url += "?id=" + product_id;
                } else {
                    url += "&&id=" + product_id;
                }
            }
            if (product_name != "") {
                if (category == "" && product_id == "") {
                    url += "?name=" + product_name;
                } else {
                    url += "&&name=" + product_name;
                }
            }
            if (sku != "") {
                if (category == "" && product_id == "" && product_name == "") {
                    url += "?sku=" + sku;
                } else {
                    url += "&&sku=" + sku;
                }
            }
            location.replace(base_url + "/product-listing/" + selected_status + url);
        }
    }
     /*
    |--------------------------------------------------------------------------
    | Function Product List check box
    |--------------------------------------------------------------------------
    |
    */
$("#select-all").click(function (event) {
    if (this.checked) {
        $(":checkbox").each(function () {
            this.checked = true;
            $("#action_button").show();
            $("#action_button2").show();
            $("#action_button3").show();
        });
    } else {
        $(":checkbox").each(function () {
            this.checked = false;
            $("#action_button").show();
            $("#action_button2").show();
            $("#action_button3").show();
        });
    }
    setStatus();
});
/*
|--------------------------------------------------------------------------
| Function set Disable All Select
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
    | Function Product List Action Button
    |--------------------------------------------------------------------------
    |
    */
$(".form-check-input").click(function (event) {
    if (this.checked) {
        $("#action_button").show();
        $("#action_button2").show();
        $("#action_button3").show();
    }
    if ($(".form-check-input:checked").length > 0) {
        $("#action_button").show();
        $("#action_button2").show();
        $("#action_button3").show();
    } else {
        $("#action_button").hide();
        $("#action_button2").hide();
        $("#action_button3").hide();
    }
    setStatus();
});
    /*
    |--------------------------------------------------------------------------
    | Function Product List set Status
    |--------------------------------------------------------------------------
    |
    */
function setStatus(){
    var html_status = '';
    var status      = '';
    var btn_class   = '';
    if( selected_status == 'active'){
        html_status = 'Unpublish';
        html_status2 = 'Unpublish';
        status = 'unpublished';
        status2 = 'unpublished';
        btn_class = 'btn btn-warning search-btn';
        btn_class2 = 'btn btn-warning search-btn';
    }
    if(selected_status == 'deleted'){
        html_status = 'Publish';
        html_status2 = 'Publish';
        status = 'published';
        status2 = 'published';
        btn_class = 'btn btn-success search-btn';
        btn_class2 = 'btn btn-success search-btn';
    }
    if(selected_status == 'draft'){
        html_status = 'Delete';
        html_status2 = 'Delete';
        status = 'delete';
        status2 = 'delete';
        btn_class = 'btn btn-danger search-btn';
        btn_class2 = 'btn btn-danger search-btn';
    }
    if(selected_status == 'pending'){
        html_status = 'Approve';
        html_status2 = 'Disapprove';
        status = 'published';
        status2 = 'not_approved';
        btn_class = 'btn btn-success search-btn';
        btn_class2 = 'btn btn-warning search-btn';
    }
    if(selected_status == 'out_of_stock'){
        html_status = 'Unpublish';
        html_status2 = 'Unpublish';
        status = 'unpublished';
        status2 = 'unpublished';
        btn_class = 'btn btn-warning search-btn';
        btn_class2 = 'btn btn-warning search-btn';
    }
    if(selected_status == 'not_approved'){
        html_status = 'Delete';
        html_status2 = 'Approve';
        status = 'delete';
        status2 = 'published';
        btn_class = 'btn btn-danger search-btn';
        btn_class2 = 'btn btn-success search-btn';
    }
    $("#action_button").attr("onclick","bulkUpdate('"+status+"')").html(html_status).attr('class',btn_class);
    $("#action_button2").attr("onclick","bulkUpdate('"+status2+"')").html(html_status2).attr('class',btn_class2);
}
/*
|--------------------------------------------------------------------------
| Function get bulk Update
|--------------------------------------------------------------------------
|
*/
function bulkUpdate(status){

    var checkedVals =   [];
    var disapprovelReson;
    checkedVals     =   $(".form-check-input:checkbox:checked").map(function () {
                        return this.value;
                    }).get();
                    $('.save_btn').on('click', function(e) {
                    });
    disapprovelReson = $('#disapprovel-reason').val();

    if(status == 'not_approved'){
        if(disapprovelReson == ''){
            return $('#error-mg').html('This field is required.');

        }else{
            $('#exampleModal').modal('hide');
                actionData(status,checkedVals,ele=null,disapprovelReson);
        }
    }else{
        actionData(status,checkedVals,ele=null,disapprovelReson);
    }

}
/*
|--------------------------------------------------------------------------
| Function get bulk Update
|--------------------------------------------------------------------------
|
*/
function singleUpdate(status,id,ele){

    $("input[type='button']:checked").closest('tr').remove();
    var checkedVals =   [];
        checkedVals.push(id);


        disapprovelReson = $('#disapprovel-reason').val();

        if(status == 'not_approved'){
            if(disapprovelReson == ''){
                return $('#error-mg').html('This field is required.');

            }else{
            // console.log(disapprovelReson);
               actionData(status,checkedVals,ele,disapprovelReson);
            }
        }else{
           actionData(status,checkedVals,ele,disapprovelReson);
        }
       // actionData(status,checkedVals,ele);
}

/*
|--------------------------------------------------------------------------
| Function product listing action Data
|--------------------------------------------------------------------------
|
*/
function actionData(status,checkedVals,ele,disapprovelReson) {
 //console.log(disapprovelReson)
    if (checkedVals.length > 0 ) {
        $.ajax({
            type: "POST",
            url: "/product-listing-bulk-status-update-ajax",
            headers: {
                "X-CSRF-TOKEN": $("meta[name=token]").attr("content"),
            },
            data: {
              "_token"       : token,
              "checked_vals" : checkedVals,
              "status"       : status,
              'disapprovel_reson' : disapprovelReson,
            },
            cache: false,
            success: function (response) {
                if (response.success == true) {
                    //var len = response['data'];
                    //JSON.stringify(len);
                    // $.each(response, function(value) {
                    // });
                    //console.log(response.count);


                    toastr.success(response.message);

                    if(ele == null){
                        $("input[type=checkbox]:checked(:checked)").closest('tr').remove();
                        $("#action_button").hide();
                        $("#action_button2").hide();
                        $("#action_button3").hide();
                    }
                    else{
                        $(ele).closest('tr').closest('tr').remove();
                    }

                    setDisableAllSelect();
                    getProductCount();
                } else {
                    toastr.success(response.message);
                }
            },
        });
    }
}
/*
|--------------------------------------------------------------------------
| Function get Product Count
|--------------------------------------------------------------------------
|
*/
function getProductCount(){

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/product-listing-count-status-ajax",
        cache: false,
        success: function (data) {
            $('#active').html('Active('+data.active+')');
            $('#draft').html('Draft('+data.draft+')');
            $('#pending').html('Pending('+data.pending+')');
            $('#out_of_stock').html('Out of Stock('+data.out_of_stock+')');
            $('#not_approved').html('Not Approved('+data.not_approved+')');
            $('#deleted').html('Delete('+data.deleted+')');
        },
    });

}


function showModal(ele){
    $('tbody').find(":checkbox").prop('checked',false);
    $(ele).closest("tr").find(":checkbox").prop('checked',true);
    $('#exampleModal').modal('show');
}

