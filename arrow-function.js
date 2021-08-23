//Function Declaration in Sum
// function add(num1, num2) {   // sum1
//     const sum = num1 + num2
//     return sum;
// }
function add(num1, num2) {   // sum1
    return num1 + num2
}
// function Expression
const add2 = function add2(num1, num2) {  // sum2
    return num1 + num2;
}

// function Expression (Annonymous) 
const add3 = function /* here is no function called name */(num1, num2) {   // sum3
    return num1 + num2;
}

// ES-6 simple Sum with out Function . its also call by Arrow Function for (=>) this sign.
const add4 = (num1, num2) => num1 + num2      //sum4


const sum1 = add(15, 14);
const sum2 = add2(15, 14);
const sum3 = add3(15, 14);
const sum4 = add4(15, 14);
console.log(sum1, sum2, sum3, sum4);