const getWeather = async (e) => {


    const location = document.getElementById('location')
    // Thunderstorms; Drizzle; Rain; Snow; Atmosphere; Clear; Clouds;
    const weatherGroups = [[200,202,210,211,212,221,230,231,232],[300,301,302,310,311,312,313,,314,321],[500,501,502,503,504,511,520,521,522,531],[600,601,602,611,612,613,615,616,620,621,622],[701,711.721,731,741,751,761,762,771,781],[800],[801,802,803,804]]
    
    const backgroundImages = ['images/thunderstorm.jpg','images/drizzle.jpg','images/rain.jpg','images/snow.jpg','images/haze.jpg','images/clear.jpg','images/clouds.jpg']


    

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

            const weatherId = data.weather[0].id
            console.log(weatherId)
            for (let i = 0; i < weatherGroups.length; i ++) {
                console.log(weatherGroups[i])
                if (weatherGroups[i].includes(weatherId)) {
                    console.log(backgroundImages[i])
                    console.log(document.getElementById('_body'))
                    body = document.getElementById('_body')
                    console.log(body)
                    body.style.cssText = `background-image: url(${backgroundImages[i]})`

                }
                }
            

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



