$("#formdata").validate({
    rules: {
        name: {
            required: true,
            maxlength: 50,
        },
        phone: {
            required: true,
            maxlength: 10,
            Number: true,
        },
        email: {
            required: true,
            email: true,
        },
        address: {
            required: true,
            maxlength: 50,
        },
        password: {
            required: true,
            maxlength: 50,
        },
        confirm: {
            required: true,
            equalTo: "#password",
        },
    },
    messages: {
        name: {
            required:("#n_Name").innerHTML = "Your name is not ok",
        },
        phone: {
            required: "Please enter phone No !",
        },
        email: {
            required: "please enter email",
        },
        address: {
            required: "Please enter Address",
        },
        password: {
            required: "Please enter password",
            
        },
        confirm: {
            required: "please enter confirm password !",
    
        },
    },
   });
