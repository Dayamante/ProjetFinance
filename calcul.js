function result() {

    var action = document.getElementById("action").value;
    var Info = document.getElementById("info").value;
    var MACD = document.getElementById("macd").value;
    var RSI = document.getElementById("rsi").value;
    var Bollinger = document.getElementById("bollinger").value;
    var Tendances = document.getElementById("tendances").value;
    var PER = document.getElementById("per").value;
    var Dividende = document.getElementById("dividende").value;
    var BNPA = document.getElementById("bnpa").value;
    
    var Output;


    var obj_v = document.getElementById("value");
    var obj_r = document.getElementById("result");





    Output = 9 * Info + 6 * (0.4 * MACD + 0.2 * RSI + 0.2 * Bollinger + 0.2 * Tendances) + 4 * (0.5 * PER + 0.3 * Dividende + 0.2 * BNPA)

    alert(obj.innerText);
    obj_v.innerText = Output;

    if (Output > 0) {
        obj_r.innerText = "You should buy it"
    } else {
        obj_r.innerText = "You shouldn't buy it"
    }
    
    return false;

}