function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Esigelec_Groupe-6" && password == "Diplodocus"){
        alert ("Login successfully");
        window.location = "action.html"; // Redirecting to other page.
    return false;
    }
}

function forget(){
    var forget = document.getElementById("forget");
    forget.innerHTML = `<h6>Maxime's favorite Dinosaurus</h6>`;
}
