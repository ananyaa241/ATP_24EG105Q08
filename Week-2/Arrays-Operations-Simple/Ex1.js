// //Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28/

const temperatures = [32, 35, 28, 40, 38, 30, 42];
temperatures.filter(temp => temp > 35).forEach(temp => console.log(temp));
const fahren = temperatures.map(temp => (temp * 9/5) + 32);
console.log(fahren);
const averageTemp = temperatures.reduce((acc, temp) => acc + temp, 0) / temperatures.length;
console.log("Average Temperature:", averageTemp);
const above40 = temperatures.find(temp => temp > 40);
console.log("First Temperature above 40:", above40);
const indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of Temperature 28:", indexOf28);
