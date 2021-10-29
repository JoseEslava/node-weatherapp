const request = require('request')

const forecast = (city, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5fd5a04855a35b4d163b3aaf9da136d4&query=' + city

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location!', undefined)
        }     
        else {
            callback(undefined, 'Local time is ' + response.body.location.localtime + '. Clima ' + response.body.current.weather_descriptions[0] + '. Temperatura actual: ' + response.body.current.temperature + ' grados. Temperatura en el exterior: ' + response.body.current.feelslike + ' grados')
        }
    })
}

module.exports = forecast