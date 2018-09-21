'use strict';

const myAge = 20;

let a = 'Мой возраст ' + myAge;
let b = myAge % 10;
let c = myAge % 100;

if (myAge < 0){
    console.log('Возраст не может быть отрицательным')
}else if(c > 10 && c < 15){
    console.log(a + ' лет');
}else if (b > 1 && b < 5){
    console.log(a + ' года');
}else if (b === 1){
    console.log(a + ' год');
}else {
    console.log(a + ' лет');
}


// max, min, avg, negative, not a number

let arr1 = [2,
    24,
    'taras',
    -5,
    0,
    {},
    [],
    -42,
    48,
    'Milchenko'];

let arr1Filtered = [];


// max

for (let i = 0;i<arr1.length;i+=1){
    if (arr1[i]>0) {
        arr1Filtered[arr1Filtered.length] = arr1[i];
    }
}

let max =0;
for (let i =0; i < arr1Filtered.length; i+=1) {
    if (max < arr1Filtered[i]){
        max = arr1Filtered[i];
    }
}


// min

let min = Infinity;
for (let i =0; i < arr1.length; i+=1) {
    if (min > arr1[i]){
        min = arr1[i];
    }
}


// avg

for (let i = 0;i<arr1.length;i+=1){
    if (arr1[i]>0) {
        arr1Filtered[arr1Filtered.length] = arr1[i];
    }
}

let sum = 0;

for (let i = 0; i<arr1Filtered.length; i+=1){
    sum += arr1Filtered[i];
}
let avg = sum/arr1Filtered.length;


// negative

let arr1Negative = [];

for (let i = 0;i<arr1.length;i+=1){
    if (arr1[i]<0) {
        arr1Negative[arr1Negative.length] = arr1[i];
    }
}

let negative = arr1Negative.length;

// not a number

let p = 0;

for (let i = 0; i < arr1.length; i += 1) {
    if (typeof arr1[i] === typeof 1){
        sum +=arr1[i];
        p+=1;
    }
}

let g = arr1.length - p;

let obj = {max:max,
            min:min,
            avg:avg,
            negative:negative,
            ['not a number']:g
};

console.log(obj);