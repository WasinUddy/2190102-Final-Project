document.addEventListener('DOMContentLoaded', (event) => {

    // Search button
    const searchButton = document.getElementById('search');
    searchButton.addEventListener('click', () => {
        const zipCode = document.getElementById('zip').value;

        // Fetch weather data
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},TH&appid=fe93eb04b1573567c607d9987ca75260`)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => console.log(error));
    })
})

function displayWeather(data) {
    const weatherEmbed = document.getElementById('weather-embed');

    weatherEmbed.style.display = 'flex';

    // Clear previous weather data
    weatherEmbed.innerHTML = '';

    if (data.weather && data.main && data.name && data.coord) {
        // Create elements for weather data
        const locationName = document.createElement('h2');
        locationName.textContent = `${data.name}, Lat ${data.coord.lat}, Lon ${data.coord.lon}`;

        const temp = document.createElement('div');
        temp.className = 'temperature';
        temp.textContent = `${Math.floor(data.main.temp - 273)}°C`;

        const weatherCondition = document.createElement('div');
        weatherCondition.className = 'weather-condition';
        weatherCondition.textContent = data.weather[0].main;

        const icon = document.createElement('span');
        icon.className = "material-symbols-outlined weather-icon";
        icon.style.fontSize = "64px"; // Larger icon size

        // Choose an icon based on the weather condition
        switch (data.weather[0].main.toLowerCase()) {
            case 'clear':
                icon.textContent = 'wb_sunny';
                break;
            case 'clouds':
                icon.textContent = 'cloud';
                break;
            case 'rain':
                icon.textContent = 'umbrella';
                break;
            case 'snow':
                icon.textContent = 'ac_unit';
                break;
            default:
                icon.textContent = 'wb_cloudy';
        }

        // Append elements to the weather embed container
        weatherEmbed.appendChild(icon);
        weatherEmbed.appendChild(weatherCondition); // Weather condition is now below the icon
        weatherEmbed.appendChild(temp);
        weatherEmbed.appendChild(locationName);
    } else {
        weatherEmbed.textContent = 'Weather information not available.';
    }
}
