$(function () {
    bsCustomFileInput.init();
  });
/*
|--------------------------------------------------------------------------
|Read excel file in add package bulk
|--------------------------------------------------------------------------
*/

let fields = ['Product_Title','Category','SKU','Brand','Price','Marketing_Allocation'];
let autoFields = ['Intenal_Ref','Product_Title','Category','SKU','Brand','Price','Marketing_Allocation'];

let success_count = 0;
let error_count = 0;
let total_count = 0;



function uploadExcel(){

    if($('#file').get(0).files.length === 0){
        Swal.fire("Oops!","No file selected", "error");
        return;
    }
    if($('#vendor').val() === " "){
        Swal.fire("Oops!","No Vendor selected", "error");
        return;
    }

    success_count = 0;
    error_count   = 0;
    total_count   = 0;

    $('#error-tbl tbody').html('');
    $('#success-tbl tbody').html('');

    var input = document.getElementById('file');
    var reader = new FileReader();

    reader.onload = function(){
        var fileData = reader.result;
        var workbook = XLSX.read(fileData,{type: 'binary'});
        workbook.SheetNames.forEach(function(SheetName){
            var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[SheetName]);
            excelJsonObj = rowObject;

        });
       // console.log(excelJsonObj);

        set_total_count(excelJsonObj.length);

        // var time = 1000;
        // $.each(excelJsonObj, function( key, value ) {
        //     setTimeout( function(){ addReservetionBulk(value); }, time)
        //     time += 1000;
        // });

       // invokeLoader();

        var x     = 0;
        function go() {
            if(excelJsonObj[x]){
                addReservetionBulk(excelJsonObj[x]);
            if (x++ < excelJsonObj.length) {
                setTimeout(go, 2000);
            }
            }
            else{
                $("#error-count-lbl").html('Error : '+$('.error-tr').length);
                //removeLoader();
                Swal.fire(
                    'All record read successfully',
                    '',
                    'success'
                );
            }
        }
        go();


    };
    reader.readAsBinaryString(input.files[0]);

     $('#file').val('');
     $('.custom-file-label').html('Choose file');
}


/*
|--------------------------------------------------------------------------
| Add packge bulk
|--------------------------------------------------------------------------
*/
function addReservetionBulk(value) {
    vendor = $('#vendor').val();
    vendor_name = $("select option:selected").data('valueb')
    $.ajax({
        method:"POST",
        url:"/vendor-ajax-addresevationbulk",
        headers: {
            "X-CSRF-TOKEN": $("meta[name=token]").attr("content"),
        },
        cache: false,
        data:{
            "_token"                : token,
            'vendor'                : vendor,
            'title'                 : value.Product_Title,
            'category'              : value.Category,
            'sku'                   : value.SKU,
            'brand'                 : value.Brand,
            'price'                 : value.Price,
            'marketing_allocation'  : value.Marketing_Allocation,
        },
        success:function(response){
            if(response.success == true){
                $('#success-tbl tbody').append('<tr>\
                                                    <td class="text-success"><i class="fas fa-check"></i></td>\
                                                    <td>'+vendor_name+'</td>\
                                                    <td>'+value.Product_Title+'</td>\
                                                    <td>'+value.Category+'</td>\
                                                    <td>'+value.SKU+'</td>\
                                                    <td>'+value.Brand+'</td>\
                                                    <td>'+value.Price+'</td>\
                                                    <td>'+response.data+'</td>\
                                                </tr>');
                update_success_count();
            }
            else{

                var tr_class = '';
                if(response.message === "Duplicate"){
                    tr_class = 'duplicate';
                    $("#btn-duplicate").prop("disabled", false);

                }

                $('#error-tbl tbody').append('<tr class="error-tr '+tr_class+'">\
                                                    <td class="text-danger">'+response.message+'</td>\
                                                    <td>'+vendor_name+'</td>\
                                                    <td> <input type="text" class="form-control error-input" name="Product_Title" value="'+value.Product_Title+'"></td>\
                                                    <td> <input type="text" class="form-control error-input" name="Category" value="'+value.Category+'"></td>\
                                                    <td> <input type="text" class="form-control error-input" name="SKU" value="'+value.SKU+'"></td>\
                                                    <td> <input type="text" class="form-control error-input" name="Brand" value="'+value.Brand+'"></td>\
                                                    <td> <input type="text" class="form-control error-input" name="Price" value="'+value.Price+'"></td>\
                                                    <td> <input type="text" class="form-control error-input" name="Marketing_Allocation" value="'+value.Marketing_Allocation+'"></td>\
                                                </tr>');
                $("#btn-try-again").prop("disabled", false);
                update_error_count();

            }

            checkExsistErrors();
        },
        error: function () {

        }
    });
}


function removeDuplicate(){

    $('.error-tr.duplicate').each(function(i, obj) {
        $(this).remove();
        error_count--;
    });
    $("#error-count-lbl").html('Error : '+error_count);
    checkExsistErrors();
}


function checkExsistErrors(){

    if($(".error-tr").length == 0){
        $("#btn-try-again").prop("disabled", true);
    }
    if($(".error-tr.duplicate").length == 0){
        $("#btn-duplicate").prop("disabled", true);
    }
}


function getInvalid(){

    //invokeLoader();
    error_count = 0;

    let data_array = new Array();

    $('.error-tr').each(function(i, obj) {
        var input = {};
        $(this).find('.error-input').each(function(i, obj) {
            input[$(this).attr('name')] = $(this).val();
        });
        data_array.push(input);
    });

    $('#error-tbl tbody').html('');

    // var time = 1000;
    // $(data_array).each(function(i, value) {
    //     setTimeout( function(){ addReservetionBulk(value); }, time)
    //     time += 1000;
    // });

    var x     = 0;
    function go() {
        if(data_array[x]){
            addReservetionBulk(data_array[x]);
        if (x++ < data_array.length) {
            setTimeout(go, 2000);
        }
        }
        else{
            $("#error-count-lbl").html('Error : '+$('.error-tr').length);
           // removeLoader();
            Swal.fire(
                'All error records read successfully',
                '',
                'success'
            );
        }
    }
    go();
    return false;
}



/*
|--------------------------------------------------------------------------
| Success count in add Reseravation bulk
|--------------------------------------------------------------------------
*/
function update_success_count(){
    success_count++;
    $("#success-count-lbl").html('Success : '+success_count);
}


/*
|--------------------------------------------------------------------------
| Success count in add Reseravation bulk
|--------------------------------------------------------------------------
*/
function update_error_count(){
    error_count++;
    $("#error-count-lbl").html('Error : '+error_count);

}


/*
|--------------------------------------------------------------------------
|  Total count in add pacakge bulk
|--------------------------------------------------------------------------
*/
function set_total_count(count){
   $('#total-count-lbl').html('Total : '+count);
}

