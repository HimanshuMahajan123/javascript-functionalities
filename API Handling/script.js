document.addEventListener('DOMContentLoaded' , () => {

    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "dea28b2a2aa73387f65c5c320cb47d79"; 

    cityInput.addEventListener('keydown', async (e) => {
        if(e.key === 'Enter'){
            const city = cityInput.value.trim();
            if(city === "") return;

            try {
                const data = await fetchWeatherData(city);
                displayWeatherData(data);
                
            } catch (error) {
                showError();
            }
        }
    })

    getWeatherBtn.addEventListener('click' , async () => {

        const city = cityInput.value.trim();
        if(city === "") return;

        try {
            const data = await fetchWeatherData(city);
            displayWeatherData(data);
            
        } catch (error) {
            showError();
        }

    })

    

    async function fetchWeatherData(city){
        //get the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        
        if(!response.ok){
            throw new Error("city not found")
        }
        const data = response.json();
        return data;
    }

    function displayWeatherData(data){
        //display the data;
        cityNameDisplay.textContent = data.name
        temperatureDisplay.textContent = `${data.main.temp}°C`
        descriptionDisplay.textContent = data.weather[0].description

        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }

    function showError(){
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }
})