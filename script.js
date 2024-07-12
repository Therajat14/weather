

const APIKey = 'eab14b926e7a6ab0673a60686b699900';
let cityName = "london";// document.querySelector("input");



const searchBox = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");
const weatherImage = document.querySelector(".weathericon");
const weatherDescription = document.querySelector(".weatherDescription");

function getWeather(cityName = "new york", APIKey = "eab14b926e7a6ab0673a60686b699900") {
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`;

    console.log(searchBtn);
    console.log(searchBox);

    console.log(APIURL);
    async function checkWeather() {
        const response = await fetch(APIURL);
        var weatherData = response.json();
        return weatherData;

    }

    checkWeather().then((weatherData) => {
        console.log(weatherData);
        document.querySelector(".cityName").textContent = weatherData.name + ", " + weatherData.sys.country;
        document.querySelector(".temp").textContent = Math.floor(weatherData.main.temp) + "°C";
        document.querySelector(".humidity").textContent = weatherData.main.humidity + "%";
        document.querySelector(".Wind").textContent = Math.floor(weatherData.wind.speed * 3.6) + "km/h";
        let iconCode = weatherData.weather[0].icon;

        // Ensure the icon is for the day theme
        if (iconCode.endsWith('n')) {
            iconCode = iconCode.replace('n', 'd');
        }

        const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherImage.src = iconURL;
        weatherDescription.textContent = weatherData.weather[0].main;

    }).catch(() => alert("Invalid City Name"));
}

// console.log(searchBox.value);

searchBtn.addEventListener('click', () => {
    cityName = searchBox.value;
    getWeather(cityName);


})

getWeather();