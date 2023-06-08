/*
|--------------------------------------------------------------------------
| DraftSave - add List
|--------------------------------------------------------------------------
*/

$(function () {
    $("#draft_btn").on("click", function () {

        $('#cover_img_validator').removeAttr('required');// cover image validation remove

        var title = $("#title").val();
        var product_images = $(".productimagehidden")
            .map(function () {
                return this.value;
            })
            .get();
        var image_names = $(".productnamehidden")
            .map(function () {
                return this.value;
            })
            .get();

        var video_links = $(".video-links")
            .map(function () {
                return this.value;
            })
            .get();

        var video_sources = $(".video-source")
            .map(function () {
                return this.value;
            })
            .get();
        var video_types = $(".video-type")
            .map(function () {
                return this.value;
            })
            .get();

        if (title != "") {
            // alert('Title not empty')
            var base_url = window.location.origin;
          var attr_title = $("input[name='attr_title[]']")
            .map(function(){return $(this).val();}).get();
          var attr_val = $("input[name='attr_val[]']")
            .map(function(){return $(this).val();}).get();
          var attr_price = $("input[name='attr_price[]']")
              .map(function(){return $(this).val();}).get();
          var attr_marketing = $("input[name='attr_marketing[]']")
              .map(function(){return $(this).val();}).get();
          var attr_wholesale_price = $("input[name='attr_wholesale_price[]']")
              .map(function(){return $(this).val();}).get();
          var attr_minimum_order_qty = $("input[name='attr_minimum_order_qty[]']")
              .map(function(){return $(this).val();}).get();
          var attr_sku = $("input[name='attr_sku[]']")
              .map(function(){return $(this).val();}).get();
          var attr_stock = $("input[name='attr_stock[]']")
              .map(function(){return $(this).val();}).get();
          var is_active = $("input[name='is_active[]']")
              .map(function(){return $(this).val();}).get();
          var variation_images_hidden = $("input[name='variation_images_hidden[]']")
              .map(function(){return $(this).val();}).get();


            $.ajax({
                type: "POST",
                url: base_url + "/save/draft",
                data: {
                    _token: token,
                    vendor_id:$("#vendor").val(),
                    title: $("#title").val(),
                    sku: $("#sku").val(),
                    brand_id: $("#brand").val(),
                    warranty_period: $("#warranty_period").val(),
                    price: $("#price").val(),
                    marketing_allocations: $("#marketing_allocations").val(),
                    wholesale_price:($("#wholesale_price").val() !=null) ?  $("#wholesale_price").val():0 ,
                    min_order_qty:($("#min_order_qty").val() !=null) ?  $("#min_order_qty").val():0 ,
                    weight: $("#weight").val(),
                    height: $("#height").val(),
                    width: $("#width").val(),
                    length: $("#length").val(),
                    stock: $("#stock").val(),
                    short_description: $("#short_description").val(),
                    long_description: $("#long_description").val(),
                    parent_category: $("#parent-category-input").val(),
                    sub_category: $("#sub-category-input").val(),
                    sub_sub_category: $("#sub-sub-category-input").val(),
                    product_image: product_images,
                    image_name: image_names,
                    video_links: video_links,
                    video_sources: video_sources,
                    video_types: video_types,
                    slug: $("#slug").val(),
                    meta_title: $("#meta_title").val(),
                    meta_description: $("#meta_description").val(),
                    price_fixed: $('input#todoCheck1').prop('checked'),
                    product_type:$('#product_type').val(),
                    attr_title:(attr_title != null )? attr_title : 0,
                    attr_val:(attr_val != null )? attr_val : 0,
                    attr_price:(attr_price != null) ? attr_price : 0,
                    attr_marketing:(attr_marketing != null) ? attr_marketing : 0,
                    attr_wholesale_price:(attr_wholesale_price != null) ? attr_wholesale_price : 0,
                    attr_minimum_order_qty:(attr_minimum_order_qty != null) ? attr_minimum_order_qty : 0,
                    attr_sku:(attr_sku != null) ? attr_sku : 0,
                    attr_stock:(attr_stock != null) ? attr_stock : 0,
                    is_active:(is_active != null) ? is_active : 0,
                    variation_images_hidden:(variation_images_hidden != null) ? variation_images_hidden : 0,


                    status: "draft",
                },

                dataType: "json",
                encode: true,
            }).done(function (data) {
                // success: function(data){
                //     if(data.success == true){ // if true (1)
                //        setTimeout(function(){// wait for 5 secs(2)
                //             location.reload(); // then reload the page.(3)
                //        }, 5000);
                //     }
                //  }

                if (data.success == false) {
                    toastr.error(data.message);
                } else {
                    toastr.success(data.message);

                    setTimeout(function () {
                        // window.location = '{{ route('product.list.cats') }}'
                        window.location = "/my-listing/draft";
                    }, 1000); // wait for 1 sec
                }
            });
        } else {
            toastr.error("At least you have to type a Title");
        }
    });
});

/*
|--------------------------------------------------------------------------
| DraftSave in Edit view
|--------------------------------------------------------------------------
*/

$(function () {
    $("#draft_btn_editview").on("click", function () {

        $('#cover_img_validator').removeAttr('required');// cover image validation remove

        // alert('hello world')
        var title = $("#title").val();
        var product_id = $("#product_id").val();
        var product_images = $(".productimagehidden")
            .map(function () {
                return this.value;
            })
            .get();
        var image_names = $(".productnamehidden")
            .map(function () {
                return this.value;
            })
            .get();

        var video_links = $(".video-links")
            .map(function () {
                return this.value;
            })
            .get();

        var video_sources = $(".video-source")
            .map(function () {
                return this.value;
            })
            .get();
        var video_types = $(".video-type")
            .map(function () {
                return this.value;
            })
            .get();

        if (title != "") {
            // alert('Title not empty')
            var base_url = window.location.origin;
            var attr_title = $("input[name='attr_title[]']")
              .map(function(){return $(this).val();}).get();
            var attr_val = $("input[name='attr_val[]']")
              .map(function(){return $(this).val();}).get();
            var attr_price = $("input[name='attr_price[]']")
                .map(function(){return $(this).val();}).get();
            var attr_marketing = $("input[name='attr_marketing[]']")
                .map(function(){return $(this).val();}).get();
            var attr_wholesale_price = $("input[name='attr_wholesale_price[]']")
                .map(function(){return $(this).val();}).get();
            var attr_minimum_order_qty = $("input[name='attr_minimum_order_qty[]']")
                .map(function(){return $(this).val();}).get();
            var attr_sku = $("input[name='attr_sku[]']")
                .map(function(){return $(this).val();}).get();
            var attr_stock = $("input[name='attr_stock[]']")
                .map(function(){return $(this).val();}).get();
            var is_active = $("input[name='is_active[]']")
                .map(function(){return $(this).val();}).get();
            var variation_images_hidden = $("input[name='variation_images_hidden[]']")
                .map(function(){return $(this).val();}).get();
            var image_hiddne = $("input[name='image_hiddne[]']")
                .map(function(){return $(this).val();}).get();

            $.ajax({
                type: "POST",
                url: base_url + "/edit/save/draft",
                data: {
                    _token: token,
                    product_id: $("#product_id").val(),
                    vendor_id:$("#vendor").val(),
                    title: $("#title").val(),
                    sku: $("#sku").val(),
                    brand_id: $("#brand").val(),
                    warranty_period: $("#warranty_period").val(),
                    price: $("#price").val(),
                    marketing_allocations: $("#marketing_allocations").val(),
                    wholesale_price:($("#wholesale_price").val() !=null) ?  $("#wholesale_price").val():0 ,
                    min_order_qty:($("#min_order_qty").val() !=null) ?  $("#min_order_qty").val():0 ,
                    weight: $("#weight").val(),
                    height: $("#height").val(),
                    width: $("#width").val(),
                    length: $("#length").val(),
                    stock: $("#stock").val(),
                    short_description: $("#short_description").val(),
                    long_description: $("#long_description").val(),
                    parent_category: $("#parent-category-input").val(),
                    sub_category: $("#sub-category-input").val(),
                    sub_sub_category: $("#sub-sub-category-input").val(),
                    // #TODO fix 'product_images is not defined' error
                    product_image: product_images,
                    image_name: image_names,
                    video_links: video_links,
                    video_sources: video_sources,
                    video_types: video_types,
                    product_type:$('#product_type').val(),
                    slug: $("#slug").val(),
                    meta_title: $("#meta_title").val(),
                    meta_description: $("#meta_description").val(),
                    price_fixed: $('input#todoCheck1').prop('checked'),
                    attr_title:(attr_title != null )? attr_title : 0,
                    attr_val:(attr_val != null )? attr_val : 0,
                    attr_price:(attr_price != null) ? attr_price : 0,
                    attr_marketing:(attr_marketing != null) ? attr_marketing : 0,
                    attr_wholesale_price:(attr_wholesale_price != null) ? attr_wholesale_price : 0,
                    attr_minimum_order_qty:(attr_minimum_order_qty != null) ? attr_minimum_order_qty : 0,
                    attr_sku:(attr_sku != null) ? attr_sku : 0,
                    attr_stock:(attr_stock != null) ? attr_stock : 0,
                    is_active:(is_active != null) ? is_active : 0,
                    variation_images_hidden:(variation_images_hidden != null) ? variation_images_hidden : 0,
                    image_hiddne:(image_hiddne != null) ? image_hiddne : 0,
                    status: "draft",
                },

                dataType: "json",
                encode: true,
            }).done(function (data) {
                if (data.success == false) {
                    toastr.error(data.message);
                } else {
                    toastr.success(data.message);

                    setTimeout(function () {
                        // window.location = '{{ route('product.list.cats') }}'
                        window.location = "/my-listing/draft";
                    }, 1000);
                }
            });
        } else {
            toastr.error("At least you have to type a Title");
        }
    });
});

var attribute_list = [];
/*
|--------------------------------------------------------------------------
| On Load Last Active tab show function
|--------------------------------------------------------------------------
*/
$(document).ready(function () {
    var attr_values;
    var attr_count;
    product_attribute();
    product_attribute_value();
    product_type();
    $('.btn-generate').hide();
 
    if ($('#product_type').val() == 'variation_product') {
        $('#vert-tabs-variations-tab').show();
        if(SelectAttribute == null){
            $('.append_required').append('<div class="form-group table_required"><input type="hidden" name="table_required" ></div>');
       // $("#add_attribute").attr("required", "true");
        }
       // $('# vert-tabs-variations').show();
      }else{
        $('#vert-tabs-variations-tab').hide();
       // $('#vert-tabs-variations').hide();
      }
    //#TODO Reload page and select last actice Tab in Edit listing
    $('a[data-toggle="pill"]').on('shown.bs.tab', function(event) {
        let activeTab = $(event.target), // activated tab
            id = activeTab.attr('href'); // active tab href

           // set id in html5 localstorage for later usage
           localStorage.setItem('activeTab', id);
      });

    var $page = $("#page").attr("value"); //current page
    let tabID = localStorage.getItem('activeTab');
    if(tabID != null &&  $page =='edit_listing'){
        $("#vert-tabs-basic-tab").removeClass("active");
        $("#vert-tabs-basic").removeClass("active");
        $(tabID+"-tab").addClass("active");
        $(tabID).tab('show');
    }
/*
|--------------------------------------------------------------------------
| title R function
|--------------------------------------------------------------------------
*/

var maxLength = 154;
$('#title').keyup(function() {
  var textlen = $(this).val().length;
  if(maxLength > textlen){
    $('#titlecharNum').html("<span style='color: green;'> "+textlen+" / 154</span>");
  }else{
    $('#titlecharNum').html("<span style='color: red;'> "+textlen+" / 154</span>");
  }
  
});
/*
|--------------------------------------------------------------------------
| slug R function
|--------------------------------------------------------------------------
*/
$('#slug').keyup(function() {
    var textlen = $(this).val().length;
    if(maxLength > textlen){
      $('#slugcharNum').html("<span style='color: green;'> "+textlen+" / 154</span>");
    }else{
      $('#slugcharNum').html("<span style='color: red;'> "+textlen+" / 154</span>");
    }
    
  });

  /*
|--------------------------------------------------------------------------
| meta_title R function
|--------------------------------------------------------------------------
*/
$('#meta_title').keyup(function() {
    var textlen = $(this).val().length;
    if(maxLength > textlen){
      $('#meta_titlecharNum').html("<span style='color: green;'> "+textlen+" / 154</span>");
    }else{
      $('#meta_titlecharNum').html("<span style='color: red;'> "+textlen+" / 154</span>");
    }
    
  });
/*
|--------------------------------------------------------------------------
| meta_title R function
|--------------------------------------------------------------------------
*/
$('#meta_description').keyup(function() {
    var textlen = $(this).val().length;
    if(maxLength > textlen){
      $('#meta_descriptioncharNum').html("<span style='color: green;'> "+textlen+" / 154</span>");
    }else{
      $('#meta_descriptioncharNum').html("<span style='color: red;'> "+textlen+" / 154</span>");
    }
    
  });

  $('#sku').keyup(function() {
    var textlen = $(this).val().length;
    if(44 > textlen){
      $('#skucharNum').html("<span style='color: green;'> "+textlen+" / 44</span>");
    }else{
      $('#skucharNum').html("<span style='color: red;'> "+textlen+" / 44</span>");
    }
    
  });
    /*
|--------------------------------------------------------------------------
| Brand function
|--------------------------------------------------------------------------
*/

    // #TODO Brand Search
    var base_url = window.location.origin;
    $("#brand").select2({
        placeholder: "Select Brand",
        language: {
            noResults: function () {
            return `Can not find brand?
           <a onclick="noBrand(this)" ><span style="color:blue;font-weight:bold"> Set as No Brand<span></a> or
           <a  onclick="addBrandModal()"><span style="color:blue;font-weight:bold"> Add New Brand<span></a>
           `;
            },
        },

        escapeMarkup: function (markup) {
            return markup;
        },

        minimumInputLength: 3,
        ajax: {
            url: base_url + "/brand/search",
            dataType: "json",
            delay: 250,
            processResults: function (data) {
                return {
                    results: $.map(data, function (item) {
                        return {
                            text: item.brand_name,
                            id: item.id,
                        };
                    }),
                };
            },
            cache: true,
        },
    });

    $('#brand').on('select2:opening', function (e) {
        // Do something
        $('#brand').html('');
      });



 // #TODO Vendor Search
    $("#vendor").select2({
        placeholder: "If needed, Select a Vendor",
        escapeMarkup: function (markup) {
            return markup;
        },
         minimumInputLength: 1,
        ajax: {
            url: base_url + "/vendor-search",
            dataType: "json",
            delay: 250,
            processResults: function (data) {
                return {
                    results: $.map(data, function (item) {
                        return {
                            text: item.business_name,
                            id: item.id,
                        };
                    }),
                };
            },
            cache: true,
        },
    });



});

function addBrandModal() {
    $("#brand-add-modal").modal("show");
    // $(".select2-dropdown.select2-dropdown--below").hide();
    // #TODO close select result feild
    $("#brand").select2("close");
}

function brandModalClose() {
    // $(".select2-dropdown.select2-dropdown--below").show();
}

function addBrand() {
    var base_url = window.location.origin;

    $.ajax({
        type: "POST",
        url: base_url + "/add/brand",
        data: {
            _token: token,
            brand_name: $("#new_brand").val(),
            brand_status: 1,
        },

        dataType: "json",
        encode: true,
    }).done(function (data) {
        if (data.success == false) {
            toastr.error(data.message);
        } else {
            toastr.success(data.message);
            $("#new_brand").val("");
            $("#brand-add-modal").modal("hide");
        }
    });
}

function noBrand() {
    $("#brand").html('');
    $("#brand").append(' <option  value="1" >No Brand</option>')
    $("#brand").select2("close");
}



/*
|--------------------------------------------------------------------------
|Image cropper function
|--------------------------------------------------------------------------
*/
// var  $model = $('#cropper-modal');
var $image = document.getElementById("canvas-image");
var cropper;
var num = 0;
var file_name = "";

function cropperInitialize() {
    cropper = new Cropper($image, {
        dragMode: "move",
        aspectRatio: 1,
        autoCropArea: 1,
        restore: false,
        guides: false,
        center: false,
        highlight: false,
        cropBoxMovable: false,
        cropBoxResizable: false,
        toggleDragModeOnDblclick: false,

        // viewMode: 1,
        // aspectRatio: 1,
        minContainerWidth: 350,
        minContainerHeight: 350,
        maxContainerWidth: 350,
        maxContainerHeight: 350,
        // maxCropBoxWidth: 100,
        // maxCropBoxHeight: 100,
        // maxCanvasHeight:100,
        // maxCanvasWidth:100,
        // movable: true,
        // maxWidth:100,
        // maxHeight:100
    });

    //  cropper.initialCanvasData.maxWidth = 100;
    // cropper.initialCanvasData.maxHeight = 100;
}

function clearlCrop() {
    if (cropper) {
        $image.src = "";
        cropper.destroy(), (cropper = null);
    }
    file_name = "";
    $("#img_file").val(null);
    $("#canvas-image").hide();
    $("#crop-cancel-btn").hide();
    $("#crop-btn").hide();
}

function imageCrop(input_id, file_name) {
    if ($("#" + input_id).val() != null && $("#" + input_id).val() != "") {
        // if($(".dropify").val()){

        // if ($('.custom.card-body').length < 4) {

        canvas = cropper.getCroppedCanvas({
            width: 650,
            height: 650,
        });

        canvas.toBlob(function (blob) {
            url = URL.createObjectURL(blob);
            reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function (e) {
                var base64data = reader.result;
                // TODO change file name here
                file_name = "productimage" + input_id;
                resetPreview(input_id, base64data, file_name);

                // $('#' + input_id).val("hello world");

                // ('#img_file1').attr('src', base64data);
                // $('#result-row').append($('<img>').attr('src', base64data));
                // $('#result-row').append('<div class="col-lg-3"><img src="'+base64data+'"/></div>');

                // $('#result-row').append('<div class="col-lg-3 product-image-cropped" id="product-image-cropped-'+num+'">\
                // <div class="card card-widget product-card">\
                //   <div>\
                //     <button type="button" class="btn btn-danger btn-sm float-right" style="width: 15%;" onclick="removeImage('+num+')"><i class="fa fa-times" aria-hidden="true"></i></button>\
                //   </div>\
                //   <div class="custom card-body">\
                //     <div class="img-parent">\
                //         <div class="imag-wrapper">\
                //           <img class="img-fluid pad" src="'+base64data+'" alt="">\
                //         </div>\
                //     </div>\
                //   </div>\
                // </div>\
                // <input type="hidden" name="product_image[]" value="'+base64data+'">\
                // <input type="hidden" name="image_name[]" value="'+file_name+'">\
                // </div>');
                // num++;
                clearlCrop();
                setImageCount();
                $("#profile-change-modal-2").modal("hide");

                // Validate Cover Image when form submit
                if(input_id =='img_file1'){
                    $('#cover_img_validator').removeAttr('required');
                    $('#cover_img_validator-error').html('');
                }

                // var selected_hiddn_div = document.getElementById("#" +"hidden_img_"+input_id);
                $("#" + input_id)
                    .closest(".card")
                    .find(".custom.card-body")
                    .append(
                        '<input type="hidden" id="productimagehidden' +
                            input_id +
                            '" class="productimagehidden" name="product_image[]" value="' +
                            base64data +
                            '">\
                    <input type="hidden" id="productnamehidden' +
                            input_id +
                            '" class="productnamehidden" name="image_name[]" value="' +
                            file_name +
                            '">'
                    );

                var $page = $("#page").attr("value");

                // #TODO $page get from hidden input feild
                if ($page == "edit_listing") {
                    // #TODO Edit listing image edit
                    var product_id = $("#product_id").val();
                    if (product_id != 0) {
                        ajaxAddImage(
                            input_id,
                            product_id,
                            base64data,
                            file_name
                        );
                        // #TODO create function if image exsist
                    }
                }

                // document.getElementById("profile-change-from").submit();
            };
        });

        // }
        // else {
        //     toastr.error("only 4 images can added");
        //     clearlCrop();
        // }
    } else {
        toastr.error("image requierd");
    }
}
var base64data;
function imageCropVariation(input_id, file_name){
   // console.log(file_name);

    canvas = cropper.getCroppedCanvas({
        width: 650,
        height: 650,
    });

    canvas.toBlob(function (blob) {
       url = URL.createObjectURL(blob);
        reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = function (e) {
            base64data = reader.result;
            // TODO change file name here
            file_name = "productimage" + input_id;
            resetPreviewVariation(input_id, base64data, file_name);
            //console.log(input_id);
            clearlCrop();
            setImageCount();
            $("#profile-change-modal-2").modal("hide");
            //<img class="img-fluid pad" src="'+base64data+'" alt="">
        }
             

    });

        
}

function ajaxAddImage(input_id, product_id, base64data, file_name) {
    var image_id = $("#" + input_id).attr("value");
    var base_url = window.location.origin;
    $.ajax({
        type: "POST",
        url: base_url + "/add/image",
        data: {
            _token: token,
            product_id: product_id,
            image_id: image_id,
            image: base64data,
            image_name: file_name,
        },

        dataType: "json",
        encode: true,
    }).done(function (data) {
        if (data.success == false) {
            toastr.error(data.message);
        } else {
            toastr.success(data.message);
            $("#" + input_id).attr("value", data.new_image_id);
            window.location.reload();
        }
    });
}

// #TODO Make as cover function
function makeAsCover(image_id, product_id) {

    var base_url = window.location.origin;
    $.ajax({
        type: "POST",
        url: base_url + "/make/cover/image",
        data: {
            _token: token,
            product_id: product_id,
            image_id: image_id,
        },

        dataType: "json",
        encode: true,
    }).done(function (data) {
        if (data.success == false) {
            toastr.error(data.message);
        } else {
            toastr.success(data.message);
            window.location.reload();

            // $('#vert-tabs-image').load(document.URL +  ' #vert-tabs-image');
        }
    });
}



function skufilter(sku){
    var base_url = window.location.origin;
    $.ajax({
        type: "POST",
        url: base_url + "/ajax/skuFiltering",
        data: {
            _token: token,
            sku: sku,
        },
            dataType: "json",
            encode: true,
}).done(function (data) {
        if (data.success == false) {
            toastr.error(data.message);
            $('#sku').val(null);
        }
});
}
function resetPreview(id, src, fname = "") {

    let input = $("#" + id);
    let wrapper = input.closest(".dropify-wrapper");
    let preview = wrapper.find(".dropify-preview");
    let filename = wrapper.find(".dropify-filename-inner");
    let render = wrapper.find(".dropify-render").html("");

    input.val("").attr("title", fname);
    wrapper.removeClass("has-error").addClass("has-preview");
    filename.html(fname);
    render.append(
        $("<img />")
            .attr("src", src)
            .css("max-height", input.data("height") || "")
    );
    preview.fadeIn();
}

function resetPreviewVariation(id, src, fname = "") {

    let input = $("#" + id);
    let wrapper = input.closest(".dropify-wrapper");
    let preview = wrapper.find(".dropify-preview");
    let filename = wrapper.find(".dropify-filename-inner");
    let render = wrapper.find(".dropify-render").html("");

    input.val("").attr("title", fname);
    wrapper.removeClass("has-error").addClass("has-preview");
    filename.html(fname);
    render.append(
        $("<img />")
            .attr("src", src)
            .css("max-height", input.data("height") || "")
    );
    preview.fadeIn();
    input.closest('tr').find('.variation_images_hidden').val(""+src);
}

function removeImage(index) {

    $("#product-image-cropped-" + index).remove();
    // $("#"+input_id).closest(".card").find(".custom.card-body").html('');

    setImageCount();
}

function setImageCount() {
    var length = $(".product-image-cropped").length;
    if (length == 0) {
        $("#image_count").val("");
    } else {
        $("#image_count").val(length);
    }
}

/*
   |--------------------------------------------------------------------------
   |dropify Image Viewer function
   |--------------------------------------------------------------------------
   */

// #TODO Copy dropify script

// #TODO dropify after image remove clear hidden
var drEvent = $(".dropify").dropify();
drEvent.on("dropify.afterClear", function (event, element) {
    $(this).closest(".card").find(".custom.card-body").html("");
    var $page = $("#page").attr("value");

    // Validate Cover Image when form submit

    if(this.id =='img_file1'){
        $('#cover_img_validator').prop('required',true);
    }

    // #TODO $page get from hidden input feild
    if ($page == "edit_listing") {
        var input_id = this.id;
        var image_id = $("#" + input_id).attr("value");
        var product_id = $("#product_id").val();
        var file_name = "productimage" + input_id;
        ajaxRemoveImage(product_id, image_id, file_name);
    }

    $(this).attr("value", "");
});

function ajaxRemoveImage(product_id, image_id, file_name) {
    var base_url = window.location.origin;
    $.ajax({
        type: "POST",
        url: base_url + "/remove/image",
        data: {
            _token: token,
            product_id: product_id,
            image_id: image_id,
            image_name: file_name,
        },

        dataType: "json",
        encode: true,
    }).done(function (data) {
        if (data.success == false) {
            toastr.error(data.message);
        } else {
            toastr.success(data.message);
            // $("#" + input_id).attr("value", data.new_image_id);
            window.location.reload();
            // setTimeout(function() {
            //     window.location = '/my-listing';
            //   }, 1000);
        }
    });
}

// #TODO When close the modal, Clear all data in image Card
function modalClose(id) {
    // $(".dropify-clear").trigger("click");
    $("#" + id)
        .closest(".card")
        .find(".dropify-clear")
        .trigger("click");
    // drEvent.on('dropify.afterClear', function(event, element){
    //     alert('File deleted');
    // });
}

$(document).on("change", ".dropify", function (e) {
    var input_id = $(this).attr("id");

    if (cropper) {
        $image.src = null;
        cropper.destroy(), (cropper = null);
    }

    var files = e.target.files;

    var done = function (url) {
        //$('#cropper-modal').modal('show');
        $image.src = url;
        if ($("#canvas-image").show()) {
            cropperInitialize();
        }
    };

    var reader;
    var file;
    var url;

    if (files && files.length > 0) {
        file = files[0];
        file_name = file.name;

        var re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.webp)$/i;
        if (!re.exec(file_name)) {
            // alert("File extension not supported!");

            $("#profile-change-modal-2").modal("show");
            $("#product-title").text("Invalid Image");
            $("#modal-subtext").text(
                "Supported File types are jpg | jpeg | bmp | gif | png | webp "
            );
            $("#crop-cancel-btn").show();
            $("#close-btn").attr("onclick", "modalClose('" + input_id + "')");
            return;
        }
        if (re.exec(file_name)) {
            if (URL) {
                done(URL.createObjectURL(file));
            } else if (FileReader) {
                reader = new FileReade();
                reder.onload = function (e) {
                    done(reader.result);
                };
                reader.readAsDataURL(file);
            }

            $("#product-title").text("Crop Image");
            $("#modal-subtext").text("");

            $("#profile-change-modal-2").modal("show");
            $("#crop-cancel-btn").show();
            $("#crop-btn").show();

            $("#crop-btn").attr("onclick", "imageCrop('" + input_id + "')");
            $("#close-btn").attr("onclick", "modalClose('" + input_id + "')");
        }
    }
});

$(document).on("change", ".dropify-custom", function (e) {
    var input_id = $(this).attr("id");
    var input = $(this).closest('tr').find('.variation_images_hidden').attr('id');
   // console.log(input);

    var files = e.target.files;

    if (cropper) {
        $image.src = null;
        cropper.destroy(), (cropper = null);
    }

    var files = e.target.files;

    var done = function (url) {
        //$('#cropper-modal').modal('show');
        $image.src = url;
        if ($("#canvas-image").show()) {
            cropperInitialize();
        }
    };

    var reader;
    var file;
    var url;

    if (files && files.length > 0) {
        file = files[0];
        file_name = file.name;

        var re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.webp)$/i;
        if (!re.exec(file_name)) {
            // alert("File extension not supported!");

            $("#profile-change-modal-2").modal("show");
            $("#product-title").text("Invalid Image");
            $("#modal-subtext").text(
                "Supported File types are jpg | jpeg | bmp | gif | png | webp "
            );
            $("#crop-cancel-btn").show();
            $("#close-btn").attr("onclick", "modalClose('" + input_id + "')");
            return;
        }
        if (re.exec(file_name)) {
            if (URL) {
                done(URL.createObjectURL(file));
            } else if (FileReader) {
                reader = new FileReade();
                reder.onload = function (e) {
                    done(reader.result);
                };
                reader.readAsDataURL(file);
            }
           

            $("#profile-change-modal-2").modal("show");
            $("#crop-cancel-btn").show();
            $("#crop-btn").show();

            $("#crop-btn").attr("onclick", "imageCropVariation('" + input_id +"')");
            $("#close-btn").attr("onclick", "modalClose('" + input_id + "')");
        }
    }

});

/*
|--------------------------------------------------------------------------
| Price tab Check Alert function
|--------------------------------------------------------------------------
*/
function priceTabCheck()
{
    toastr.error("You have to Select Product category First");
    return false;
}

function product_attribute(){
    var base_url = window.location.origin;
    $.ajax({
        type: "get",
        url: base_url + "/get-product-attribute-ajax",
        data: {
            _token: token,
        },

        dataType: "json",
        encode: true,
    }).done(function (data) {
        if (data.success == true) {
             attributes = data.data;
        }
    });
}

function product_attribute_value(){
    var base_url = window.location.origin;
    $.ajax({
        type: "get",
        url: base_url + "/get-product-attribute-value-ajax",
        data: {
            _token: token,
        },

        dataType: "json",
        encode: true,
    }).done(function (data) {
        if (data.success == true) {
             attr_values = data.data;
        }
    });
}

function search_attribute(){
    var input, filter, productTxt;
      var content = "";
      input = $("#add_attribute").val();
      filter = input.toUpperCase();
      if(input.length > 2){
        for (i = 0; i < attributes.length; i++) {
          franchiseTxt = attributes[i].name;
          if (franchiseTxt.toUpperCase().indexOf(filter) > -1) {
            if(SelectAttribute != null){
                if(SelectAttribute[i]){
                    if(SelectAttribute[i].id != attributes[i].id){
                        content+= "<a onclick='add_attribute("+i+");' class='btn btn-info btn-xs'><i class='fa fa-plus'></i></a><a onclick='add_attribute("+i+");'>"+franchiseTxt+"</a><br>";
                    }
                }else{
                    content+= "<a onclick='add_attribute("+i+");' class='btn btn-info btn-xs'><i class='fa fa-plus'></i></a><a onclick='add_attribute("+i+");'>"+franchiseTxt+"</a><br>";
                }
            }else{
                content+= "<a onclick='add_attribute("+i+");' class='btn btn-info btn-xs'><i class='fa fa-plus'></i></a><a onclick='add_attribute("+i+");'>"+franchiseTxt+"</a><br>";
            }
          }
        }
      }
      $('#attribute_list').html(content);
  }

      // add row
      function add_attribute(index) {
         if (!attribute_list.includes(index)){
            var attribute_name,html;
            attribute_name = $('#add_attribute').val('');
            $('#attribute_list').html('');
            $("#attributes_added > tbody").append("<tr id='attr_row_"+index+"'><td>"+attributes[index].name+"</td>\
                                                   <td><select id='attr_value_"+index+"' name='attribute_val[]' class='form-control select2' style='width:100%' multiple='multiple'></select></td>\
                                                   <td><a class='btn btn-xs' onclick='removeattribute("+index+");'><i class='fa fa-times' aria-hidden='true'></i></td>\</tr>");

            $('#attr_value_'+index).children().remove().end();
            //$("#add_attribute").removeAttr("required");
            for (var i=0; i < attr_values.length; i++) {
                if (attr_values[i].product_attribute === attributes[index].id) {
                    $('#attr_value_'+index).append(new Option(attr_values[i].value, attr_values[i].id));
                }
            }

            attribute_list.push(index);

            $('#add_attribute').focus();
       }
       $('.select2').select2();
       if(attribute_list.length != 0){
        $('.btn-generate').show();
        $("#generate-variation").removeAttr("disabled","disabled");
        }else{
            $('.btn-generate').hide();
            $("#generate-variation").attr("disabled","disabled");
        }
    }

    function removeattribute(i){
        $('#attr_row_'+i).remove();
        var index = attribute_list.indexOf(i);
        attribute_list.splice(index,1);
        if(attribute_list.length == 0){
            $('.btn-generate').hide();
            $("#generate-variation").attr("disabled","disabled");
            $('.append_required').append('<div class="form-group table_required"><input type="hidden" name="table_required" ></div>');
        }
        add_variations();
      }

      var price;
      var cost;
      var wholesale_price;
      var count = 0;
       function add_variations(){

        price           = document.getElementById("price").value;
        cost            = $("#allocations").val();
        //wholesale_price = document.getElementById("wholesale_price").value;
        //trigger specifications tab if specifications empty
        $('#append_body').html('');
        var attribute=[]; //main attibute array

        $('#attributes_added tbody tr').each(function() {

            var element_select_option = $(this).find('select option');
            var element_select_value  = $(this).find('select').val();

            var text=[];  // child array
            if(element_select_value.length>1){
            for (i = 0; i < element_select_value.length; i++) {
                var value =element_select_option.eq(i).text();
                var x = {text:value,value:element_select_value[i]}
                text.push(x);
            }
            }
            if(text.length>0){
            attribute.push(text);
            }else{
                toastr.error("Please add the attributes first!");
            }
      });

      print_values(attribute,0,"","");
    }

    function print_values(arry,index,base,attribute_values){
        let is_last = (typeof arry[index+1] == 'undefined');
        $("#add_attribute").removeAttr("required");
        arry[index].forEach(function(value) {
           
            if(is_last){
          var row ='<tr>\
                        <td><input type="hidden" class="" name="attr_title[]" value="'+base+''+value.text+'"><input type="hidden" class="" name="attr_val[]" value="'+attribute_values+''+value.value+'"><label type="text" name="attribute" id="attribute">'+base+''+value.text+'</label></td> \
                        <td><input type="number" class="attr_price" name="attr_price[]" onkeyup="allocationCreate(this)" id="attr_price[]" value="'+price+'" required></td>\
                        <td><input type="number" id="attr_marketing[]"   class="attr_marketing" onchange="allocationChenge(this)"  name="attr_marketing[]"  value="" required></td>\
                        <td><input type="number" class="" name="attr_wholesale_price[]" id="attr_wholesale_price[]" value="" required></td>\
                        <td><input type="number"   class="" name="attr_minimum_order_qty[]"   value="" required></td>\
                        <td><input type="text" class="" name="attr_sku[]" id="sku" required></td>\
                        <td><input type="number" class="" name="attr_stock[]" id="stock" required></td>\
                        <td><input type="checkbox" checked> <input type="hidden" name="is_active[]" id="is_active[]" value="1"></td>\
                        <td><input type="file" name="variation_images[]" id="variation_images'+count+'" class="dropify-custom" data-height="80" data-width="100" ><input type="hidden" class="variation_images_hidden" id="variation_images_hidden" name="variation_images_hidden[]" value=""></td>\
                    </tr>'

            $('#append_body').append(row);
            $('.table_required').remove();
            checkbox_change();
            $('.dropify-custom').dropify();
            }else{
              print_values(arry,index+1,base+value.text+"/",attribute_values+value.value+",");
            }
            //console.log(count);
            count ++;
        });
       
    }


    function checkbox_change(){
        $("input[type='checkbox']").on('change', function(){
          if($(this).prop("checked") == true){
            $(this).parent( "td" ).find("input[type='hidden']").val('1');
          }else{
            $(this).parent( "td" ).find("input[type='hidden']").val('0');
          }

        })
      }

    function product_type(){
        $('#product_type').on('change', function() {
            if(this.value == 'variation_product'){
                $('#vert-tabs-variations-tab').show();
                //$('#vert-tabs-variations').show();
                if(SelectAttribute == null){
                    $('.append_required').append('<div class="form-group table_required"><input type="hidden" name="table_required" ></div>');
               // $("#add_attribute").attr("required", "true");
                }

            }else{
                $('#vert-tabs-variations-tab').hide();
                $('.table_required').remove()
                //$('#vert-tabs-variations').hide();
                // $("#add_attribute").removeAttr("required");
            }
          });

    }

    function allocationCreate(ele){
       
        var  price = ele.value;
         var percentage = parseFloat(allocation_percentage);
       
         if (isNaN(price)) {
             price = 0;
         }
         var  VariationminAllocationValue = (price * percentage) / 100;
         $(ele).closest('tr').find('.attr_marketing').val(VariationminAllocationValue);
     }

     function allocationChenge(ele){
        var price = parseFloat($(ele).closest('tr').find('.attr_price').val());
        var attr_allocation = parseFloat(ele.value);
        var percentage = parseFloat(allocation_percentage);
            attrMinAllocationValue = (price * percentage) / 100;
            if (price == '' || price == null) {
                price = 0;
            }

            if (attr_allocation > price) {
                toastr.error("No More than Price!");
                $(ele).val(price);
            }

            if (attrMinAllocationValue > attr_allocation) {
                toastr.error("Allocation value must greater than min Allocation Value!");
                $(ele).val(attrMinAllocationValue);
            }

    }
