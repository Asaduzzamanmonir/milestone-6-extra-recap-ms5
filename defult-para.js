function addNumber(first, second) {
    //second Option

    /* second = second || 0 */;

    // first Option

    /* if (second == undefined) {
        second = 0;
    } */

    const total = first + second
    return total
}
const result = addNumber(14)
// console.log(result);


function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}

// const userName = fullName('Arun')
// console.log(userName);
const userName = fullName('Arun', 'Karmaker')
console.log(userName);