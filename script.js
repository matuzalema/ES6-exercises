// ===================1==================

const x = 'Hello ';
const y = 'World!';

console.log(`${x + y}`);

// ===================2==================

const multiply = (a=1, b=1) => console.log(`${a*b}`);
multiply(2, 5);
multiply(6, 6);
multiply(5);

// ===================3==================
const average = (...args) => args.reduce((previous, current) => (previous + current))/args.length;
  
console.log(average(2, 4, 3)); //3
console.log(average(1, 3, 6, 6)) //4;

// ===================4==================

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

// ===================5==================
let firstName, lastName;
let data = [1, 4, 'Iwona', false, 'Nowak'];
[, , firstName, , lastName]=data;

console.log(firstName, lastName); 