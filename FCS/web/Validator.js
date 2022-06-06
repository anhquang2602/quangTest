let check = 0;

/*
to check if email is in valid format and notice this form of email to user
*/
function checkMail(nameOfForm) {
    const email = document[nameOfForm].username.value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //email is empty
    if (email == '') {
        // Create dynamic div
        const mailError = document.createElement('div');
        mailError.append('The Email should not be blank.');
        mailError.setAttribute('class', 'alert-danger alert error');
        mailError.setAttribute('role', 'alert');
        //  Append div to parent element
        document.getElementById('divEmail').appendChild(mailError);
        check = 0;
    }
    //email is not in format
    else if (!re.test(String(email).toLowerCase())) {
        // Create dynamic div
        const mailError = document.createElement('div');
        mailError.append('Please input your correct email address.');
        mailError.setAttribute('class', 'alert-danger alert error');
        mailError.setAttribute('role', 'alert');
        // Step 2: Append div to parent element
        document.getElementById('divEmail').appendChild(mailError);
        check = 0;
    }
}

function checkName(nameOfInput,name,nameOfdiv) {
    const username = document.registerForm[nameOfInput].value;
    if (username == '') {
        const usernameError = document.createElement('div');
        usernameError.append('The '+name+ ' should not be blank');
        usernameError.setAttribute('class', 'alert-danger alert error');
        usernameError.setAttribute('role', 'alert');
        // Append div to parent element
        document.getElementById(nameOfdiv).appendChild(usernameError);
        check = 0;
    }
}

function checkPhone() {
    const phone = document.registerForm.phone.value;
    const re = /^[0-9]{3}-[0-9]{3}-[0-9]{7}$/im;
    if (phone == '') {
        const PhoneError = document.createElement('div');
        PhoneError.append('Phone can not empty');
        PhoneError.setAttribute('class', 'alert-danger alert error');
        PhoneError.setAttribute('role', 'alert');
        //  Append div to parent element
        document.getElementById('inputPhone').appendChild(PhoneError);
        check = 0;
    }
    else if (!re.test(String(phone).toLowerCase())) {
        // Step 1: Create dynamic div
        const PhoneError = document.createElement('div');
        PhoneError.append('Please input your correct phone number(###-###-#######).');
        PhoneError.setAttribute('class', 'alert-danger alert error');
        PhoneError.setAttribute('role', 'alert');
        // Step 2: Append div to parent element
        document.getElementById('inputPhone').appendChild(PhoneError);
        check = 0;
    }

}

function checkRepass() {
    const pass = document.registerform.pass.value;
    const repass = document.registerform.repass.value;
    if (pass != repass) {
        const RepassError = document.createElement('div');
        RepassError.append('re-password not match password');
        RepassError.setAttribute('class', 'alert-danger alert error');
        RepassError.setAttribute('role', 'alert');
        //  Append div to parent element
        document.getElementById('divcheckpass').appendChild(RepassError);
        check = 0;
    }
    

}

function checkCountryChoose(){
    const country = document.registerForm.country.value;
    if (country == 'Select country') {
        const ChooseError = document.createElement('div');
        ChooseError.append('Please select your country');
        ChooseError.setAttribute('class', 'alert-danger alert error');
        ChooseError.setAttribute('role', 'alert');
        //  Append div to parent element
        document.getElementById('divCountry').appendChild(ChooseError);
        check = 0;
    }
}

function checkPositionChoose(){
    const position = document.registerForm.position.value;
    if (position == 'Choose desired position') {
        const ChooseError = document.createElement('div');
        ChooseError.append('Please select the position.');
        ChooseError.setAttribute('class', 'alert-danger alert error');
        ChooseError.setAttribute('role', 'alert');
        //  Append div to parent element
        document.getElementById('divPosition').appendChild(ChooseError);
        check = 0;
    }
}



function checkValidatorForRegister() {
    check = 1;
    document.querySelectorAll('div.error').forEach(e => e.remove());
    //checkName('fistName','First Name','yourname1');
    //checkName('lastName','Last Name','yourname2');
    checkMail('registerform');
    checkRepass();
    //checkPhone();
    //checkCountryChoose();
    //checkPositionChoose();
}
    
function checkValidatorForLogin() {
    check = 1;
    document.querySelectorAll('div.error').forEach(e => e.remove());
    //checkName('fistName','First Name','yourname1');
    //checkName('lastName','Last Name','yourname2');
    checkMail('loginform');
    
    //checkPhone();
    //checkCountryChoose();
    //checkPositionChoose();
}

//check if can send inf 
function checkSend() {
    if (check == 1)
        return true;
    else
        return false;
}
    