//Logic and control flow, Ifs, If else, switches.

if (true) {
    console.log('true');
}

if (false) {
    console.log('false');
}

const x = 50;
const y = 40;

if (x > y) {
    console.log(`${x} is greater than ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to ${y}`);
}

//introducing else

if (x <= y) {
    console.log(`${x} is less or equal to ${y}`);
} else {
    console.log(`${x} is NOT less than or equal to ${y}`);
}



const d = new Date(12, 12, 2023, 8, 0, 0);

const hour = d.getHours();

console.log(hour);

if (hour < 12) {
    console.log(`Good morning boss Daniel!!!`);
} else if (hour > 12) {
    console.log(`Good afternood sir!!!`);
}
else {
    console.log(`Having a wonderful rest king ?`);
}


//Nested Ifs

if (hour < 12) {
    console.log(`Good morning boss Daniel!!!`);

    if (hour === 6) {
        console.log('Wake and Pray');
    }
} else if (hour <= 12) {
    console.log(`Good afternood sir!!!`);
}
else {
    console.log(`Having a wonderful rest king ?`);

    if (hour >= 20) {
        console.log('zzzzzzzzz');
    }

}

//having multiple conditions in a single if statemnent

if (hour <= 7 && hour < 15) {
    console.log('its Work time');
}

if (hour >= 3 || hour < 5) {
    console.log('You should be coding');
}

//switches

const da = new Date(2023, 2, 10, 8, 0, 0);

const month = da.getMonth();

console.log(month);

switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('its february');
        break;
    case 3:
        console.log('not jan or feb');
        break;
    default:
        console.log('Closed today');
}


switch (true) {
    case hour < 12:
        console.log('Good morning champ');
        break;
    case hour > 12:
        console.log('Good afternoon champ');
        break;
    
    default:
        console.log('championnnnnnn');
}

//Calculator challenge

//Create a function called `calculator` that takes three parameters: `num1`, `num2` and `operator`. The operator can be `+`, `-`, `*` or `/`. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

// **Example:**

// ```
// calculator(5, 2, '+') // returns 7
// calculator(5, 2, '-') // returns 3
// calculator(5, 2, '*') // returns 10
// calculator(5, 2, '/') // returns 2.5
// calculator(5, 2, '%') // returns an error message

//Using if statements:

// function calculator(num1, num2, operator) {
//     let result;

//     if (operator === '+') {
//         result = num1 + num2;
        
//     } else if (operator === '-') {
//         result = num1 - num2;
        
//     } else if (operator === '*') {
//         result = num1 * num2;
        
//     } else if (operator === '/') {
//             result = num1 / num2;
//         }
        
//     else {
//         console.log('Enter valid operator');
//     }

//     return result;

// }

// console.log(calculator(5,2,'+'));
// console.log(calculator(5,2,'-'));
// console.log(calculator(5,2,'*'));
// console.log(calculator(5,2,'/'));
// console.log(calculator(5,2,'>'));

//Using switch statements

function calculator(num1, num2, operator) {
    let result;
    switch (true) {
        case operator === '+':
            result = num1 + num2;
            break;
        
        case operator === '-':
            result = num1 - num2;
            break;
        
        case operator === '*':
            result = num1 * num2;
            break;
        
        case operator === '/':
            result = num1 / num2;
            break;
    
        default:
            result = 'Error: enter valid operator';
            break;
    }

    return result;
}

console.log(calculator(5,2,'+'));
console.log(calculator(5,2,'-'));
console.log(calculator(5,2,'*'));
console.log(calculator(5,2,'/'));
console.log(calculator(5, 2, '>'));

//Logical Operators

console.log(10 > 20 && 30 > 15 && 40 < 100);

console.log(10 > 20 || 10 > 100 || 100 > 500);

//&& - will return the first falsy value or the last value

let a;

a = 10 && 20;

console.log(a); //gives the last value because no falsy value in it.

a = 10 && 0 && 100;

console.log(a); //this time the result is a falsy value not the last.


const post = ['post one', 'post two'];

post.length > 0 && console.log(post[0]);

//if you are trying to get an item from an array and you dont want to have the result be undefined incase the item you are trying to get from the array is absent then you use the logical statement above to filter it.

//That will provide the item from the array if it is in the array, or not do anything if the item is not there. it is very commonly used in react.


// || - will return the first truthy value or the last value

let b;

b = 10 || 20;
b = 20 || 0 || undefined;
b = 0 || undefined || '' || 0;

console.log(b);

// ?? - returns the right side if the left side is null or undefined.

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 0;
c = '' ?? 10;

console.log(c);

//LOGICAL ASSIGNMENT

// ||= - assigns the right side value only if the left side is falsy.

// &&= - assigns the right side value only if the left side is truthy.

// ??= - assigns the right side value only if the left is null or undefined.

