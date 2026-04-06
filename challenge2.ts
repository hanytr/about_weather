var weatherForecast = [
 {
  day: "Today",
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
 },
 {
  day: "Saturday",
  temperature: {
    high: 50,
    low: 29
   },
  conditions: "cloudy",
  astronomy: {
    sunrise: "7:44 AM",
    sunset: "5:08 PM"
  }
 },
 {
  day: "Sunday",
  temperature: {
    high: 47,
    low: 35
   },
  conditions: "chance of rain",
  astronomy: {
    sunrise: "7:45 AM",
    sunset: "5:07 PM"
  }
 }
]

console.log(weatherForecast[0].conditions);

console.log(weatherForecast[1].temperature.high);
console.log(weatherForecast[1].astronomy.sunrise);

console.log(weatherForecast[2].conditions);
console.log(weatherForecast[2].astronomy.sunset);

let sunday = weatherForecast[2];
let sentence = `The high on Sunday will be ${sunday.temperature.high} and the low will be ${sunday.temperature.low}. We're predicting a ${sunday.conditions}. The sun will rise at ${sunday.astronomy.sunrise} and set at ${sunday.astronomy.sunset}.`;

console.log(sentence);