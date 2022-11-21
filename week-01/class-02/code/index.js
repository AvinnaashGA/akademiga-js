// console.log("Hello World")

// let alphabet = ["a", "b", "c"]

// console.log(alphabet[0])

// let arrayWithDataTypes = ["String", undefined, 42, true]

// console.log(arrayWithDataTypes[1])
// console.log(arrayWithDataTypes[3])

// let alpha = ["A", "B", "C"]

// console.log(alpha[0])
// console.log(alpha[1])
// console.log(alpha[2])
// console.log(alpha[3])

// const instruments = [
//     "The Great Stalacpipe Organ",
//     "Stylophone",
//     "Ondes Martenot",
//     "Sharpischord",
//     "Hydraulophone",
//     "Pyrophone"
// ];

// console.log(instruments[3])
// console.log(instruments[5])

// how can I change "Pyrophone" to "Keyboard"
// console.log(instruments[5] = "Keyboard")

// console.log(instruments)
// Access the last element using the length!
// console.log(instruments[instruments.length - 1])
// console.log(instruments[6 - 1])

// const ordinals = [
//     "Zeroeth",
//     "First",
//     "Second",
//     "Third"
// ];

// console.log(ordinals[0])
// console.log(ordinals[1])
// console.log(ordinals[2])
// console.log(ordinals[3])


// wnez
// for (i = 0; i < ordinals.length; i++){
//     console.log(ordinals[i])
// }

// const instruments = [
//     "The Great Stalacpipe Organ",
//     "Stylophone",
//     "Ondes Martenot",
//     "Sharpischord",
//     "Hydraulophone",
//     "Pyrophone"
// ];

// starting point = 0
// ending point = 5 or instruments.length
// step = 1

// less dynamic
// for (let i = 0; i < 6; i += 1) {
//     let currentInstrument = instruments[i]
//     console.log(currentInstrument)
// }

// dynamic
// for (let i = 0; i < instruments.length; i += 1) {
//     let currentInstrument = instruments[i]
//     console.log(currentInstrument)
// }

// const ordinals = [
//     "First",
//     "Second"
//     "Third"
// ];

// push    - add to the end
// pop     - remove from end
// unshift - add to start
// shift   - remove from start

// let myNumbers = [3, 4];
// add the number 5 to the back of the array
// add 2 to the start of the array
// remove the last item
// remove the first item

// myNumbers.push(5)
// myNumbers.unshift(2)
// myNumbers.pop()
// myNumbers.shift()

// console.log(instruments.indexOf("Hydraulophone"))

// let rainbowColors = []
// rainbowColors.push("green","blue","indigo","violet");

// console.log(rainbowColors)

// const bookSeries = {
//     name: "In Search of Lost Time",
//     author: "Marcel Proust",
//     rating: 5,
//     books: [
//     "Swann's Way",
//     "In the Shadow of Young Girls in Flower",
//     "The Guermantes Way",
//     "Sodom and Gomorrah",
//     "The Prisoner",
//     "The Fugitive",
//     "Time Regained"
//     ]
//     };

// // author
// console.log(bookSeries.author)

// // "The Prisoner"
// console.log(bookSeries.books[4])

// const name = bookSeries.name
// const author = bookSeries.author

// // rating
// console.log(bookSeries.rating)

// let name = bookSeries.name
// let rating = bookSeries.rating
// let author = bookSeries.author

// console.log(name, rating, author)

// log out the whole bookSeries array
// for (let i =0; i < bookSeries.books.length; i++){
//     console.log(bookSeries.books[i]);
// }

// console.log(bookSeries.books)

// log out the 4th book
// console.log(bookSeries.books[3])

// let course = {
//     topic: "JavaScript"
// }

// change the topic to be "JavaScript Development"
// console.log(course.topic = "Javascript Development");
// console.log(course);

// change the bookSeries rating to be 10
// console.log(bookSeries.rating = 10)
// console.log(bookSeries)

// let course = {
//     topic: "JavaScript"
// }

// add teacher name : Avi, add teaching asistant : Aiman
// course.teacher = "Avi";
// course.teachingAsst = "Aiman";

// console.log(course)

// add teacher name : Avi, add teaching asistant : Aiman + Iman
// course.teacher = "Avi";
// course.teachingAsst = ["Aiman", "Iman"];

// console.log(course)
// console.log(course.topic)
// console.log(course.name) // undefined


// const explorer = {
//   firstName: "Jack",
//   lastName: "Delta",
//   birth: {
//   day: 11,
//   month: 6,
//   year: 1910
//   }
//   };

// Jack
// console.log(explorer.firstName)

// Delta
// console.log(explorer.lastName)

// year = 1910
// console.log(explorer.birth.year)

// day = 11
// console.log(explorer.birth.day)

// month = 6
// console.log(explorer.birth.month)

// const marxFamily = [
//     { name: "Groucho", birthYear: 1890 },
//     { name: "Harpo", birthYear: 1888 },
//     { name: "Chico", birthYear: 1887 },
//     { name: "Zeppo", birthYear: 1901 },
//     { name: "Gummo", birthYear: 1893 }
//     ];

// console.log(marxFamily[0].name)
// console.log(marxFamily[1].name)
// console.log(marxFamily[2].name)
// console.log(marxFamily[3].name)
// console.log(marxFamily[4].name)

// Joshua
// for (i = 0; i < marxFamily.length; i++){
//     console.log(marxFamily[i].name)
// }

// Chong
// marxFamily.forEach(e => {console.log(e.name)})

// the reading list
// const mybook = [
//     {title:"A TIME TO KILL",author:"JOHN GRISHAM",alreadyRead:false},
//     {title:"ABSALOM, ABSALOM!",author:"WILLIAM FAULKNER",alreadyRead:true},
//     {title:"EAST OF EDEN",author:"JOHN STEINBECK",alreadyRead:false},
   
// ]

// mybook.forEach(e => {
    
//     if (e.alreadyRead){
  
//         console.log("You have already read \""+e.title + "\", by "+  e.author);
//     }else{
//         console.log("You still need to read \""+e.title + "\", by "+  e.author);
//     }


//   })

  // wan
//   const readingList = [
//     {
//         title: "Sapiens", 
//         author: "Yuval Noah Harari",
//         alreadyRead: false
//     },
//     {
//         title: "A Life on Our Planet", 
//         author: "David Attenborough",
//         alreadyRead: true
//     }
// ]

// for (i=0; i < readingList.length; i++){
//     let book = readingList[i].title;
//     let author = readingList[i].author;

//     if(readingList[i].alreadyRead){
//         console.log("You have already read \"" + book + "\", by " + author)
//     } else{
//         console.log("You still need to read \"" + book + "\", by " + author)
//     }
// }

// The Recipe Card
// const recipe = {
//     title: "Ginger, Apple and Banana Smoothie",
//     serves: 2,
//     ingredients: [
//             "- 500ml Milk",
//             "- 2/3 cups of vanilla protein powder",
//             "- 2 tbs rolled oats",
//             "- Pinch of cinnamon",
//             "- 2 cups of baby spinach leaves",
//             "- 2 frozen bananas",
//             "- 2 roughly chopped apples",
//             "- 1/2 avocado",
//             "- 2 tsp fresh ginger",
//             "- 6 ice cubes"
//             ]
//    };

//    console.log(recipe.title)
//    console.log("")
//    console.log("Serves: " + recipe.serves)
//    console.log("")
//    console.log("Ingredients:")
//    console.log("")

//    for(i = 0; i<= recipe.ingredients.length -1; i++){
//     console.log(recipe.ingredients[i]);
//    }

// chong
// let recipe = {
//     title: "Ginger, Apple and Banana Smoothie",
//     numberOfServes: 2,
//     ingredients: [
//         "- 500ml Milk",
//         "- 2/3 cups of vanilla protein powder",
//         "- 2 tbs rolled oats",
//         "- Pinch of cinnamon",
//         "- 2 cups of baby spinach leaves",
//         "- 2 frozen bananas",
//         "- 2 roughly chopped apples",
//         "- 1/2 avocado",
//         "- 2 tsp fresh ginger",
//         "- 6 ice cubes"
//     ]
// }


// console.log(`${recipe.title}\n\nServes: ${recipe.numberOfServes}\n\nIngredients:\n\n${recipe.ingredients.join('\n')}`)

// function sayHello() {
//     console.log("Hello");
//     }

// function add() {
//     console.log(2 + 2);
//     }

// const speak = function() {
//     console.log("Hello");
//     }

// function greet(name){
//     let greeting = "Hello " + name;
//     console.log(greeting)
// }

// greet("Robi")
// greet("Chee")
// greet("Sam")

// Create a function called exclaim
// It receives a parameter - called message
// It logs out message + "!"
// If I provide "hi", it should log "hi!"

// function exclaim(message) {
//   console.log(message + "!");
// }
// exclaim("Hello");

// exclaim("I need to drink more water");

// add
// function add(numOne, numTwo){
//   const solution = numOne + numTwo
//   console.log(solution)
// }

// add(9, 5)

// subtract
// function add(numOne, numTwo){
//   const solution = numOne - numTwo
//   console.log(solution)
// }

// add(5.1, 9.6)

// create a function that multiplies two numbers
// call it multiply
// it should receive two parameters - x and y
// multiple x and y
// log the result

// joshua
// function multiply(x, y){
//   let solution = x * y
//   console.log(solution)
// }

// multiply(3,6)

// function uppercase(str) {
//  const result = str.toUpperCase()
//  return result
// }

// let capitals = uppercase("this is a string")
// console.log(capitals)

// exercise
// driving age

// zafri
// function canDrive(age) {
//   let minAge = 16;
//   if(age < minAge) console.log(`Sorry, you have ${minAge - age} year(s) to wait until you can drive`)
//   else console.log("Drive away!")
// }
// canDrive(parseInt(prompt("Age?"), "16"));

// joshua
// function canDrive(userAge) {
//   if (userAge < 16) {
//       console.log("Sorry, you can't drive yet")
//   } else {
//       console.log("Drive away!")
//   }
// }

// let userAge = 24

// return canDrive(userAge)

// function canDrive(userAge) {
//   if (userAge < 16) {
//       console.log("Sorry, you can't drive yet")
//   } else {
//       console.log("Drive away!")
//   }
// }

// let userAge = 16
// canDrive(userAge)

// shazwan
// const candrive = (num) =>{
//   let diff = 16 - num;
//   let result = (num >= 16 )?"Drive away!":`Sorry, You have ${diff} years to wait until you can drive`
  
//   console.log(result);
// }

// candrive(18);

// Chong
// function verifyDriving(userage){  
//   if (userage<16){
//       return "Sorry, you can\' drive yet \n"+ 
//         "Sorry, you have "+ pluralizeWord("year","years",16-userage)+" to wait until you can drive";
//   }else{
//       return "Sorry, you can\' drive yet"
//   }
// }

// function pluralizeWord(singularWord, pluralWord, count) {
//   return count > 1 ? count+" "+ pluralWord : count+" "+singularWord;
// }

// let iage = prompt("Enter your age","15");
// console.log( verifyDriving(iage));

// the world translator

// shazwan
// let lang = prompt("","Language (Eng/Fr/Kr/My)");

// // Language selection
// const language = (lang) => {
//     let result = (lang.toUpperCase() === "ENG")? "Hello World":(lang.toUpperCase() === "MY")?"Hai Dunia":
//     (lang.toUpperCase() === "FR")?"Bonjour le monde":(lang.toUpperCase() === "KR")?"안녕하세요 세계":"Language not available!";

//     console.log(result);
// }
// language(lang);

// chong
// const lang = [
//   { language: "English", word: "Hello World" },
//   { language: "Malay"  , word: "Hai dunia" },
//   { language: "French" , word: "Bonjour le monde" }
// ];

// let ivalue = prompt("Enter Language [english,malay,french]", "English");

// lang.forEach(e => {
//   if (e.language.toUpperCase()== ivalue.toUpperCase()){
//       console.log("Language : "+e.language +", word : "+e.word);       
//       return;
//   }    
// });

// the age calculator
// zafri
// function calculateAge(birthYear) {
//   const DATE = new Date();
//   let currYear = DATE.getFullYear();
//   let age1 = currYear - birthYear;
//   let age2 = age1 - 1;
//   console.log(`They are either ${age1} or ${age2}`);
// }
// calculateAge(parseInt(prompt("Your Birth Year?", "1993")));

// review

// array - mutable
// const data = ["String", 1, null, undefined, [], {}]

// // console.log(data[0])

// // replace String with STRING
// data[0] = "STRING"

// const letters = ["b", "c"]

// // "a" infront
// letters.unshift("a")

// // "d" end
// letters.push("d")

// // removing first item
// letters.shift()

// // removing last item
// letters.pop()

// for loop
let tweets = [
  "My First Tweet",
  "My Second Tweet",
  "My Third Tweet",
  "My Fourth Tweet"
]

// starting point:   0
// ending condition:  tweets.length - 1 , < 4
// step: += 1

// for (let i = 0; i < tweets.length; i += 1){
//   let currentTweet = tweets[i]
//   console.log(currentTweet)
// }

// objects -- unordered
// array -- ordered

// let course = {
//   name: "JavaScript Development",
//   teacher: "Avi",
//   assistant: "Aiman",
//   numOfHours: 60
// }

// course.name
// add topic (array)
// topics: [JS, React, APIs, AJAX]

// course.topics = ["JS", "React", "APIs", "AJAX"]
// chong
// let blog = [
//   { title: "Blog Heading One", content: "Lorem ipsum", author: "Robi" },
//   { title: "Blog Heading Two", content: "Lorem ipsum", author: "Chong" },
//   { title: "Blog Heading Three", content: "Lorem ipsum", author: "Kogu" },
//   { title: "Blog Heading Four", content: "Lorem ipsum", author: "Fakri" },
// ];

// blog.forEach(e => {console.log(`Tile: ${e.title}, Content: ${e.content}, Written By: ${e.author}`)})

// siew
// let blog = [
//   { title: "Blog Heading One", content: "Lorem ipsum", author: "Tilak" },
//   { title: "Blog Heading Two", content: "Lorem ipsum", author: "Shafiq" },
//   { title: "Blog Heading Three", content: "Lorem ipsum", author: "Nurain" },
//   { title: "Blog Heading Four", content: "Lorem ipsum", author: "Veemelia" },
// ];

// for (i=0; i < blog.length; i++) {
//   console.log("Title of the book is " + blog[i].title + ", content is " + blog[i].content + " & the author is " + blog[i].author)
// }

// // function
// function speak(){
//   console.log("Speaking...")
// }

// // call-site
// speak()

// function greet(name){
//   console.log("Hello " + name + "!")
// }

// greet("Avi")

// divide 2 numbers
// you must return
// zafri
// function divide(x, y) {
//   return x/y;
// }
// console.log(divide(100, 2))

// kogu
// let ans = function dividable(num1, num2){
//   return num1/num2;
// }

// console.log(ans(10,2));

// function divide(x,y){
//   let result = x / y
//   return result
// }

// let divideByTwoPlusTen = divide(10,2) + 10
// console.log(divideByTwoPlusTen)