/*
|--------------------------------------------------------------------------
| Document ready
|--------------------------------------------------------------------------
*/
$( document ).ready(function() {
    ProfileValidation();
});
/*
|--------------------------------------------------------------------------
| update-vendor-profile
|--------------------------------------------------------------------------
*/
function ProfileValidation(){
    $("#vendor-profile").validate({
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
            element.closest( "div.form-group" ).append(error);
        },
        rules: {
            password_confirmation: {
                required: true,
                equalTo: "#password",
            },
        },
        messages: {
            password_confirmation: {
                required: "This field is required.",
            },
        }

    })
}
