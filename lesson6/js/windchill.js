  function getWindChill(){
    tempF = document.getElementById('tempF');
    var tF = parseInt(document.getElementById("tempF").innerHTML);
    var wS = parseInt(document.getElementById("windSpeed").innerHTML);
    if (tempF > 50 || windSpeed < 3){
        document.getElementById("windchill").innerHTML = "N/A";}
    else {        
        var wC = 35.74 + (0.6215 * tF) - (35.75 * wS**0.16) + (0.4275 * tF * wS**0.16);
        document.getElementById("windchill").innerHTML = wC.toFixed(2) + ' °F';
    }    
}
document.onload = getWindChill();