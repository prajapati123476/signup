const naame = document.querySelector('#name');
const mobNumber = document.querySelector('#mob');
const email = document.querySelector('#email');
const username = document.querySelector('#uname');
const password = document.querySelector('#pwd');
const cnfPassword = document.querySelector('#cnfpwd');
const form = document.querySelector("#form");
const error = document.querySelector('#error');

function validate() {

    //name valivation

    if (naame.value === '' || naame == null) {
        const nameErrorMsg = document.querySelector('#nameErrorMsg');
        nameErrorMsg.innerHTML = "** Name must be filled!";
        return false;
    }

    if (!isNaN(naame.value)) {
        const nameErrorMsg = document.querySelector('#nameErrorMsg');
        nameErrorMsg.innerHTML = "** Name must have character only!";
        return false;
    }

    //mobile number validation
    if ((mobNumber.value.length < 10) || (mobNumber.value.length > 10)) {
        const mobErrorMsg = document.querySelector('#mobErrorMsg');
        mobErrorMsg.innerHTML = "** Mobile number must be 10 digit!";
        return false;
    }

    //email validation
    if (email.value === '' || email == null) {
        const emailErrorMsg = document.querySelector('#emailErrorMsg');
        emailErrorMsg.innerHTML = "** Email must be filled";
        return false; 
    }


    //username validation
    if ((username.value === '') || (username.value == null)) {
        const unameErrorMsg = document.querySelector('#unameErrorMsg');
        unameErrorMsg.innerHTML = "** Username must be filled";
        return false;
    }

    if ((username.value.length <= 2) || (username.value.length > 20)) {
        const unameErrorMsg = document.querySelector('#unameErrorMsg');
        unameErrorMsg.innerHTML = "** Username length must be between 2 and 20";
        return false;
    }
    //password validation
    if ((password.value == '') || password.value == null ) {
        const pwdErrorMsg = document.querySelector('#pwdErrorMsg');
        pwdErrorMsg.innerHTML = "** password must be filled";
        return false;
    }

    if ((password.value.length <= 5)) {
        //check uppercase, lowercase, and special charter.
        
        const pwdErrorMsg = document.querySelector('#pwdErrorMsg');
        pwdErrorMsg.innerHTML = "** password must contain at least 6 charater!";
        return false;

    }

    // confirm password validation
    if (((cnfPassword.value == '') || (cnfPassword == null)) || ((password.value) !== (cnfPassword.value))) {
        const cnfpwdErrorMsg = document.querySelector('#cnfpwdErrorMsg');
        cnfpwdErrorMsg.innerHTML = "** Confirm password must be filled and same!"
        return false;
    }



    



    

}


