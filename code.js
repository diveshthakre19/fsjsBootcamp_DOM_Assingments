// devto
let heading = document.querySelectorAll(".crayons-subtitle-2");
let para = document.querySelectorAll("p");
heading[1].innerHTML = "Divesh Thakre";
para[1].innerHTML =
  "I like to learn about Computer Technologies and yes, I Write Code";

// let listOfSpan = document.querySelectorAll(".as-imagegrid-item-title");
// listOfSpan.innerText;
// Array.from(listOfSpan);

// const arr = [];
// listOfSpan.forEach((e) => {
//   arr.push(e.innerText);
// });
// console.log(arr);
// appele done

// #2

// YOUTUBE
let section = document.createElement("section");
const nav = document.querySelector(".accordion-homepage");
section.className = "parent";
section.innerHTML = "<h3>My New FAQ</h3>";
nav.appendChild(section);

// let section = document.createElement = "section";
// section.className = " parent"
// section.innerHTML = " <h3> My New FAQ  </h3>"
// let nav = document.querySelector(".accordion-homepage");
// nav.appendChild(section);

// oneplus
// let contactNum = document.querySelector(".one-tel-number").innerText = '+91 6366256689'

// samsung
// document.querySelector(".diwali-deals-product-sale-btn").innerText = "check out"

// let button = document.querySelector(
//   ".diwali-deals-product-sale-pro"
// ).lastElementChild;
// button.innerText = "Check Out";

let allButtons = document.querySelectorAll(".diwali-deals-product-sale-btn");
Array.from(allButtons);
allButtons.forEach((e) => {
  e.innerText = "Check Out";
});

// addidas
const changeColor = () => {
  inputBox.style.backgroundColor = "red";
};
const originalColor = () => {
  inputBox.style.backgroundColor = "silver";
};
let inputBox = document.querySelector(".searchinput___19uW0");
inputBox.addEventListener("mouseenter", changeColor);
inputBox.addEventListener("mouseout", originalColor);

// google
let languages = document.getElementById("SIvCob").querySelectorAll("a");
Array.from(languages);
for (let i = 3; i < languages.length; i++) {
  languages[i].remove();
}

// code Wars
const heading = document.querySelector(".display-heading-1");
heading.style.fontFamily = "monospace";
heading.style.color = "brown";

// FCC
const buttonText = document.querySelectorAll(".login-btn-text");
let bgRed = () => {
  buttonText[1].style.backgroundColor = "red";
};
buttonText[1].addEventListener("mouseover", bgRed);

// realme
const logo = document.querySelector(".icon-logo");
logo.style.backgroundImage = "url('https://ineuron.ai/images/ineuron-logo.png')";

// github
const button = document.querySelectorAll("button");
button[6].style.backgroundColor = "blue";

// hackre rank
const courseName = document.querySelector(".fl-heading-text");
courseName.innerText="JSBOOTCAMP";

// asus
const text =  document.querySelector(".HotDealsAll__Heading__2fIbe")
text.style.fontSize="80px"

// dell
const productName = document.querySelectorAll(".ps-title");
Array.from(productName);
productName.forEach((element) => {
  element.firstElementChild.style.float = "right";
});

// varcel
// const title = document.querySelector(".section-title_title__VEDfK")
// title.innerHTML = "Start from scrach"

// SONY
const conatiner = document.querySelector(".btn-container");
const newDate = new Date();
let curentTime = newDate.toUTCString();
console.log(curentTime);
conatiner.innerHTML = curentTime;

philips
const FooterContainer = document.querySelector(".p-f03-footer-container")
FooterContainer.style.background = "orange";

// cannon
const logo = document.querySelector(".logo")
logo.src

// opppo
const description = document.querySelector(".desc")
description.style.color = "orange"
