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



const d = new Date(12, 25, 2023, 21, 0, 15);

console.log(d);

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


if (hour <= 7 && hour < 15) {
    console.log('its Work time');
}

if (hour >= 3 || hour < 5) {
    console.log('You should be coding');
}