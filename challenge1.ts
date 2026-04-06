var todaysWeather = {
    temperature: {
        high: 55,
        low: 32
    },
    conditions: "sunny",
    astronomy: {
        sunrise: "7:43 AM",
        sunset: "5:09 PM"
    }
};

console.log(todaysWeather.temperature.high);
console.log(todaysWeather.temperature.low);

console.log(todaysWeather.conditions);

console.log(todaysWeather.astronomy.sunrise);

console.log(`Today's high will be ${todaysWeather.temperature.high}°F, low ${todaysWeather.temperature.low}°F, with ${todaysWeather.conditions} conditions. Sunrise at ${todaysWeather.astronomy.sunrise} and sunset at ${todaysWeather.astronomy.sunset}.`);