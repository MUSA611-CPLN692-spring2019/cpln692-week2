/* =====================
# Lab 1, Part 2 — Function Review
===================== */

/* =====================
Instructions: "Write a function that adds one to the number provided"
Example: "plusOne(2) should return 3"
===================== */

var plusOne = function(num) {
  return num + 1;
};

console.log('plusOne success:', plusOne(99) === 100);

/* =====================
Instructions: "Write a function that adds two to the number provided"
Example: "plusTwo(2) should return 3"
NOTE: Try using the `plusOne` function in the body of your `plusTwo` function
===================== */

var plusTwo = function(num) {
  return num + 2;
};

console.log('plusTwo success:', plusTwo(99) === 101);


/* =====================
Instructions: "Write a function that checks to see if a number is an integer,
if so, it returns even or odd depending on the number, otherwise it returns "error"

===================== */

var oddOrEven = function(num) {
  if (num % 2 === 0) {
    return 'even';
  } else if (num % 2 === 1) {
    return 'odd';
  } else return 'error';
};

console.log('oddOrEven success:', oddOrEven(100) === 'even' && oddOrEven(201) === 'odd');


/* =====================
Instructions: "Write a function, age, that takes a birth year and returns an age in years."
(Let's just assume this person was born January 1 at 12:01 AM)
Example: "age(2000) should return 17"
===================== */

var age = function(num) {
  return 2019 - num;
};

console.log('age success:', age(1971) === 48);

/* =====================
Instructions: "Write a function that returns true for numbers over 9000 and false otherwise"
Example: "over9000(22) should return false"
===================== */

var over9000 = function(num) {
  if (num > 9000) {
    return true;
  } else {
    return false;
  }
};

console.log('over9000 success:', over9000(9001) === true && over9000(12) === false);


/* =====================
Instructions: "Write a function, trump, that checks to see if the input is a string
and if it is, returns the text in all upper case
and if it is not, it prints to the console, "TRY WITH STRINGS"
===================== */


var trump = function(num) {
  if (typeof num === 'string') {
    return num.toUpperCase();
  } else {
    return 'TRY WITH STRINGS';
  }
};

console.log('trump success:', trump(12) === "TRY WITH STRINGS" && trump('hi') === 'HI');



/* =====================
Instructions: "Write a function which returns the y coordinate of a line given m, x, and b"
Example: "y(0, 0, 0) should return 0; y(1, 1, 1) should return 2"
===================== */


var y = function(m,x,b) {
  return m * x + b;
};

console.log('y success:', y(12, 1, 12) === 24);
