$(document).ready(function () {
    $("#action_button").hide();
   getProductCount();
});
     /*
    |--------------------------------------------------------------------------
    | Function My Listing Bulk serach Data
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
        location.replace(base_url + "/my-listing/" + selected_status + url);
    }
}
    /*
    |--------------------------------------------------------------------------
    | Function My Listing check box
    |--------------------------------------------------------------------------
    |
    */
$("#select-all").click(function (event) {
    if (this.checked) {
        $(":checkbox").each(function () {
            this.checked = true;
            $("#action_button").show();
        });
    } else {
        $(":checkbox").each(function () {
            this.checked = false;
            $("#action_button").show();
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
$(".form-check-input").click(function (event) {
    if (this.checked) {
        $("#action_button").show();
    }
    if ($(".form-check-input:checked").length > 0) {
        $("#action_button").show();
    } else {
        $("#action_button").hide();
    }
    setStatus();
});
    /*
    |--------------------------------------------------------------------------
    | Function My Listing set Status
    |--------------------------------------------------------------------------
    |
    */
function setStatus(){
    var html_status = '';
    var status      = '';
    var btn_class   = '';
    if( selected_status == 'active'){
        html_status = 'Unpublish';
        status = 'unpublished';
        btn_class = 'btn btn-warning search-btn';
    }
    if(selected_status == 'deleted'){
        html_status = 'Publish';
        status = 'published';
        btn_class = 'btn btn-success search-btn';
    }
    if(selected_status == 'draft'){
        html_status = 'Delete';
        status = 'delete';
        btn_class = 'btn btn-danger search-btn';
    }
    if(selected_status == 'pending'){
        html_status = 'Unpublish';
        status = 'unpublished';
        btn_class = 'btn btn-warning search-btn';
    }
    if(selected_status == 'out_of_stock'){
        html_status = 'Unpublish';
        status = 'unpublished';
        btn_class = 'btn btn-warning search-btn';
    }
    if(selected_status == 'not_approved'){
        html_status = 'Unpublish';
        status = 'unpublished';
        btn_class = 'btn btn-warning search-btn';
    }
    $("#action_button").attr("onclick","bulkUpdate('"+status+"')").html(html_status).attr('class',btn_class);
}




function bulkUpdate(status){

    var checkedVals =   [];
    checkedVals     =   $(".form-check-input:checkbox:checked").map(function () {
                        return this.value;
                    }).get();

    actionData(status,checkedVals,ele=null);
}


function singleUpdate(status,id,ele){
    $("input[type='button']:checked").closest('tr').remove();
    var checkedVals =   [];
        checkedVals.push(id);
        actionData(status,checkedVals,ele);
}
/*
|--------------------------------------------------------------------------
| Function My Listing  action Data
|--------------------------------------------------------------------------
|
*/
function actionData(status,checkedVals,ele) {


    if (checkedVals.length > 0 ) {
        $.ajax({
            type: "POST",
            url: "/my-listing-bulk-status-update-ajax",
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
                    //var len = response['data'];
                    //JSON.stringify(len);
                    // $.each(response, function(value) {
                    // });
                    //console.log(response.count);


                    toastr.success(response.message);

                    if(ele == null){
                        $("input[type=checkbox]:checked(:checked)").closest('tr').remove();
                        $("#action_button").hide();
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
| Function get Product Count
|--------------------------------------------------------------------------
|
*/
function getProductCount(){

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/my-listing-count-status-ajax",
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

function showImageModal(key){
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg-"+key);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
   
}

function hideImageModal(){
    // Get the modal
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

