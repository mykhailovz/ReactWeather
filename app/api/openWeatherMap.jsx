var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=556f1165612a9931a6ba1ac989a57283&units=imperial';

// 556f1165612a9931a6ba1ac989a57283
// 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=556f1165612a9931a6ba1ac989a57283&units=imperial'

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.default.get(requestUrl).then(function(res) {
            debugger;
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
};