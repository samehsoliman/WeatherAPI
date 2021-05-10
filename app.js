const storage = new Storage();
let currLocation = storage.getLocationLS();

const weather = new Weather(currLocation.city, currLocation.country);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

// get weather
function getWeather(){
    weather.getWeather()
        .then(data => {
            if (data.count === 1) {
                console.log(data);
                ui.displayWeather(data.list)
            } else {
                ui.displayError('City not exist', 'alert alert-danger');
            }
        })
        .catch(err => console.log(err));
}

// change city
document.querySelector('#change-city').addEventListener('click', () => {
    const city = document.querySelector('#newCity').value;
    const country = document.querySelector('#newCountry').value;
    weather.changeCity(city,country);
    getWeather();
    storage.setLocationLS(city, country);
    
    // close the model
    $('#cityModal').modal('hide');
})