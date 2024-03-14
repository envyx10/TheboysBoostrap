const email = document.getElementById('email') //getter
const password = document.getElementById('password')

let correcto = true; // no puede ser constante xq no varia

//PATERNS
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //email
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,15})/; // password



function validacion(event){
    console.log("adasd")
    event.preventDefault(); 


    // VALIDACION MAIL
    if(email.value == "" || !validateEmail(email.value)) {

        document.getElementById('emailHelp').style.visibility = "visible" ;
        email.style.border="1px solid red"
        correcto = false

    } 

    // VALIDACION PASSWORD
    if(password.value == "" || (!validatePassword(password.value) && !(password.length>=8 && password.length<=15))) {

        document.getElementById('passwordHelp').style.visibility="visible";
        password.style.border="1px solid red";
        correcto=false
        
    }

    return correcto;
    
}

//FUNCIONES

function resetear(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgreen"; // Corrected: borderColor and added unit
}

function validateEmail(email) {
    return emailRegex.test(email);
}

function validatePassword(password) {
    return passwordRegex.test(password);
}

//Funciones para ventana pop up del Login 
function myPopUp1() { 
    var popup = document.getElementById("myPopup"); 
    popup.classList.toggle("show"); 
} 
 
