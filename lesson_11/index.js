'use strict';

function removeKeys1(obj,arr) {
    for (let i = 0; i < arr.length; i+=1){
        delete obj[arr[i]];
    }
    return obj;
}

function removeKeys2(obj, arr2) {
    const obj2 = {};
    const arr3 = Object.keys(obj);

    for (let i = 0; i < arr3.length; i += 1) {
        let bool = false;

        for (let j = 0; j < arr2.length; j += 1) {
            if (arr3[i] === arr2[j]) {
                bool = true;
                break;
            }
        }
        if (!bool) {
            obj2[arr3[i]] = obj[arr3[i]];
        }
    }
    return obj2;
}

const absDiff = a => b => Math.abs(a - b);
