"use strict";
const n1 = document.getElementById('num1');
const n2 = document.getElementById('num2');
const button = document.querySelector('button');
const numarray = [];
const strungarray = [];
// function addnumber(num1 :number,num2 :number){
// return num1 +num2
// }
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + " " + num2;
    }
    else {
        return +num1 + +num2;
    }
}
// console.log(addnumber(1,2));
// console.log(addnumber('1','2'));
function printarray(resultObj) {
    console.log(resultObj.val);
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    const num1 = n1.value;
    const num2 = n2.value;
    const result = add(+num1, +num2);
    numarray.push(result);
    const stringresult = add(num1, num2);
    strungarray.push(stringresult);
    printarray({ val: result, timestap: new Date() });
    console.log(numarray);
    console.log(strungarray);
});
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
promise.then((res) => {
    console.log(res);
});
