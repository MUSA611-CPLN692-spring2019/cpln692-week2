/* =====================
# Lab 1, Part 2 — Function Review
===================== */

/* =====================
Instructions: "Write a function that adds one to the number provided"
Example: "plusOne(2) should return 3"
===================== */

var plusOne = function(n) {return n + 1;};

console.log('plusOne success:', plusOne(99) === 100);

/* =====================
Instructions: "Write a function that adds two to the number provided"
Example: "plusTwo(2) should return 3"
NOTE: Try using the `plusOne` function in the body of your `plusTwo` function
===================== */

var plusTwo = function(n) {return n + 2;};

console.log('plusTwo success:', plusTwo(99) === 101);


/* =====================
Instructions: "Write a function that checks to see if a number is an integer,
if so, it returns even or odd depending on the number, otherwise it returns "error"

===================== */

var oddOrEven = function(n) {
  if (n%2 === 0) {return 'even';}
  else {return 'odd'}
};

console.log('oddOrEven success:', oddOrEven(100) === 'even' && oddOrEven(201) === 'odd');



/* =====================
Instructions: "Write a function, age, that takes a birth year and returns an age in years."
(Let's just assume this person was born January 1 at 12:01 AM)
Example: "age(2000) should return 17"
===================== */

var age = function(yr) {
  return (new Date()).getFullYear() - yr;};

console.log('age success:', age(1971) === 48);

/* =====================
Instructions: "Write a function that returns true for numbers over 9000 and false otherwise"
Example: "over9000(22) should return false"
===================== */

var over9000 = function(n) {return n > 9000};

console.log('over9000 success:', over9000(9001) === true && over9000(12) === false);


/* =====================
Instructions: "Write a function, trump, that checks to see if the input is a string
and if it is, returns the text in all upper case
and if it is not, it prints to the console, "TRY WITH STRINGS"
===================== */


var trump = function(str) {
  if (typeof str === 'string') {
    return str.toUpperCase();
  } else {return "TRY WITH STRINGS";}
};

console.log('trump success:', trump(12) === "TRY WITH STRINGS" && trump('hi') === 'HI');



/* =====================
Instructions: "Write a function which returns the y coordinate of a line given m, x, and b"
Example: "y(0, 0, 0) should return 0; y(1, 1, 1) should return 2"
===================== */


var y = function(m,x,b) {
  return m*x + b;
};

console.log('y success:', y(12, 1, 12) === 24);
