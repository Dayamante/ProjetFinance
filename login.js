function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Esigelec_Groupe-6" && password == "123"){
        alert ("Login successfully");
        window.location = "action.html"; // Redirecting to other page.
    return false;
    }
}
