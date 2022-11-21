// when the button is clicked, log "the button was clicked"
// create a button tag in .html
// let btn = document.querySelector("button");
// function onClick() {
//   console.log("The button was clicked");
// }
// btn.addEventListener("click", onClick);

// create a button to toggle themes
// if its light it must dark
// if its dark it must light

// aswad
// const subheading = document.querySelector("button");
// function listenToButtonClick() {
//     console.log('The button was clicked');
//     if (document.body.style.backgroundColor == "salmon") {
//         document.body.style.backgroundColor = "lime";
//     } else {
//         document.body.style.backgroundColor = "salmon";
//     }
//     console.log('The button was clicked' + document.body.style.backgroundColor);
// }
// subheading.addEventListener("click", listenToButtonClick);

// me
// let theme = "light";

// let themeButton = document.querySelector(".theme");

// function themeClick() {
//   if (theme === "light") {
//     theme = "dark";
//     document.body.style.color = "white";
//     document.body.style.background = "black";
//   } else {
//     theme = "light";
//     document.body.style.color = "black";
//     document.body.style.background = "white";
//   }
// }

// themeButton.addEventListener("click", themeClick);


// start with a clickCount of 0
// Anytime the button is clicked with the class of click-count is clicked
//  Increment clickCount by 1
//  Change the HTML of a p tag to be "Number of clicks: 1"

// kogu
// let num = 0;
// let disMsg = "Number of click : ";
// let clickCount = document.createElement("p");
// clickCount.innerText = disMsg + num;

// document.body.appendChild(clickCount);

// let buttonClick = document.querySelector(".click-count");

// buttonClick.addEventListener("click", onClickBtnCount);
// function onClickBtnCount() {
//     num += 1;
//     document.querySelector("p").innerText = disMsg + num;;
// }

// me
// let clickCount = 0;
// let clickCountButton = document.querySelector(".click-count");
// let paragraph = document.querySelector("p");

// function showClickCount() {
// let newHTML = `Number of clicks: ${clickCount}`; // Interpolation
// paragraph.innerHTML = newHTML;
// }

// function increment() {
//   clickCount += 1;
//   showClickCount();
// }
// clickCountButton.addEventListener("click", increment);

// make the decrement button work! when it is clicked, subtract 1 from
// clickCount and update the paragraph tag

