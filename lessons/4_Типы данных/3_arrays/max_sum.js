"use strict";

function getMaxSubSum(arr){
    let maxSum = 0;
    let prevSum = 0;

    for (let val of arr) {
        prevSum += val;
        if (prevSum < 0) prevSum = 0;
        maxSum = Math.max(prevSum, maxSum)
    }
    return maxSum;
}

console.log(getMaxSubSum([2, -1, -1, 2, 3, -1, -1, -1, -1]));
console.log(getMaxSubSum([-1, -2, -3]));

