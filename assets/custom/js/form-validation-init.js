/*
|--------------------------------------------------------------------------
| Document ready
|--------------------------------------------------------------------------
*/
$( document ).ready(function() {
    addListingValidation();
    signinFormValidation();
    signupFormValidation();
    emailVerifiedOtpFormValidation();
    additionalMethod();
});


/*
|--------------------------------------------------------------------------
| signin form validation
|--------------------------------------------------------------------------
*/
function signinFormValidation(){
    $("#login-form").validate({
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
           //error.insertAfter(element)
           element.closest( ".input-group").append(error);
       },
       rules: {
       },
       submitHandler: function(form) {
           invokeLoader();
           form.submit();
    }
   })
}




/*
|--------------------------------------------------------------------------
| Customer Signup form
|--------------------------------------------------------------------------
*/
function signupFormValidation(){
    $("#signup-form").validate({
        ignore: "input[type=hidden]",
        errorClass: "text-danger custom",
        successClass: "text-success",
        highlight: function (element, errorClass) {
            $(element).removeClass(errorClass)
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass)
        },
        errorPlacement: function (error, element) {
            if (element.attr('type') == "checkbox") {
                element.closest("div").removeClass('icheck-primary').addClass('icheck-danger');
                $(element).focus();
            }else{
                element.closest( ".input-group" ).append( error);
            }
        },
        rules: {
            password_confirmation : {
                equalTo : "#password"
            },
            nic : {
                required: true,
                regex:/^[0-9+]{9}[vVxX]{1}$/,
            }
        },
        submitHandler: function (form) {
            invokeLoader();
            form.submit();
        }
    })
}



/*
|--------------------------------------------------------------------------
| addListingValidation method
|--------------------------------------------------------------------------
*/
function addListingValidation(){
    $("#add-listing-form").validate({
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
            // #TODO error placement
            if($(element).hasClass('hidden_method')){
                // console.log('yes');
                //element.closest( "div.col-lg-3" ).append(error);
                // element.next("span").append(error);
                //$("#span_id").append(error);
                //console.log(error);
                error.insertAfter(element);
            }else{
               //error.insertAfter(element)
               element.closest( "div.form-group" ).append(error);
            }
            //error.insertAfter(element)

        },
        invalidHandler: function(e, validator){
            if(validator.errorList.length)
            $('.error-icon').remove();
            $('#vert-tabs-tab a[href="#' + jQuery(validator.errorList[0].element).closest(".tab-pane").attr('id') + '"]').tab('show');
            ///$(validator.errorList).append(' <span id="error-icon"><i class="fas fa-exclamation-triangle" style="color: #b90707;"></i></span>');
            jQuery.each(validator.errorList, function(index, item) {
                // do something with `item` (or `this` is also `item` if you like)
                var tab = $('#vert-tabs-tab a[href="#' + jQuery(validator.errorList[index].element).closest(".tab-pane").attr('id') + '"]');
                jQuery.each(tab, function(ind, itm) {
                    var error_id = $(itm).attr('id');
                    if($('#error-icon-'+error_id).length == 0){
                        $(itm).append(' <span id="error-icon-'+error_id+'" class="error-icon float-right"><i class="fas fa-exclamation-triangle" style="color: #b90707;"></i></span>');
                    }
                });
            });
        },
        rules: {
            title : {
                maxlength:154
            },
            slug : {
                maxlength:154
            },
            meta_title:{
                maxlength:154
            },
            meta_description:{
                maxlength:154
            },
            sku:{
                maxlength:44
            },
            table_required:{
                required: true,
            }
        },
        submitHandler: function (form) {
            invokeLoader();
            form.submit();
        }
    })
}



/*
|--------------------------------------------------------------------------
| email verified otp form
|--------------------------------------------------------------------------
*/
function emailVerifiedOtpFormValidation(){
    $("#email-verified-otp-form").validate({
        ignore: "input[type=hidden]",
        errorClass: "text-danger custom",
        successClass: "text-success",
        highlight: function (element, errorClass) {
            $(element).removeClass(errorClass)
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass)
        },
        errorPlacement: function (error, element) {
            element.closest( ".form-group" ).append( error);
        },
        submitHandler: function (form) {
            invokeLoader();
            form.submit();
        }
    })
}



/*
|--------------------------------------------------------------------------
| Regular expression
|--------------------------------------------------------------------------
*/
function additionalMethod(){

    jQuery.validator.addMethod("username", function(value, element) {
        return this.optional( element ) || /^[0-9]{10}|[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
    }, 'Please enter a valid phone number or valid email');

    jQuery.validator.addMethod("pass", function(value, element) {
        return this.optional( element ) || /^(?=.{5,})/.test( value );
    }, 'Password should be minimum 5 characters.');

    // jQuery.validator.addMethod("pass", function(value, element) {
    //     return this.optional( element ) || /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\d@$!^%*#?&]{5,}$/.test( value );
    // }, 'Password should be minimum 5 characters, at least one uppercase letter and one lowercase letter.');

    jQuery.validator.addMethod("phone", function(value, element) {
        return this.optional( element ) || /^[0-9]{10}$/.test( value );
    }, 'Please enter a valid phone number.');

    jQuery.validator.addMethod("select2", function(value, element) {
        if ($(".select2 option:selected").val() == "default") return false;
        else return true;
    }, 'This field is required.');

    jQuery.validator.addMethod("laxEmail", function(value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
    }, 'Please enter a valid email address.');

    // #TODO add slug validation
    jQuery.validator.addMethod("slug", function(value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional( element ) || /^[a-z0-9/-]+$/.test( value );
    }, 'Please enter a valid slug! remove special characters and spaces');

    // jQuery.validator.addMethod("video-links", function(value, elements) {

    //     for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
    //         if (this.findByName(elements[i].name).length != undefined && this.findByName(elements[i].name).length > 1) {
    //             for (var cnt = 0; cnt < this.findByName(elements[i].name).length; cnt++) {
    //                 this.check(this.findByName(elements[i].name)[cnt]);
    //             }
    //         } else {
    //             this.check(elements[i]);
    //         }
    //     }
    //     return this.valid();
    // }, 'This field is required.');


    // jQuery.validator.addMethod("hidden_method", function(value, element) {
    //     if ($("#parent-category-input").val() == '') return false;
    //     else return true;
    // }, 'This field is required.');

    // jQuery.validator.addMethod("brand", function(value, element) {
    //     // allow any non-whitespace characters as the host part
    //     return this.optional( element ) || /^[a-z0-9/-]+$/.test( value );
    // }, 'This brand name is already added and pending.. ');

    $.validator.addMethod('NICNumber', function (value) { 
        return  /^[0-9]{9}[vVxX]$/.test(value); 
    }, 'Please enter a valid National Identity Card Number.');
    
}


/*
|--------------------------------------------------------------------------
| Invoke Loader
|--------------------------------------------------------------------------
*/
 function invokeLoader(){
    if($('.loader-wrapper').length=='0'){
    var svg = '<div class="loader-wrapper" ><?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)"><g><animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s" repeatCount="indefinite"></animateTransform><path d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20" fill="#bababa"></path></g></g></svg></div>';
    $(svg).appendTo('body');
    }
    // document.addEventListener('contextmenu', event => event.preventDefault());
    // document.onkeydown = function (e) {return false;}
}

/*
|--------------------------------------------------------------------------
| Invoke Loader
|--------------------------------------------------------------------------
*/
 function invokeDatatabeLoader(){
    if($('.loader-wrapper').length=='0'){
    var svg = '<div class="loader-wrapper data-table-loader"><?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)"><g><animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s" repeatCount="indefinite"></animateTransform><path d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20" fill="#bababa"></path></g></g></svg></div>';
    $(svg).appendTo('body');
    }
    // document.addEventListener('contextmenu', event => event.preventDefault());
}

/*
|--------------------------------------------------------------------------
| Remove Loader
|--------------------------------------------------------------------------
*/
function removeLoader(){
    $('.loader-wrapper').remove();
    document.onkeydown = function (e) {return true;}
}



$("#agreeTerms").change(function() {
    var div = $(this).closest("div");
    if($(this).prop('checked')) {
        if($(div).hasClass('icheck-danger')){
            $(div).removeClass('icheck-danger').addClass('icheck-primary');
        }
    }
});









