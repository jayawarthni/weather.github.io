const apiKey = "4871900c6444743e51c85bacf4a46507"; // Replace with your OpenWeatherMap API key
const getWeatherButton = document.getElementById('get-weather');
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weather-info');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

// Function to fetch weather data
async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        
        if (data.cod === '404') {
            alert('City not found');
        } else {
            displayWeather(data);
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Function to display weather data
function displayWeather(data) {
    cityName.innerText = `${data.name}, ${data.sys.country}`;
    temperature.innerText = `Temperature: ${data.main.temp}°C`;
    description.innerText = `Description: ${data.weather[0].description}`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    windSpeed.innerText = `Wind Speed: ${data.wind.speed} m/s`;
    
    weatherInfo.style.display = 'block';
}

// Event listener to get weather data when button is clicked
getWeatherButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
      document.getElementById('weather-info').style.display="block";
        getWeather(city);
    } else {
      document.getElementById('weather-info').style.display="none";
        alert("Please enter a city name");
    }
});
