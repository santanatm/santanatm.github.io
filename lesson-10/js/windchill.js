function getWindChill()
{
    var currentCondition = parseFloat(document.getElementById('currentCondition').innerHTML);
    var currentWindSpeed = parseFloat(document.getElementById('currentWindSpeed').innerHTML);
    var windchill = document.getElementById('windchill');

    if (currentCondition > 50 || currentWindSpeed < 3) {
        windchill.innerHTML = "N/A";
    }else{
        calculateWindchill(currentCondition,currentWindSpeed);
    }
}

function calculateWindchill(currentCondition,currentWindSpeed)
{
    var result = 35.74 + (0.6215 * currentCondition) - (35.75 * Math.pow(currentWindSpeed,0.16)) + (0.4275 * currentCondition * Math.pow(currentWindSpeed,0.16));
    windchill.innerHTML = parseFloat(result.toFixed(2));
}