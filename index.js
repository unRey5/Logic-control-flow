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

function calculator(num1, num2, operator) {
    let result;

    if (operator === '+') {
        result = num1 + num2;
        
    } else if (operator === '-') {
        result = num1 - num2;
        
    } else if (operator === '*') {
        result = num1 * num2;
        
    } else if (operator === '/') {
            result = num1 / num2;
        }
        
    else {
        console.log('Enter valid operator');
    }

    return result;

}

console.log(calculator(5,2,'+'));
console.log(calculator(5,2,'-'));
console.log(calculator(5,2,'*'));
console.log(calculator(5,2,'/'));
console.log(calculator(5,2,'>'));

// function calculator(num1, num2, operator) {
//     let result;
//     switch (true) {
//         case operator === '+':
//             result = num1 + num2;
//             break;
        
//         case operator === '-':
//             result = num1 - num2;
//             break;
        
//         case operator === '*':
//             result = num1 * num2;
//             break;
        
//         case operator === '/':
//             result = num1 / num2;
//             break;
    
//         default:
//             result = 'Error: enter valid operator';
//             break;
//     }

//     return result;
// }

// console.log(calculator(5,2,'+'));
// console.log(calculator(5,2,'-'));
// console.log(calculator(5,2,'*'));
// console.log(calculator(5,2,'/'));
// console.log(calculator(5,2,'>'));