class UI {
    // display weather
    displayWeather(weather){
        console.log(weather);
        document.querySelector('#w-location').textContent = weather.name + ' - ' + weather.sys.country;
        document.querySelector('#w-desc').textContent = weather.weather[0].main;
        document.querySelector('#w-temp').textContent = Math.round(weather.main.temp) + ' C';
        document.querySelector('#w-icon').setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);

        document.querySelector('#w-min').textContent = 'Min temp: ' + Math.round(weather.main.temp_min) + ' C';
        document.querySelector('#w-max').textContent = 'Max temp: ' + Math.round(weather.main.temp_max) + ' C';
        document.querySelector('#w-feel-like').textContent = 'Feels like: ' + Math.round(weather.main.feels_like) + ' C';
        document.querySelector('#w-humidty').textContent = 'Humidty: ' + weather.main.humidity;
        document.querySelector('#w-pressure').textContent = 'Pressure: ' + weather.main.pressure;
    }


    // display error alert
    displayError(msg, className) {
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));
        const parentElement = document.querySelector('#parentElement');
        const beforeElement = document.querySelector('#w-location');
        parentElement.insertBefore(div,beforeElement);

        setTimeout(()=>{
            div.remove();
        },2000)
    }    
}

