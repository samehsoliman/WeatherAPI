class UI {
    // display weather
    displayWeather(weather){
        console.log(weather);
        document.querySelector('#w-location').textContent = weather.name + ' - ' + weather.sys.country;
        document.querySelector('#w-desc').textContent = weather.weather[0].main;
        document.querySelector('#w-temp').textContent = Math.round(weather.main.temp) + ' C';
        document.querySelector('#w-icon').setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);

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

































































// class UI {
//     constructor(){
//         this.city = document.querySelector('#w-city');
//         this.desc = document.querySelector('#w-desc');
//         this.temp = document.querySelector('#w-temp');
//         this.icon = document.querySelector('#w-icon');
//         this.min = document.querySelector('#w-min');
//         this.max = document.querySelector('#w-max');
//         this.feelsLike = document.querySelector('#w-feels-like');
//         this.humidty = document.querySelector('#w-humidty');
//         this.pressure = document.querySelector('#w-pressure');

        
//     }

//     // display weather
//     displayWeather(weather){
//         this.city.textContent = weather[0].name + ' - ' + weather[0].sys.country; 
//         this.desc.textContent = weather[0].weather[0].main
//         this.temp.textContent = Math.round(weather[0].main.temp) + ' C';
//         this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].weather[0].icon}@2x.png`);
//         this.min.textContent = 'Min: ' + Math.round(weather[0].main.temp_min) + ' C';
//         this.max.textContent = 'Max: ' + Math.round(weather[0].main.temp_max) + ' C';
//         this.feelsLike.textContent = 'Feels Like: ' + Math.round(weather[0].main.feels_like) + ' C';
//         this.humidty.textContent = 'Humidty: ' + weather[0].main.humidity + ' C';
//         this.pressure.textContent = 'Pressure: ' + weather[0].main.pressure + ' C';

//     }

//     // display error alert
//     displayError(msg, className) {
//         const div = document.createElement('div');
//         div.className = className;
//         div.appendChild(document.createTextNode(msg));
//         const parentElement = document.querySelector('#parentElement');
//         const myElement = document.querySelector('#w-city');
//         parentElement.insertBefore(div,myElement);

//         setTimeout(()=>{
//             div.remove();
//         },2000)
//     }

// }