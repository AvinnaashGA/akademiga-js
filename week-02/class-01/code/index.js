// // // let heading = document.querySelector("h1")

// // // // heading.innerHTML = "Something else"
// // // // heading.innerHTML = "Something else!!!"

// // // // create a variable called subheading
// // // // through the DOM and find h2
// // // let subheading = document.querySelector("h2")

// // // // subheading.innerHTML = "Something else"

// // // // create a variable called "paragraph" by searching
// // // // through DOM and find p
// // // let paragraph = document.querySelector("p")

// // // console.log(heading, subheading, paragraph)

// // // // create a variable called "listItem" by searching
// // // // through DOM and find li
// // // let listItem = document.querySelector("li")

// // let heading = document.querySelector("h1")
// // let subheading = document.querySelector("h2")
// // let paragraph = document.querySelector("p")
// // let listItem = document.querySelector("li")
// // let anchor = document.querySelector(".container a")
// // let allListItems = document.querySelectorAll("li")
// // let allParagraph = document.querySelectorAll("p")

// // // the DOM Detective - inclass exercise

// // // The "Find Your Course" button in the nav
// // let findYourCourse = document.querySelector(".navi_menu .highlight a");

// // // The heading that says "Learning Today, Leading Tomorrow"
// // let h1Heading = document.querySelector("h1")

// // // All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
// // let domNodeList = document.querySelectorAll(".navi_menu_dropdown_nested-dropdown");

// // // The amount of campuses around the world
// // let noOfCampuses = document.querySelector('a[href="/locations"] div[class="facts_list_item_quantity"]')
// // noOfCampuses.innerHTML

// // // The number of instructors
// // let noOfInstructors = document.querySelectorAll(".facts_list_item_quantity")[2]
// // noOfInstructors.innerHTML

// // innerHTML vs innerText 
// // let subheading = document.querySelector("h2")
// // console.log(subheading.innerText)
// // console.log(subheading.innerHTML)

// // innerText -- returns all text contained by an element and all its child elements.
// // innerHtml -- returns all text, including html tags, that is contained by an element

// // subheading.innerText = "Changed by JS"
// // subheading.innerHTML = "Changed by JS"

// // subheading.innerText = "<u> Changed </u> by JS"
// // subheading.innerHTML = "<u> Changed </u> by JS"

// // subheading.innerHTML = "BEFORE" + subheading.innerHTML

// // let image = document.querySelector("img")
// // console.log(image)

// // console.log(image.innerText)

// // let currentSrc = image.getAttribute("src")

// // let currentHref = anchor.getAttribute("href")

// // how to get "id"?
// // let currentId = anchor.getAttribute("id")

// // let anchor = document.querySelector(".container a")
// // anchor.setAttribute("href", "https://google.com")
// // anchor.setAttribute("id", "google")

// // change text "this link" to "Google!"
// // anchor.innerHTML="Google!"

// // let input = document.querySelector("input")
// // let currentValue = input.value
// // console.log(currentValue);

// let heading = document.querySelector("h1")
// let headingStyles = getComputedStyle(heading)
// console.log(headingStyles)

// // change the font of the text to be 100
// heading.style.fontSize = "100px"

// // change the color of the text to red
// heading.style.color = "red"

// // change the text-decoration to be underlined
// heading.style.textDecoration = "underline"

// // italic
// heading.style.fontStyle = "italic"

// // uppercase
// heading.style.textTransform = "uppercase"

// // change the image's width to be "200px"
// let image = document.querySelector("img")
// image.style.width = "200px"

// // change the image's border to be "10px solid blue"
// image.style.border = "10px solid blue"

// // Working with CSSOM
// // 1. Find the Google logo and store it in a variable using DOM traversal
// let logo = document.querySelector(".lnXdpd")

// // 2. Save the current src attribute into a variable
// // Alex
// let image = document.querySelectorAll("img")
// let srcImage = image[1].src
// image[1].src = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
// 'https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'
// image[1].srcset = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
// 'https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'

// // 3. Modify the source of the logo IMG so that it's a Yahoo logo instead
// // zafri
// let gugelLogo = document.querySelector(".lnXdpd");
// gugelLogo.srcset = "https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png";

// // 4. Find the Google search button and store it in a variable.
// // way shearn
// search = document.querySelector(".FPdoLc.lJ9FBc .gNO89b")

// // 5. Modify the text of the button so that it says "Yahooo!" instead
// // aswad
// let btnMe = document.querySelector('input.gNO89b')

// // shazwan
// search = document.querySelector(".FPdoLc.lJ9FBc .gNO89b")
// search.value = "Yahoo!";

// creating own HTML via JS
// let myParagraph = document.createElement("p")
// myParagraph.innerText = "CREATED WITH JS"
// nothing happens

// document.body.appendChild(myParagraph)
// append.child = adds DOM nodes to the end of body tag

// add before h1
// let heading = document.querySelector("h1")
// document.body.insertBefore(myParagraph, heading)

// create h3
// set the text to be "Also created by JS"
// set the following styles;
//  font-size to be "30px"
//  color to be "green"
// add it before the h2 on the page

// robi
// let heading2 = document.querySelector("h2")
// let myParagraph3 = document.createElement("h3")
// myParagraph3.innerText = "Also created by JS"
// myParagraph3.style.fontSize = "30px";
// myParagraph3.style.color = "green";

// document.body.insertBefore(myParagraph3, heading2);

// events
// function onClick(){
//     console.log("The page was clicked")
// }

// onClick()

// let heading = document.querySelector("h1")
// // console.log(heading)

// function onClick(){
//     console.log("The page was clicked")
// }

// heading.addEventListener('click', onClick)

// select h2 using querySelector and save it as subheading
// create a function that logs "The h2 was clicked"
//      call this function subHeadingClicked
// Anytime the subheading is clicked, call the function subHeadingClicked

// let subHeading = document.querySelector("h2")

// function subHeadingClicked () {
//     console.log("The h2 was clicked")
// }

// subHeading.addEventListener('click', subHeadingClicked)

// select the input DOM node using query selector
// create a functon that logs "The user typed something"
// when the "keypress" event takes place on the input of DOM node, run the function

// siew
// let input = document.querySelector("input")
// function onKeyPress() {
//     // make this dynamic using the current value of input
//     // everytime this function runs, log out the current value of the input
//     console.log("The user typed something")
// }
// input.addEventListener("keypress", onKeyPress)

// "keyup", "keydown"

// let input = document.querySelector("input")
// function onKeyUp() {
//     console.log(input.value)
// }
// input.addEventListener('keyup', onKeyUp)

// mouse movement
// let img = document.querySelector("img")

// function onMouseMove () {
//     console.log("The mouse is moving")
// }

// onMouseMove()


// let img = document.querySelector("img")

// function onMouseMove () {
//     console.log("The mouse is moving")
// }

// img.addEventListener('mousemove', onMouseMove)

// when the first item is clicked
// call a function that logs out "The First Item was clicked"


// let firstItem = document.querySelectorAll("li")[0];
// function clickFirstItem() {
//     // Wait a second...
//     console.log("First Item Clicked");
// }
// firstItem.addEventListener("click", clickFirstItem)

// delayed function
// setTimeout
// function delayedFunction(){
//     console.log("This function should be delayed")
// }

// delayedFunction()

// setTimeout(delayedFunction, 2000) // call delayedFunction in 2 seconds time

// setInterval
// function regularlyCalledFuntion(){
//     console.log("This should be called every three seconds")
// }

// setInterval(regularlyCalledFuntion, 3000)

// animations
// let img = document.querySelector("img")

// img.style.width = "150px"

// function increaseWidth() {
//     let styles = getComputedStyle(img)
//     let currentWidth = parseInt(styles.width)
//     let newWidth = currentWidth + 5
//     img.style.width = newWidth + "px"
// }

// how can we delay for 5 seconds?
// setTimeout(increaseWidth, 10)
// increaseWidth()
// setInterval(increaseWidth, 10)

// mouse movement
// example 1
// let img = document.querySelector("img")

// function onMouseMove(event) {
//     console.log("The mouse was moving")
// }

// document.body.addEventListener('mousemove', onMouseMove)

// example 2
// function onMouseMove(event) {
//     console.log("The mouse was moving", event)
// }

// document.body.addEventListener('mousemove', onMouseMove)

// example 3
// let img = document.querySelector("img")

// function onMouseMove (event){
//     const x = event.clientX
//     const y = event.clientY
//     img.style.left = x + "px"
//     img.style.right = y + "px"
// }

// document.body.addEventListener("mousemove", onMouseMove)