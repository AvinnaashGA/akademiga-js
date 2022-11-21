// let opacity = 1

// function decreaseOpacity() {
//     console.log("Decrease opacity was called")
// }

// decreaseOpacity()

// how can I make this function to run again?
// let opacity = 1

// function decreaseOpacity() {
//     console.log("Decrease opacity was called")
// }

// setTimeout(decreaseOpacity, 2000)

// decreaseOpacity()

// reduce the opacity of an image by 0.005
// function should be executed after 3seconds

// aswad
// let opacity=1
// let imgMe = document.querySelector('img')
// let srcMe = imgMe.src
// function decreaseOpacity(){
//  let currentOpacityAsString = getComputedStyle(imgMe).opacity;
//  let newOpacity = opacity -= 0.05;
//  imgMe.style.opacity = newOpacity;
// }
// const createWatch = setInterval(decreaseOpacity, 3000);

// amir
// let opacity = 0;
// let img = document.querySelector("img");

// function decreaseOpacity(){
//     console.log("Decrease opacity was called");
//     img.style.opacity = opacity + 0.005;// reduce the opacity of an image by 0.005
// }

// // decreaseOpacity();
// setTimeout(decreaseOpacity, 3000); // function should be executed after 3 seconds
// // setInterval(decreaseOpacity, 3000);

// Set up a variable called width and set it to 300
// Select the img the DOM node and change its width style to be 300px using the variable above
// Create a function that increases that width by 5 at a time
//   Update the img's width based on variable "width"
//      Note: You will need to add px at the end (use concatenation or interpolation)
//     Stop calling the function when the width is 600
// Call the function once every 100ms

// Example 1
// let width = 300;
// function increaseWidth () {
//     width += 5
//     console.log(width)
// }

// increaseWidth();

// Example 2
// let width = 300;

// function increaseWidth() {
//   width += 5;
//   console.log(width)
//   setTimeout(increaseWidth, 100)
  
// }

// increaseWidth();

// Example 3
// let img = document.querySelector("img");
// let width = 300;

// function increaseWidth() {
//   width += 5;
//   img.style.width = width + "px" // or 
//   setTimeout(increaseWidth, 100)
// }

// increaseWidth();

// Example 4
// let img = document.querySelector("img");
// let width = 300;

// function increaseWidth() {
//   width += 5;
//   img.style.width = `${width}px` // interpolation 
//   setTimeout(increaseWidth, 100)
// }

// increaseWidth();

// Example 5
// let img = document.querySelector("img");
// let width = 300;

// function increaseWidth() {
//   width += 5;
//   img.style.width = `${width}px`
//      if (width < 600){
//         setTimeout(increaseWidth, 2000)
//      }
  
// }

// increaseWidth();

// Example 6
// let img = document.querySelector("img");
// let width = 300;

// function increaseWidth() {
//   width += 1;
//   img.style.width = `${width}px`
//      if (width < 600){
//         setTimeout(increaseWidth, 1000/60)
//      }
  
// }

// increaseWidth();