function validateName(){
    let uname = document.getElementById("name").value;
    let nameVarify = document.getElementById("name-varifiy");
    let regName = /^[a-zA-Z ]+$/i;

    if(!regName.test(uname) || uname.length==0){
        nameVarify.innerHTML= "Invalid name !";
        nameVarify.style.fontSize= "1rem"
        nameVarify.style.color= "red"
        return false;
    }
    else{
        nameVarify.innerHTML= "\u2713";
        nameVarify.style.fontSize= "1rem"
        nameVarify.style.color= "#90f109"
        return true;
    }
}

function validatePhone(){
    let phone = document.getElementById("phone").value;
    let phoneVarify = document.getElementById("phone-varifiy");
    let regPhone= /^[0-9+-\. ]+$/;

    if(regPhone.test(phone)){
        phoneVarify.innerHTML= "\u2713";
        phoneVarify.style.fontSize= "1rem"
        phoneVarify.style.color= "#90f109"
        return true;
    }
    else{
        phoneVarify.innerHTML= "Invalid phone number !";
        phoneVarify.style.fontSize= "1rem"
        phoneVarify.style.color= "red"
        return false;
    }
}

function validateEmail(){
    let email = document.getElementById("email").value;
    let emailVarify = document.getElementById("email-varifiy");
    let regMail = /^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/;

    if(!regMail.test(email) || email.length==0){
        emailVarify.innerHTML= "Invalid email !";
        emailVarify.style.fontSize= "1rem"
        emailVarify.style.color= "red"
        return false;
    }
    else{
        emailVarify.innerHTML= "\u2713";
        emailVarify.style.fontSize= "1rem"
        emailVarify.style.color= "#90f109"
        return true;
    }
}

function validateMessage(){
    let message = document.getElementById("message").value;
    let messageVarify = document.getElementById("message-varifiy");
    if(message.length==0){
        messageVarify.innerHTML= "Please enter your message !";
        messageVarify.style.fontSize= "1rem"
        messageVarify.style.color= "red"
        return false;
    }
    else {
        return true
    }
   
}

function validateAll(){
    validateName();
    validatePhone();
    validateEmail();
    validateMessage();
    if(validateName() && validatePhone() && validateEmail() && validateMessage()){
        return true;
    }
    else{
        return false;
    }
}

