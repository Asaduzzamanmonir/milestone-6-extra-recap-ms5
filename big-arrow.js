const add2 = (num1, num2) => num1 + num2   // Arrow Function

const add = add2(12, 25)
console.log(add);


// when the paramiter is more than one then we use first bracet in paramiter
const add3 = (num1, num2, num3) => num1 * num2 * num3
const multiply = add3(12, 15, 17)
console.log(multiply);

// one paramiter result---
/* const fiveTimes = (inputID) => inputID * 5
const result = fiveTimes(50)
console.log(result);
 */

// when the paramiter is not more than one then we haave not use the bracket
const fiveTimes = number => number * 5
const output = fiveTimes(50);
console.log(output);


const getName = () => 'Brandon Sam';
const name = getName()
console.log(name);

const doMath = (x, y) => {
    const sum = x + y
    const diff = x - y
    const output = sum * diff
    const over = output * 5
    return over;
}

const total = doMath(9, 6);
console.log(total);