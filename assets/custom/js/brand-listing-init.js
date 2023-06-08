$(document).ready(function () {
    getBrandListCount();
    $('#action_button').hide();
    $('#action_buttontwo').hide();
    brandSaveValidation();
});
/*
|--------------------------------------------------------------------------
| Function get Product Count
|--------------------------------------------------------------------------
|
*/
function getBrandListCount(){

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/brand-listing-count-ajax",
        cache: false,
        success: function (data) {
            $('#pending').html('Pending('+data.pending+')');
            $('#approve').html('Approve('+data.approved+')');
            $('#disapprove').html('Disapprove('+data.disapproved+')');
            //console.log(data);
        },

    });

}
 /*
    |--------------------------------------------------------------------------
    | Function check box
    |--------------------------------------------------------------------------
    |
    */
    $("#select-all").click(function (event) {
        if (this.checked) {
            $(":checkbox").each(function () {
                this.checked = true;
                $("#action_button").show();
                $("#action_buttontwo").show();
            });
        } else {
            $(":checkbox").each(function () {
                this.checked = false;
                $("#action_button").hide();
                $("#action_buttontwo").hide();
            });
        }
        setStatus();
    });
        /*
        |--------------------------------------------------------------------------
        | Function  Action Button
        |--------------------------------------------------------------------------
        |
        */
    $(".form-check-input").click(function (event) {
        if (this.checked) {
            $("#action_button").show();
            $("#action_buttontwo").show();
        }
        if ($(".form-check-input:checked").length > 0) {
            $("#action_button").show();
            $("#action_buttontwo").show();
        } else {
            $("#action_button").hide();
            $("#action_buttontwo").hide();
        }
        setStatus();
    });
   /*
    |--------------------------------------------------------------------------
    | Function  set Status
    |--------------------------------------------------------------------------
    |
    */
    function setStatus(){
        var html_status = '';
        var status      = '';
        var btn_class   = '';
        if( selected_status == 'pending'){
            html_status = 'Approved';
            html_statustwo = 'Disapproved';
            status = 'approved';
            statustwo = 'disapproved';
            btn_class = 'btn btn-success search-btn';
            btn_classtwo = 'btn btn-warning search-btn';
        }
        if(selected_status == 'approved'){
            html_status = 'Disapproved';
            status = 'disapproved';
            btn_class = 'btn btn-warning search-btn';
        }
        if(selected_status == 'disapproved'){
            html_status = 'Approved';
            status = 'approved';
            btn_class = 'btn btn-success search-btn';
        }

        $("#action_button").attr("onclick","bulkUpdate('"+status+"')").html(html_status).attr('class',btn_class);
        $("#action_buttontwo").attr("onclick","bulkUpdate('"+statustwo+"')").html(html_statustwo).attr('class',btn_classtwo);
    }
/*
    |--------------------------------------------------------------------------
    | Function  bulk status Update
    |--------------------------------------------------------------------------
    |
    */
    function bulkUpdate(status){

        var checkedVals =   [];
        checkedVals     =   $(".form-check-input:checkbox:checked").map(function () {
                            return this.value;
                        }).get();

        actionData(status,checkedVals,ele=null);
    }
     /*
    |--------------------------------------------------------------------------
    | Function single status Update
    |--------------------------------------------------------------------------
    |
    */
    function singleUpdate(status,id,ele){
        $("input[type='button']:checked").closest('tr').remove();
        var checkedVals =   [];
            checkedVals.push(id);
            actionData(status,checkedVals,ele);
    }
    /*
    |--------------------------------------------------------------------------
    | Function status action Data
    |--------------------------------------------------------------------------
    |
    */
function actionData(status,checkedVals,ele) {
    if (checkedVals.length > 0 ) {
        $.ajax({
            type: "POST",
            url: "/brand-listing-bulk-status-update-ajax",
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
                        $("#action_button").hide();
                    }
                    else{
                        $(ele).closest('tr').closest('tr').remove();
                    }

                    setDisableAllSelect();
                    getBrandListCount();
                } else {
                    toastr.success(response.message);
                }
            },
        });
    }
}
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
| Function brand Edit Data
|--------------------------------------------------------------------------
|
*/
function brandEditData($id,$status)
{
    //console.log($id);
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/brand-edit-get-data-ajax/" + $status +'/'+ $id,
        cache: false,
        success: function (data) {
            $('#brand-name').val(data.brand_name);
             $('#brand-id').val(data.id);
            // $('#disapprove').html('Disapprove('+data.disapproved+')');
            //console.log(data);
        },

    });
}
function brandSaveValidation(){
    $("#single-save").validate({
        ignore: [],
        errorClass: "text-danger custom",
        successClass: "text-success",
        highlight: function (element, errorClass) {
            $(element).removeClass(errorClass)
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass)
        },
        errorPlacement: function (error, element) {

            error.insertAfter(element)
        },

    })
}
