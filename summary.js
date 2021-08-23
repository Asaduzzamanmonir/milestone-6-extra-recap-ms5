// variable

const userName = 'akbar da great';
const hubby = 'hello'

let name = 'Asaduzzaman'
name = 'AJ Monir'

// default parameter 
function getName(first, last = 'Chowdhury') {
    return first + ' ' + last
}

// Tamplate String
const myName = `my original name is ${name} and my username is ${userName} and a very good people is ${getName('Arun')}`
console.log(myName);


//Arrow Function
const getName2 = (first, last) => first + " " + last
const fiveTimes = x => x * 5
const bigArrowFunc = (x, y, z) => {
    const sum = x + y + z
    const multiply = x * y * z
    const all = sum + multiply
    const total = all / z
    const result = (multiply + all + total)
    return result
}

const array = [2, 5, 9, 4,];
const min = Math.min(...array)