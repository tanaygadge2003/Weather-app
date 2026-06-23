async function getWeather() {

    const location = document.getElementById("locationInput").value;

    if(location === ""){
        alert("Please enter a city name");
        return;
    }

    const response = await fetch(`/weather?location=${location}`);
    const data = await response.json();

    if(data.error){
        alert(data.error.message);
        return;
    }

    document.getElementById("weatherCard").style.display = "block";

    document.getElementById("city").innerText =
        `${data.location.name}, ${data.location.country}`;

    document.getElementById("temp").innerText =
        `${data.current.temp_c} °C`;

    document.getElementById("condition").innerText =
        data.current.condition.text;

    document.getElementById("humidity").innerText =
        `Humidity: ${data.current.humidity}%`;

    document.getElementById("wind").innerText =
        `Wind Speed: ${data.current.wind_kph} km/h`;

    document.getElementById("icon").src =
        "https:" + data.current.condition.icon;
}