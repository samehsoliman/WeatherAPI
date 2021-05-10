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

