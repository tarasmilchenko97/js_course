'use strict';

const arr =[
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, null, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];

let n = 0;
let x = 0;
let y = 0;

function calcNulls(row) {
    // вернет кол-во null в row

    for (const y in arr) {
        for(const x in arr[y]){
            if (arr[y][x] != n){
                n = arr[y][x];

            }
        }
    }
}

console.log(n);

//function main (data) {
//  вернет масив с количествами null-ов в каждом из подмасивов






/*
function toObject(arr = ['a', 'c', 'g']) {
    let obj = {};
    for (let i = 0; i < arr.length; ++i)
        obj[i] = arr[i];
}
    for (let i = 0; i )







// console.log(toObject());
*/
