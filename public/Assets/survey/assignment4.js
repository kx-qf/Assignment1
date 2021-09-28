var text;

function validateProvince() {
    var i = 0;
    var result = 0;
    var Province = document.getElementById("province");
    var errorDiv = document.getElementById("provinceError");
    var Pro = ["QC", "ON" , "NM", "SK", "AB", "BC"];
    try{
        for(i; i<6; i++)
        {
            if(Province.value == Pro[i])
            {
            check++;
            result = 1;
            break;
            }
        }
        if (result == 0)
        {
            throw "Province must be either QC or ON or MN or SK or AB or BC";
        }
        Province.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
    }
    catch (msg){
        errorDiv.style.display = "blcok";
        errorDiv.innerHTML = msg;
        Province.style.background = "rgb(255,233,233)";
    }
}


function validatePostalCode (){
    let pCodeInput = document.getElementById('postal');
    let errorBox= document.getElementById('postalError');
    let pCodePattern = /[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d/;
    try{
        if(pCodePattern.test(pCodeInput.value)==false){
            throw("The postal code must match \"a0a0a0\".");
        }
        errorBox.style.display="none";
        errorBox.innerHTML="";

    }

    catch(msg){
        errorBox.style.display="block";
        errorBox.innerHTML=msg;
    }
}

function validatePassword() {
    var pw1Input = document.getElementById("password");
    var pw2Input = document.getElementById("confirm");
    var errorBox = document.getElementById("passwordError");
    try {
        if (pw1Input!=pw2Input) {
            throw "Passwords should match."
        } if (/.{6,}/.test(pw1Input.value) === false) {
          throw "Password must be at least 6 characters"; 
        } else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
           throw "Passwords must match"; 
        } else if (/[A-Z]/.test(pw1Input.value) === false) {
           throw "Password must contain at least one uppercase letter";
        } else if (/\d/.test(pw1Input.value) === false) {
           throw "Password must contain at least one number";
        } else if (/[!@#_]/.test(pw1Input.value) === false) {
           throw "Password must contain at least one of the following symbols: ! @ # _";
        }
 
       // remove any password error styling and message
       errorBox.style.display = "none";
       errorBox.innerHTML = "";
    }
    catch(msg) {
       // display error message
       errorBox.style.display = "block";
       errorBox.innerHTML = msg;
    }
 }

 function validateAge() {
    var Age = document.getElementById("age");
    var errorDiv = document.getElementById("ageError");
    try {
        if (Age.value < 18) {
            throw "Age must be at least 18 years old";
        }
        Age.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        Age.style.background = "rgb(255,233,233)";
    }
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    emailInput.value = emailInput.value.toLowerCase();
    var errorBox = document.getElementById("emailError");
    var emailPattern = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    try {
        if (emailPattern.test(emailInput.value) === false) {
            throw "Please provide a valid email address"; 
        }
        errorBox.innerHTML = "";
        errorBox.style.display = "none";
    }
    catch(msg) {
       errorBox.innerHTML = msg;
       errorBox.style.display = "block";
       
    }
}
function text(){
    try{
        if(typeof(eval('validateProvince' && 'validateEmail' && 'validateAge' && 'validatePassword' && 'validatePostalCode')) == "function")
        {
            return false;
        }
        else{
            alert("Thanks for registering with our website, your customer record was created successfully.")
        }

    }
    catch(msg){
            return false;
    }
}

function createEventListeners() {
    let pCodeInput = document.getElementById('postal');
    var emailInput = document.getElementById("email");

    pCodeInput.addEventListener('change',validatePostalCode);
    emailInput.addEventListener('change',validateEmail);
    document.getElementById('confirm').addEventListener('change',validatePassword);
    document.getElementById('province').addEventListener('change',validateProvince);
    document.getElementById('age').addEventListener('change',validateAge);
    
}



if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
 } else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
 }



