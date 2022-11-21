// 31-10-2022
// Summing 2 and 3
// console.log(2 + 3);

// undefined
// console.log(undefined)

// null
// console.log(null)

// array
// console.log(["a", "b", "c"])

// object
// console.log({courseName: "JavaScript"})

// function
// function logHello(){
//     console.log("Hello")
// }

// let
// let myFirstVar = "Hello";

// console.log(myFirstVar)

// myFirstVari = "Hello";

// console.log(myFirstVari)

// let animal = 'Orca'
// console.log(animal)

// animal = 'Wolf'
// console.log(animal)

// animal = 'Orca'
// let animal = 'Wolf'

// const
// const COURSE = "JavaScript Development";

// console.log(COURSE)
// COURSE = "Marine Biology";

// var message = "Hello"
// console.log(message)

// In-Class Exercise 1
// Question 1
// Group 1
// let myvalue = "4";
//     let ivalue = Number(myvalue);
//     // console.log(ivalue)
//     console.log("Convert string to number "+ ivalue+ " datatype :"+typeof(ivalue) );

// parseInt('4')

// Question 2
// Group 2
// let myChar = 22;
// typeof(myChar.toString())
// console.log(myChar.toString());

// console.log(22)
// console.log("22")

// console.log("Hello")

// Question 3
// Group 3
// let str1 = "hello";
// console.log("before: " + str1 + " after: " + str1.toUpperCase());

// Question 4
// Group 4
// let myStr = "hello";
// console.log(myStr[1]) // method 1
// console.log(myStr.charAt(1)) // method 2

// Question 5
// Group 5
// a = "Hello "
// b = "World"
// console.log("Hello " + "World")
// console.log("Hello", "World")
// console.log(a.concat(b))

// Question 6
// Group 6
// let num = 4;
// console.log(Math.pow(num,2)) //Method 1
// console.log((num)**2) //Method 2
// console.log(num*num) //Method 3

// Question 7
// Group 7
// let num7 = Math.sqrt(25);
// console.log(num7)

// 5 != 4 // true
// "Hello" != "HELLO" // true
// 15 != 15 // false

// 11 !== 13 // true
// "Salam" !== "salam" // true
// 14 !== 14 // false
// 27 !== "27" // true

// conditions
// synchronous programming language
// execute line one.. wait till that's complete
// execute line two.. wait till that's complete
// execute line three.. wait till that's complete

// asynchronous programming language (parallel/concurrent)
// start line one
// start line two (takes ten seconds to complete)
// start line three

// if (4 === 5){
//     console.log("Math's seems to be working")
// }

// let myName = "Wolf"

// if (myName === "Wolf"){
//     console.log("Math's seems to be working")
// }

// let myName = "Wolf"

// if (myName === "Wolf"){
//     console.log("You are a teacher")
// } else {
//     console.log("You are a student")
// }

// let loggedIn = false

// if (loggedIn === true){
//     console.log("You can visit the site")
// } else {
//     console.log("You have to login first")
// }

// pseudocode
// if the number is greater than 0
//      log "the number if positive"
// else
//      log "the number if negative"

// Joshua
// let myNumber = 0
// if (myNumber > 0){
//     console.log("The number is positive")
// }else{
//     console.log("The number is negative")
// }

0 > 0

// let aNumber = 23.4;
// if (aNumber > 0) {
//     console.log("the number is positive");
// } else {
//     console.log("the number is negative");
// }

// let aNumber = 23.4;
// if (aNumber > 0 aNumber <9) {
//     console.log("the number is positive");
// } else if (aNumber > 0) {
//     console.log("the number is negative");
// } else if (aNumber > 0) {
//     console.log("the number is negative");
// }

// || OR
// let lang  = "CSS"
//
// if (langi === "HTML" || lang === "CSS" || lang === "JS") {
//     // false || false || true
//     // false || true
//     // true
//     console.log("You are talking about front-end language")
// } else {
//     console.log("Its probably back-end language")
// }

// 02-11-2022
// Example 1
// 
// let accountExists = false;
// if (accountExists) {
//     console.log("Account already exists");
// } else {
//     console.log("Please create an account");
// }

// !!true // true
// !false
// true

// !false // true
// !!false // false

// !!'Some string!' // true

// in-class-exercise conditionals
// What number's bigger?
// let numOne = prompt("Key in first number: ");
//     let numTwo = prompt("Key in second number: ");

//     numOne = parseInt(numOne);
//     numTwo = parseInt(numTwo);

//     if (numOne > numTwo){
//         console.log("numOne (" + numOne + ") is bigger than numTwo (" + numTwo + ")");
//     } else if (numOne < numTwo){
//         console.log("numOne (" + numOne + ") is smaller than numTwo (" + numTwo + ")");
//     } else{
//         console.log("numOne (" + numOne + ") is equal to numTwo (" + numTwo + ")");
//     }

    // Driving age
    // Kent
// const minDrivingAge = 16
// let userName
// let userAge

// userName= prompt("What is your name?");
// userAge=prompt("How old are you?");
// validateAge(userAge);

// function validateAge(age){
//     if (age<minDrivingAge) {
//         console.log("Sorry, you can't drive yet!")
//         calAge(age)
//     }else {
//         console.log("Drive into the sunset!")
//     }
// }

// function calAge(age){
//     calAge = minDrivingAge-age
//     console.log("Sorry, you still have "+calAge+" years before you can drive")
// }

5
4
3
2
1

// Example 1
// let count = 0;

// while (count < 10) {
//     console.log(count)
//     count += 1
// }

// I want to count from 3 to 0
// starting point   = 3
// ending point     = 0
// step             = -1

// let num = 3

// while (num >= 0) {
//     console.log(num)
//     // n = n + 1
//     num -= 1
// }

// I want you to make a loop that counts 3 to 8
// waney
// let num = 3
    
//     while (num != 9){
//         console.log(num);
//         num += 1;
//     }

// siew
// let num = 3;
// while (num <= 8) {
//     console.log(num);
//     num += 1;
// }

// for loop
// count from 4 to 1
// starting point = 4
// ending point = 1
// step = -1

// Anis
// let y;
// for (y=4;y>=1;y--){
//     console.log(y);
// }

// count -3 to -11
// Fakri
// let count
// for (count = -3; count >= -11; count += -1) {
//     console.log(count)
// }

// Joshua
// let count
// for (count = -3; count > -12; count += -1) {
//     console.log(count)
// }

// count every third number from 1 to 17
// Joshua
// for (let count = 1; count <= 17; count = count + 3) {
//     console.log(count)
// }

// - JS
// -- - SQL
// # python

// in-class-exercise
// Zafri
// log from 0 to 10
// for (let count = 0; count <= 10; count++) {
//     console.log(count);
// }

// (count++) = (count = count + 1) = (count += 1)

// log 4 to -16
// for (let count = 4; count >= -16; count--) {
//     console.log(count);
// }

// log 8 to 41
// for (let count = 8; count <= 41; count+=4) {
//     console.log(count);
// }

// The Classic Fizzbuzz Program
// for (let count = 0; count <= 100; count++) {
//     if(count % 3 == 0 && count % 5 == 0) console.log(count + " Fizzbuzz");
//     else if(count % 3 == 0) console.log(count + " Fizz");
//     else if(count % 5 == 0) console.log(count + " buzz");
// }