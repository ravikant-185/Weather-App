document.getElementById('search').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'b30045d64eab4e12d38d44189ea074a6'; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          document.getElementById('cityName').textContent = data.name;
          document.getElementById('description').textContent = data.weather[0].description;
          document.getElementById('temperature').textContent = data.main.temp;
          document.getElementById('humidity').textContent = data.main.humidity;
          document.getElementById('windSpeed').textContent = data.wind.speed;
  
          document.getElementById('weatherInfo').style.display = 'block';
        } else {
          alert('City not found. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error fetching the weather data:', error);
      });
  });
  