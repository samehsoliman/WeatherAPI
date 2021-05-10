class Weather {
    constructor(city, country){
        this.city = city;
        this.country = country;
        this.appId = '25d6df8753ec8f3b0f5a68f9f339a0be';
    }

    // get weather api
    async getWeather() {
        const resp = await fetch (`http://api.openweathermap.org/data/2.5/find?q=${this.city},${this.country}&units=metric&appid=${this.appId}`);

        const respData = await resp.json();
        return respData;
    }

    // change city
    changeCity(city, country){
        this.city = city;
        this.country = country;
    }

}