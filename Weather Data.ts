var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

console.log(highTemperatures[0]);
console.log(lowTemperatures[lowTemperatures.length - 1]);

let sumHigh = 0;
for (let i = 0; i < highTemperatures.length; i++) {
    sumHigh += highTemperatures[i];
}
let avgHigh = sumHigh / highTemperatures.length;
console.log(avgHigh);

let sumLow = 0;
for (let i = 0; i < lowTemperatures.length; i++) {
    sumLow += lowTemperatures[i];
}
let avgLow = sumLow / lowTemperatures.length;
console.log(avgLow);

let sortedHigh = [...highTemperatures];
sortedHigh.sort((a, b) => a - b);
let len = sortedHigh.length;
let medianHigh;
if (len % 2 === 0) {
    let mid1 = sortedHigh[len/2];
    let mid2 = sortedHigh[len/2 - 1];
    medianHigh = (mid1 + mid2) / 2;
} else {
    medianHigh = sortedHigh[Math.floor(len/2)];
}
console.log(medianHigh);

let sortedLow = [...lowTemperatures];
sortedLow.sort((a, b) => a - b);
let medianLow;
if (sortedLow.length % 2 === 0) {
    let mid1 = sortedLow[sortedLow.length/2];
    let mid2 = sortedLow[sortedLow.length/2 - 1];
    medianLow = (mid1 + mid2) / 2;
} else {
    medianLow = sortedLow[Math.floor(sortedLow.length/2)];
}
console.log(medianLow);