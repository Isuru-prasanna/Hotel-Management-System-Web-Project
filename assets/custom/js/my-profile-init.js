
    /*
    |--------------------------------------------------------------------------
    | Global Veriables
    |--------------------------------------------------------------------------
    */
    var modal = $('#emailVerifiedModal');


    /*
    |--------------------------------------------------------------------------
    | Document ready
    |--------------------------------------------------------------------------
    */
    $( document ).ready(function() {
        $("#crop-cancel-btn").hide();
        $("#crop-btn").hide();
        getBranches();
        showEmailVerificationModal();
    });



    /*
    |--------------------------------------------------------------------------
    | Email verification Modal
    |--------------------------------------------------------------------------
    */
    function showEmailVerificationModal(){
        if(typeof emailverified != 'undefined' && typeof userType != 'undefined') {
            if(emailverified==0 && userType !='admin' && email_trigger == true){
                if(otpStatus){
                    getOtpHtml();
                    //editEmailHtml();
                }else{
                    sendOtpHtml();
                }
                $(modal).modal('show');
            }else{
                if(phoneverified==0 && userType !='admin'){

                if(phoneOtpStatus){
                    getOtpHtml();

                    }else{
                        phoneSendOtpHtml();
                    }
                }else{
                    getOtpHtml();
                }
                $(modal).modal('show');
            }
        }
    }

    // function showEmailVerificationModal(){
    //     if(typeof emailverified != 'undefined' && typeof userType != 'undefined') {
    //         if(emailverified==0 && userType !='admin'){
    //             if(otpStatus){
    //                 getOtpHtml();
    //                 //editEmailHtml();
    //             }else{
    //                 sendOtpHtml();
    //             }
    //             $(modal).modal('show');
    //         }
    //     }
    // }

    /*
    |--------------------------------------------------------------------------
    | Send Otp Modal
    |--------------------------------------------------------------------------
    */
    function sendOtp(){
         
        $("#btn-email-otp").attr("disabled","disabled");
        $("#btn-phone-otp").attr("disabled","disabled");
        invokeLoader(); 
        setTimeout(emailOtpAjax, 1000);
   
    }

    function emailOtpAjax(){
        $.ajax({
            method:"POST",
            url:"/ajax/send-otp",
            cache:false,
            async: false,
            headers: {
                'X-CSRF-TOKEN': token
            },
            data:{
                "_token": token,

            },
            success:function(data){
                if((data.success == true)){
                    $('.loader-wrapper').remove(); 
                    resendTime = '03:00';
                    sendOtpHtml();
                    email_trigger = true;
                    toastr.success('otp has sent!');
                }else{
                    $('.loader-wrapper').remove(); 
                    editEmailHtml();
                }
            },
            error: function (xhr, status, error) {
                $('.loader-wrapper').remove(); 
                response.success = false;
                response.msg = xhr.statusText;

            }
        });
    }
    /*
    |--------------------------------------------------------------------------
    | Send Otp Modal
    |--------------------------------------------------------------------------
    */
    function phoneSendOtp(){
        $("#btn-email-otp").attr("disabled","disabled");
        $("#btn-phone-otp").attr("disabled","disabled");
        invokeLoader(); 
        setTimeout(smsOtpAjax, 1000);
       
    }

    function  smsOtpAjax(){
        $.ajax({
            method:"POST",
            url:"/ajax/phone-send-otp",
            cache:false,
            async: false,
            headers: {
                'X-CSRF-TOKEN': token
            },
            data:{
                "_token": token,

            },
            success:function(data){
                if((data.success == true)){
                    $('.loader-wrapper').remove(); 
                    resendTime = '03:00';
                    phoneSendOtpHtml();
                    toastr.success('otp has sent!');
                }else{
                    $('.loader-wrapper').remove(); 
                    editPhoneHtml();
                }
            },
            error: function (xhr, status, error) {
                $('.loader-wrapper').remove(); 
                response.success = false;
                response.msg = xhr.statusText;

            }
        });
    }


    /*
    |--------------------------------------------------------------------------
    | Get Otp Html
    |--------------------------------------------------------------------------
    */
    function getOtpHtml(){
        $(modal).find('.modal-footer').html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>');
        // $(modal).find('.modal-body').html('<p>OTP code will be send to `'+userEmail+'`</p>');
        if(phoneverified == 0){
            $(modal).find('.modal-body').append('<button style="margin: 5px;" id="btn-phone-otp" type="button" class="btn btn-outline-info" onclick="phoneSendOtp()">Phone Verification</button>');
        }
        if(emailverified == 0){
            $(modal).find('.modal-body').append('<button style="margin: 5px;" id="btn-email-otp" type="button" class="btn btn-outline-info" onclick="sendOtp()">Email Verification</button>');
        }
        $(modal).find('.modal-body').addClass('text-center');
    }


    /*
    |--------------------------------------------------------------------------
    | Send Otp Html
    |--------------------------------------------------------------------------
    */
    function sendOtpHtml(){
        $(modal).find('.modal-body').removeClass('text-center');
        $(modal).find('form').attr('action', '/email-verified-otp-submit');
        $(modal).find('.modal-footer').html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>');
        $(modal).find('.modal-body').html('<div class="form-group">\
                                            <label for="otp" class="col-form-label">OTP:</label>\
                                            <input type="text" class="form-control" id="otp" name="otp" placeholder="Enter Otp" required>\
                                            <p>OTP code has been sent to `'+userEmail+'`</p>\
                                            <p>Resend OTP in <span id="countdown" class="text-danger" style="font-weight: 600;"></span></p> </div>');
        $(modal).find('.modal-footer').append('<button id="btn-email-submit" type="submit" class="btn btn-dark">Submit</button>');
        setCountdown();
    }

    /*
    |--------------------------------------------------------------------------
    | Send Otp Html
    |--------------------------------------------------------------------------
    */
    function phoneSendOtpHtml(){
        $(modal).find('.modal-body').removeClass('text-center');
        $(modal).find('form').attr('action', '/phone-verified-otp-submit');
        $(modal).find('.modal-footer').html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>');
        $(modal).find('.modal-body').html('<div class="form-group">\
                                            <label for="otp" class="col-form-label">OTP:</label>\
                                            <input type="text" class="form-control" id="otp" name="otp" placeholder="Enter Otp" required>\
                                            </div>\
                                            <p>OTP code has been sent to `'+userPhone+'`</p>\
                                            <p>Resend OTP in <span id="countdown" class="text-danger" style="font-weight: 600;"></span></p>');
        $(modal).find('.modal-footer').append('<button id="btn-email-submit" type="submit" class="btn btn-dark">Submit</button>');
        setCountdown();
    }


    /*
    |--------------------------------------------------------------------------
    | Edit Email Html
    |--------------------------------------------------------------------------
    */
    function editEmailHtml(){
        $(modal).find('.modal-body').removeClass('text-center');
        $(modal).find('form').attr('action', '/auth-user-email-edit-submit');
        $(modal).find('.modal-footer').html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>');
        $(modal).find('.modal-body').html('<div class="form-group">\
                                            <label for="email-address" class="col-form-label">Email:</label>\
                                            <input type="text" class="form-control laxEmail" id="email-address" name="email" placeholder="Enter Email" required>\
                                            <p class="text-primary">Your email address is not valid. Please change email and try again.</p> </div>');
        $(modal).find('.modal-footer').append('<button id="btn-email-submit" type="submit" class="btn btn-dark">Reset</button>');
    }
 /*
    |--------------------------------------------------------------------------
    | Edit phone Html
    |--------------------------------------------------------------------------
    */
    function editPhoneHtml(){
        $(modal).find('.modal-body').removeClass('text-center');
        $(modal).find('form').attr('action', '/auth-user-phone-edit-submit');
        $(modal).find('.modal-footer').html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>');
        $(modal).find('.modal-body').html('<div class="form-group">\
                                            <label for="phone" class="col-form-label">Phone:</label>\
                                            <input type="nomber" class="form-control laxPhone" id="phone" name="phone" placeholder="Enter phone" required>\
                                            </div>\
                                            <p class="text-primary">Your Phone Nomber is not valid. Please change Phone Nomber and try again.</p>');
        $(modal).find('.modal-footer').append('<button id="btn-email-submit" type="submit" class="btn btn-dark">Reset</button>');
    }

    /*
    |--------------------------------------------------------------------------
    | Set Countdown For Resend otp
    |--------------------------------------------------------------------------
    */
    function setCountdown(){

        var interval = setInterval(function() {
            var timer = resendTime.split(':');
            //by parsing integer, I avoid all extra string processing
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            if (minutes < 0) clearInterval(interval);
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            //minutes = (minutes < 10) ?  minutes : minutes;
            $('#countdown').html(minutes + ':' + seconds);
            resendTime = minutes + ':' + seconds;

            if(minutes == 0 && seconds == 00){
                $(modal).find('.form-group').remove();
                getOtpHtml();
            }

        }, 1000);

    }




    /*
    |--------------------------------------------------------------------------
    |Image cropper function
    |--------------------------------------------------------------------------
    */
    var  $model = $('#profile-change-modal');
    var  $image = document.getElementById('canvas-image');
    var  cropper;
    var  num = 0;
    var  file_name = '';


    $(document).on('change', '#img_file', function(e) {

        if(cropper){
            $image.src = null;
            cropper.destroy(),
            cropper = null;
        }

        var files = e.target.files;

        var done = function(url){
            //$('#cropper-modal').modal('show');
            $image.src = url;
            if($('#canvas-image').show()){cropperInitialize();}

        }

        $('#profile-change-modal').on('hidden.bs.modal', function(e) {
            clearlCrop();
        });

        var reader;
        var file;
        var url;

      if(files && files.length>0){
          file = files[0];
          file_name = file.name;
          if(URL){
            done(URL.createObjectURL(file));
          }else if(FileReader){
            reader =  new FileReade();
            reder.onload = function(e){
              done(reader.result);
            }
            reader.readAsDataURL(file);
          }
          $("#crop-cancel-btn").show();
          $("#crop-btn").show();
      }

    });

    function cropperInitialize(){
        if(buttone_id == 'front_end' || buttone_id == 'back_end'){
            cropper = new Cropper($image,{
                dragMode: 'move',
                //aspectRatio: 1,
                autoCropArea: 1,
                restore: false,
                guides: false,
                center: false,
                highlight: false,
                cropBoxMovable: true,
                cropBoxResizable: true,
                toggleDragModeOnDblclick: false,
                //autoCropArea: 1,

                // viewMode: 1,
                // aspectRatio: 1,
                // maxContainerWidth: 100,
                // maxContainerHeight: 100,
                // maxCropBoxWidth: 100,
                // maxCropBoxHeight: 100,
                // maxCanvasHeight:100,
                // maxCanvasWidth:100,
                // movable: true,
                // maxWidth:54,
                 //maxHeight:86
             });
        }else{
            cropper = new Cropper($image,{
                dragMode: 'move',
                aspectRatio:1,
                autoCropArea: 1,
                restore: false,
                guides: false,
                center: false,
                highlight: false,
                cropBoxMovable: false,
                cropBoxResizable: false,
                toggleDragModeOnDblclick: false,
                 // autoCropArea: 1

                // viewMode: 1,
                // aspectRatio: 1,
                // maxContainerWidth: 100,
                // maxContainerHeight: 100,
                // maxCropBoxWidth: 100,
                // maxCropBoxHeight: 100,
                // maxCanvasHeight:100,
                // maxCanvasWidth:100,
                // movable: true,
                // maxWidth:100,
                // maxHeight:100
             });
        }
        //  cropper.initialCanvasData.maxWidth = 100;
        // cropper.initialCanvasData.maxHeight = 100;

        // console.log(cropper);
    }

    var buttone_id = null;
    $("a").click(function() {

      buttone_id = (this.id);
      if(buttone_id == 'profile_image'){
          $('#profile-change-from').attr("action", "/upload-member-profile-image");
          $("#product-title").html("Profile Image Upload");
       }
      if(buttone_id == 'front_end'){
          $('#profile-change-from').attr("action", "/upload-member-nic-front-image");
          $("#product-title").html("NIC Front Image Upload");
       }
       if(buttone_id == 'back_end'){
          $('#profile-change-from').attr("action", "/upload-member-nic-back-image");
          $("#product-title").html("NIC Back Image Upload");
       }
   });

    function clearlCrop(){
        if(cropper){
            $image.src = null;
            cropper.destroy(),
            cropper = null;
        }
        file_name = '';
        $("#img_file" ).val(null);
        $('#canvas-image').hide();
        $("#crop-cancel-btn").hide();
        $("#crop-btn").hide();
    }

    function imageCrop(){

        if($("#img_file").val()){

            canvas = cropper.getCroppedCanvas({
                width:350,
                height:350,
                });

            canvas.toBlob(function(blob){
                url = URL.createObjectURL(blob);
                reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = function(e){
                    var base64data = reader.result;
                    //$('#result-row').append($('<img>').attr('src', base64data));
                   // $('#result-row').append('<div class="col-lg-3"><img src="'+base64data+'"/></div>');

                    $('#result-row').append('<div class="col-lg-12 product-image-cropped" id="product-image-cropped-'+num+'">\
                    <input type="hidden" name="product_image" value="'+base64data+'">\
                    <input type="hidden" name="image_name" value="'+file_name+'">\
                    </div>');
                    invokeLoader();
                    $("#profile-change-from").submit();
                }

            });
        }
        else{
            toastr.error( "image requierd");
        }

    };


    function removeImage(index){
        $('#product-image-cropped-'+index).remove();
        setImageCount();
    }



    function setImageCount(){
        var length = $('.product-image-cropped').length;
        if(length == 0){
            $('#image_count').val('');
        }
        else{
            $('#image_count').val(length);
        }
    }


/*
|--------------------------------------------------------------------------
| Function my profile  action Data
|--------------------------------------------------------------------------
|
*/


    function getBranches(){
        var bankCode = $('select[name="bank_code"]').val();
        if(bankCode != ''){
            $('select[name="branch_code"]').empty();
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "/my-profile-bank-branch-ajax/" + bankCode,
                cache: false,
                success: function (data) {
                    let $bankBranch = $('select[name="branch_code"]');
                    $bankBranch.empty();
                    $bankBranch.append('<option value=" ">Select</option>');
                    $.each(data, function(key,value) {
                        $bankBranch.append('<option value="' + value.branch_code + '">' + value.branch_name + '</option>');
                    });
                    if(branch_code != null){
                        $('select[name="branch_code"]').val(branch_code).trigger("change")
                        branch_code = null;
                    }
                },
            });
        }
    }


      function removeImage(id,image,identify){

   Swal.fire({
    title: 'Are you sure?',
    text: "Do you want Delete?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {

        $.ajax({
            type: "post",
            url: "/remove-nic-ajax",
            headers: {
                'X-CSRF-TOKEN': $('meta[name=token]').attr('content')
            },
            data: {
              "_token"     : token,
              "id"  : id,
              "image"  : image,
              "identify" : identify,
            },
            cache:false,
            success: function(response) {
                if(response.success == true){
                    Swal.fire({
                        title: '',
                        text: response.message,
                        type: "success",
                        icon: 'success',
                    }).then((result) => {
                        if(identify == 'front'){
                            $("#nic-image-cropped-front").hide();
                        }else{
                            $("#nic-image-cropped-back").hide();
                        }
                       //location.reload();
                    });
                }else{
                    Swal.fire(
                        'Oops... image empty. Please try again!',
                        '',
                    'error')
                }

            },

        });

    }
});
}
