'use strict';

const myAge = 20;

let a = 'Мой возраст ' + myAge;
let b = myAge % 10;
let c = myAge % 100;

if (myAge < 0){
    console.log('Возраст не может быть отрицательным')
} else if (b > 1 && b < 5){
    console.log(a + ' года');
} else if(myAge ===11 || c === 11){
    console.log(a + ' лет');
}else if (b === 1){
    console.log(a + ' год');
}else {
    console.log(a + ' лет');
}

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
console.log('sum = ' + sum/arr1Filtered.length);

