function hello(name){
    return(`hello ${name}`);
}

function sqFeetToAcres(sqFeet) {
    return sqFeet / 43560;
}

function mowLawn(width, length, rate) {
    const area = width * length;
    return area / rate;
}

function airQuality(aqi) {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Very Unhealthy";
    return "Hazardous";
}

function yeeHa(n) {
    if (n % 3 === 0 && n % 7 === 0) return "Yee Ha";
    if (n % 3 === 0) return "Yee";
    if (n % 7 === 0) return "Ha";
    return "Nada";
}

function slope(x1, y1, x2, y2) {
    return (y2 - y1) / (x2 - x1);
}

export { hello, sqFeetToAcres, mowLawn, airQuality, yeeHa, slope };
