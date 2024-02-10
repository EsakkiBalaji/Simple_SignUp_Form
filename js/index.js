
function signfunction() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var passcode = document.getElementById("passcode").value;
    var cpasscode = document.getElementById("cpasscode").value;
    var checkbox = document.getElementById("checker").value;

    if(name == ""){
        document.getElementById("name").style = "border : 1px solid red;";
        document.getElementById("nameer").innerHTML = "Please Enter Your Name.";
    } 
    else if((/[0-9]/.test(name))){
        document.getElementById("name").style = "border : 1px solid red;";
        document.getElementById("nameer").innerHTML = "Enter Name Without Numbers";
    }
    else {
        document.getElementById("name").style = "border : 1px solid green;";  
        document.getElementById("nameer").innerHTML = ""; 
    }
    if(email == ""){
        document.getElementById("email").style = "border : 1px solid red;";
        document.getElementById("mailer").innerHTML = "Please Enter Your Email.";
    }
    else if((!email.includes("@"))){
        document.getElementById("email").style = "border : 1px solid red;";
        document.getElementById("mailer").innerHTML = "Please Enter Your Valid Email.";
    }
    else {
        document.getElementById("email").style = "border : 1px solid green;";  
        document.getElementById("mailer").innerHTML = "";  
    }
    if(passcode == ""){
        document.getElementById("passcode").style = "border : 1px solid red;";
        document.getElementById("passer").innerHTML = "Please Create Your New Password.";
    }
    else if((!(/[~!@#$%^&*()_+]/.test(passcode)) || passcode.length < 8)){
        document.getElementById("passcode").style = "border : 1px solid red";
        document.getElementById("passer").innerHTML = "Password must contain 8 characters.";
        document.getElementById("passer").innerHTML = ""; 
    }
    else {
        document.getElementById("passcode").style = "border : 1px solid green;"; 
        document.getElementById("passer").innerHTML = "";   
    }
    if(cpasscode == ""){
        document.getElementById("cpasscode").style = "border : 1px solid red;";
        document.getElementById("cpasser").innerHTML = "Please Re-Enter Password.";
    }
    else if(passcode !== cpasscode){
        document.getElementById("cpasscode").style = "border : 1px solid red;";
        document.getElementById("cpasser").innerHTML = "Please Enter Same Password.";
    }
    else {
        document.getElementById("cpasscode").style = "border : 1px solid green;";   
        document.getElementById("cpasser").innerHTML = ""; 
    }

}

function boxcheck() {
    var checkbox = document.getElementById("checkbox1");
     if (checkbox.checked == false){
        document.getElementById("checker").innerHTML = "Please Check the box to Proceed.";   
    }
    else{
        document.getElementById("checker").innerHTML = ""; 
    }
   }



