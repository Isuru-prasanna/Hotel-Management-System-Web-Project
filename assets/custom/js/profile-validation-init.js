/*
|--------------------------------------------------------------------------
| Document ready
|--------------------------------------------------------------------------
*/
$( document ).ready(function() {
    profileValidation();
    passwordValidation();
    updateProfileValidation();
});

/*
|--------------------------------------------------------------------------
| edit member profile bank
|--------------------------------------------------------------------------
*/
function profileValidation(){
    $("#update-vendor-profile-bank").validate({
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
/*
|--------------------------------------------------------------------------
| edit-auth-vendor-password
|--------------------------------------------------------------------------
*/
function passwordValidation(){
    $("#edit_auth_vendor_password").validate({
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
        rules: {
            password_confirmation: {
                required: true,
                equalTo: "#password",
            },
        },
        // messages: {
        //     password_confirmation: {
        //         required: true,
        //     },
        // }

    })
}

/*
|--------------------------------------------------------------------------
| update-vendor-profile
|--------------------------------------------------------------------------
*/
function updateProfileValidation(){
    $("#update-vendor-profile").validate({
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




