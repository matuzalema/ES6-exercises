'use strict';

// ===================1==================

var x = 'Hello ';
var y = 'World!';

console.log('' + (x + y));

// ===================2==================

var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log('' + a * b);
};
multiply(2, 5);
multiply(6, 6);
multiply(5);

// ===================3==================
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (previous, current) {
    return previous + current;
  }) / args.length;
};

console.log(average(2, 4, 3)); //3
console.log(average(1, 3, 6, 6)); //4;

// ===================4==================

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

// ===================5==================
var firstName = void 0,
    lastName = void 0;
var data = [1, 4, 'Iwona', false, 'Nowak'];
firstName = data[2];
lastName = data[4];


console.log(firstName, lastName);
