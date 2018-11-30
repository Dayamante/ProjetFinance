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
    var reasonInfo = document.getElementById("reasonInfo");
    var reasonRatio = document.getElementById("reasonRatio");
    var reasonAnalyse = document.getElementById("reasonAnalyse");


    var ratio = (0.5 * PER + 0.3 * Dividende + 0.2 * BNPA);
    var analyse = Bollinger * (0.4 * MACD + 0.3 * RSI + 0.3 * Tendances);

    Output = ( 9 * Info + 6 * Bollinger * (0.4 * MACD + 0.3 * RSI + 0.3 * Tendances) + 4 * (0.5 * PER + 0.3 * Dividende + 0.2 * BNPA)  + ( Math.random() * 10 - 5) ) / 220

    obj_v.innerHTML = `<h5 style="font-weight: bold;">Fiabilité : </h5>` + parseInt(Output*100) + `%`;

    if (Output > 0.2) {
        obj_r.innerHTML = `<h5 style="color:green;">You should buy it</h5><iframe src="https://giphy.com/embed/3Zs26J8u7LWdW" width="480" height="382" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>`;
    }else if(Output < -0.2) {
        obj_r.innerHTML = `<h5 style="color:red;">You should sell it</h5><iframe src="https://giphy.com/embed/3XBK3CzTN9A1qnzrvR" width="480" height="377" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>`;
    }else {
        obj_r.innerHTML = `<h5 style="color:blue;">Don't do anything. Just wait until it goes up or down</h5><iframe src="https://giphy.com/embed/xT9IgIHd4IGdyRJJmg" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>`;
    }
    if(Info < -3){
        reasonInfo.innerHTML = `<h5>Because the news of this action isn't good</h5>`;
    }else if(Info > 3){
        reasonInfo.innerHTML = `<h5>Because the news of this action is good</h5>`;
    }else {
        reasonInfo.innerHTML = `<h5>There is no good or bad news on this action</h5>`;
    }
    if(ratio < -3){
        reasonRatio.innerHTML = `<h5>Because the ratio of this action isn't good</h5>`;
    }else if(ratio > 3){
        reasonRatio.innerHTML = `<h5>Because the ratio of this action is good</h5>`;
    }else {
        reasonRatio.innerHTML = `<h5>Because the ratio of this action is medium</h5>`;
    }
    if(analyse < -3){
        reasonAnalyse.innerHTML = `<h5>Because your analyse of this action say it's not the time to buy</h5>`;
    }else if(analyse > 3){
        reasonAnalyse.innerHTML = `<h5>Because your analyse of this action say it's the time to buy</h5>`;
    }else {
        reasonAnalyse.innerHTML = `<h5>Because your analyse of this action is medium</h5>`;
    }

    return false;

}
