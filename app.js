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

