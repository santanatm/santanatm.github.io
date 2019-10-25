function calculateWindChill()
{
    var temperature = parseFloat(document.getElementById("temperature").innerHTML);
    var windSpeed = parseFloat(document.getElementById("windspeed").innerHTML);
    if (temperature > 50 || windSpeed < 3)
    {
        document.getElementById("windchill").innerHTML = "N/A";
    }
    else
    {
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        document.getElementById("windchill").innerHTML = windChill.toFixed(2) + "° F";
    }    
}
window.onload = calculateWindChill();