class Weather {
    constructor(){
        this.appId = '25d6df8753ec8f3b0f5a68f9f339a0be';
    }

    // make http call to weather api
    async getWeather(loc){
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${loc.city},${loc.country}&units=metric&appid=${this.appId}`);
        const respData = await resp.json();
        return respData;
    }
}

