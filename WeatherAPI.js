const getWeather = async (e) => {


    const location = document.getElementById('location')

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition( async (position)=> {
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;  
            let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat  + "&lon=" + lon + "&appid=023a5325fe39bd32b15bc9c3e9cc66e9&units=imperial"
            console.log(url)
            const res = await fetch(url)
            const data = await res.json()
            console.log(url)
            console.log(data)

            const temperature = document.getElementById('temp')
            const feelsLike = document.getElementById('feels-like')
            const clouds = document.getElementById('clouds')
            const humidity = document.getElementById('humidity')

            location.innerText = data.name
            temperature.innerText = data.main.temp + '°'
            feelsLike.innerText = "Feels like " + data.main.feels_like + '°'
            clouds.innerText = data.weather[0].description
            humidity.innerText = "Humidity: " + data.main.humidity + "%"
        },
        (error) => {
             console.log('Error: Geolocation not supported by this browser')
        })
    }
}
getWeather()



