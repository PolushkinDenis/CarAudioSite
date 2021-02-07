function checkImpendans(){
    var voltage = document.getElementById("voltage").value;
    var amperage = document.getElementById("amperage").value;
    /*if( (/^[0-9]+$/.test(voltage)) && (/^[0-9]+$/.test(amperage))){*/
    if( ((/^[+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test(voltage)) && ((/^[+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test(amperage))))){
        var pover = voltage * amperage;
        var poverr = pover.toFixed(2);
        document.getElementById("power").innerHTML = poverr;
    }
   // if( (/^[0-9]+$/.test(voltage)) && (/^[0-9]+$/.test(amperage))){
    if( ((/^[+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test(voltage)) && ((/^[+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test(amperage))))){
        if(amperage != 0){
            var om = voltage / amperage;
            var omm = om.toFixed(2);
            document.getElementById("resistance").innerHTML = omm;
        }
        else{
            document.getElementById("resistance").innerHTML = 0;
        }
    }
}
