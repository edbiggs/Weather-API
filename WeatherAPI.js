const getWeather = async (e) => {


    const currentLocation = document.getElementById('current-location')

    // ----- WEATHER SPECIFIC CUSTOMIZATIONS (Lists are positional) -----

    // Thunderstorms; Drizzle; Rain; Snow; Atmosphere; Clear; Clouds;
    const weatherGroups = [[200,202,210,211,212,221,230,231,232],[300,301,302,310,311,312,313,,314,321],[500,501,502,503,504,511,520,521,522,531],[600,601,602,611,612,613,615,616,620,621,622],[701,711.721,731,741,751,761,762,771,781],[800],[801,802,803,804]]
    
    const backgroundImages = ['images/thunderstorm.jpg','images/drizzle.jpg','images/rain.jpg','images/snow.jpg','images/haze.jpg','images/clear.jpg','images/clouds.jpg']

    const cardColors = ['images/sun.jpg']
    

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition( async (position)=> {
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;  

            let currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat  + "&lon=" + lon + "&appid=023a5325fe39bd32b15bc9c3e9cc66e9&units=imperial"

            // ----- Forecast data disabled because it requires a paid subscription -----

            // let ForecastUrl = "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=" + lat + "&lon=" + lon + "&appid=" + "023a5325fe39bd32b15bc9c3e9cc66e9&units=imperial"
 

            const resCurrent = await fetch(currentWeatherUrl)
            const dataCurrent = await resCurrent.json()
            // const resForecast = await fetch(ForecastUrl)
            // const dataForecast = await resForecast.json()
            // console.log(dataForecast)

            const currentTemperature = document.getElementById('current-temp')
            const currentFeelsLike = document.getElementById('current-feels-like')
            const currentClouds = document.getElementById('current-clouds')
            const currentHumidity = document.getElementById('current-humidity')

            currentLocation.innerText = dataCurrent.name
            currentTemperature.innerText = dataCurrent.main.temp + '°'
            currentFeelsLike.innerText = "Feels like " + dataCurrent.main.feels_like + '°'
            currentClouds.innerText = dataCurrent.weather[0].description
            currentHumidity.innerText = "Humidity: " + dataCurrent.main.humidity + "%"

            const forecastTemperature = document.getElementById('forecast-temp')
            const forecastFeelsLike = document.getElementById('forecast-feels-like')
            const forecastClouds = document.getElementById('forecast-clouds')
            const forecastHumidity = document.getElementById('forecast-humidity')

            // forecastLocation.innerText = dataForecast.name
            // forecastTemperature.innerText = dataForecast.main.temp + '°'
            // forecastFeelsLike.innerText = "Feels like " + dataForecast.main.feels_like + '°'
            // forecastClouds.innerText = dataForecast.weather[0].description
            // forecastHumidity.innerText = "Humidity: " + dataForecast.main.humidity + "%"


            // ----- WEATHER PAGE CUSTOMIZATION SETTER -----

            const weatherId = dataCurrent.weather[0].id
            console.log(weatherId)
            for (let i = 0; i < weatherGroups.length; i ++) {
                console.log(weatherGroups[i])
                if (weatherGroups[i].includes(weatherId)) {
                    body = document.getElementById('_body')
                    console.log(body)
                    body.style.cssText = `background-image: url(${backgroundImages[i]})`
                    card = document.getElementById('weather-card')
                    header = document.getElementById('card-header')
                    // card.style.cssText = `background-color: red`

                }
                }
            


        },
        (error) => {
             console.log('Error: Geolocation not supported by this browser')
        })
    }
}
getWeather()



