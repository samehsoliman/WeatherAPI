class Storage {
    // get location from storage if exist
    static getCurrentLocLS(){
        let city = 'Toronto',
            country = 'CA';

        if (localStorage.getItem('currLocation')) {
            return (JSON.parse(localStorage.getItem('currLocation')));
        } else {
            return ({
                city,
                country
            })
        }   
    }

    // set loc to storage
    static setCuurentLocLS(loc){
        localStorage.setItem('currLocation', JSON.stringify(loc));
    }
}





























































// class Storage{
//     // get location LS
//     getLocationLS(){
//         let city;
//         let country;

//         if (localStorage.getItem('city')) {
//             city= localStorage.getItem('city');
//         } else {
//             city = 'Toronto';
//         }
//         if (localStorage.getItem('country')) {
//             country = localStorage.getItem('country');
//         } else {
//             country = 'CA';
//         }

//         return {
//             city,
//             country
//         }

//     }

//     // set Location LS
//     setLocationLS(city, country){
//         localStorage.setItem('city', city);
//         localStorage.setItem('country', country);
//     }

// }