// variable
var deposit = 400;

// Condition
if (deposit < 500) {

}
else if (deposit > 200) {

}
else if (deposit == 400) {

}
else if (deposit != 500) {

}
else if (deposit >= 300) {

}
else if (deposit <= 500) {

}
else {

}

//array 
const numbers = [45, 52, 65, 85, 98, 5, 2, 5, 36, 1, 5, 12, 4, 14];
const number = numbers.length;
numbers.push(111)
numbers.pop();
numbers[5] = 555;  // change
//included in there
if (numbers.indexOf(222) != -1) {

}

if (numbers.includes(222)) {

}

// Loop

for (const number of numbers) {

}

//function
function getNumber(first, second) {
    const name = first + ' ' + second
    console.log(name);
}
getNumber('first', 'second')

// Object

const bottle = { color: 'yellow', hold: 'water', price: '$50' }