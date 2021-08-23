const numbers = [25, 35, 99, 85];
// console.log(numbers);
console.log(...numbers);
// const maxNum = Math.max(23,25,45,85,75)
// const max = Math.max(...numbers)
// console.log(max);

const numbers2 = [22, ...numbers, 88]
numbers.push(55);
console.log(numbers);
console.log(numbers2);