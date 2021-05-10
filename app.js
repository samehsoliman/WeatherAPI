const weather = new Weather;
const ui = new UI;


document.addEventListener('DOMContentLoaded', function(e){
    let currLocation = Storage.getCurrentLocLS();
    console.log(currLocation);
    displayCurrentWeather(currLocation);
 
})

function displayCurrentWeather(currLocation){
    weather.getWeather(currLocation)
    .then(data => {            
        if (data.count === 1) {
            // response success
            ui.displayWeather(data.list[0]);
        } else {
            // display alert
            ui.displayError('Country not exist', 'alert alert-danger')
        }
    })
}


document.querySelector('#changeLoc').addEventListener('click', function(){
    let newLoc = {
        city : document.querySelector('#city').value,
        country : document.querySelector('#country').value
    }

    displayCurrentWeather(newLoc);
    Storage.setCuurentLocLS(newLoc);

    console.log(newLoc);
    $('#locModal').modal('hide');

});


























































// const storage = new Storage();
// let currLocation = storage.getLocationLS();

// const weather = new Weather(currLocation.city, currLocation.country);
// const ui = new UI();

// document.addEventListener('DOMContentLoaded', getWeather);

// // get weather
// function getWeather(){
//     weather.getWeather()
//         .then(data => {
//             if (data.count === 1) {
//                 console.log(data);
//                 ui.displayWeather(data.list)
//             } else {
//                 ui.displayError('City not exist', 'alert alert-danger');
//             }
//         })
//         .catch(err => ui.displayError(err, 'alert alert-danger'));
// }

// // change city
// document.querySelector('#change-city').addEventListener('click', () => {
//     const city = document.querySelector('#newCity').value;
//     const country = document.querySelector('#newCountry').value;
//     weather.changeCity(city,country);
//     getWeather();
//     storage.setLocationLS(city, country);
    
//     // close the model
//     $('#cityModal').modal('hide');
// })










