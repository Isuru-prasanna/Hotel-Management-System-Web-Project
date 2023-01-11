function NameValidation() {
    j_Name = document.getElementById("Name");
    var js_Name = /^[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+$/;

    if (j_Name.value === "") {
        document.getElementById("n_Name").innerHTML = "Please insert Name";
        alert("Please enter first name and last name with space");
        document.getElementById("n_Name").style.color = "red";
    } else if (j_Name.value.match(js_Name)) {
        document.getElementById("n_Name").innerHTML = "Your name ok";
        document.getElementById("n_Name").style.color = "Green";
    } else {
        document.getElementById("n_Name").innerHTML = "Your name is not ok";
        alert("Please enter first name and last name with space");
        document.getElementById("n_Name").style.color = "red";
    }
}
function Phonevalidation() {
    j_phone = document.getElementById("Phone");
    js_phone = /^[0-9]{10}$/;

    if (j_phone.value === "") {
        document.getElementById("n_phone").innerHTML = "Please insert your phone number";
        document.getElementById("n_phone").style.color = "red";
    } else if (j_phone.value.match(js_phone)) {
        document.getElementById("n_phone").innerHTML = "Your phone number is ok";
        document.getElementById("n_phone").style.color = "Green";
    } else {
        document.getElementById("n_phone").innerHTML = "Phone Number must have 10 digits";
        alert("Please enter first name and last name with space");
        document.getElementById("n_phone").style.color = "red";
    }
}
function emailvalidation() {
    j_Email = document.getElementById("Email");
    var js_Email = /^[a-z]+[0-9]*[@][a-z]+[.][a-z]{2,3}$/;
    if (j_Email.value === "") {
        document.getElementById("Send").innerHTML = js_Email;
        document.getElementById("n_email").innerHTML = "Please enter the Email address";
        document.getElementById("n_email").style.color = "red";
    } else {
        if (j_Email.value.match(js_Email)) {
            document.getElementById("n_email").innerHTML = "Email is ok";
            document.getElementById("n_email").style.color = "Green";
        } else  {
            document.getElementById("n_email").innerHTML = "Incorrect Email Address";
            document.getElementById("n_email").style.color = "red";
        }
    }
}
// function PasswordValidation() {
//     j_Password = document.getElementById("Password");
//     var js_Password = /^[A-Z]+[a-z]+[1-9]{10}$/;
//     if (j_Password.value === "") {
//         document.getElementById("n_password").innerHTML = "Please enter password";
//         document.getElementById("n_password").style.color = "red";
//     } else {
//         if (j_Password.value.match(js_Password)) {
//             document.getElementById("n_password").innerHTML = "password is ok";
//             document.getElementById("n_password").style.color = "Green";
//         } else {
//             document.getElementById("n_password").innerHTML = "errors examples=MyDog8legsty";
//             document.getElementById("n_password").style.color = "red";
//         }
//     }
// }
// function AddressValidation(){
//     j_Address = document.getElementById("Address");
//     var js_Address = /^$/;
//     if(j_Address.value === ""){
//         document.getElementById("n_address").innerHTML = "Please enter Address";
//         document.getElementById("n_address").style.color = "red";
//     }else{
//         if(j_Address.value.match(js_Address)){
//             document.getElementById("n_address").innerHTML = "Address is ok";
//             document.getElementById("n_address").style.color = "Green";
//         }else{
//             document.getElementById("n_address").innerHTML = "Invalid";
//             document.getElementById("n_address").style = "red";
//         }
//     }
// }