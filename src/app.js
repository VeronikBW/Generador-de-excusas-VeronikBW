import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function generateExcuse() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = [
    'before the class',
    'when I was sleeping',
    'while I was exercising',
    'during my lunch',
    'while I was praying'
  ];
  let excuse = `${who[getRandomIndex(who)]} ${action[getRandomIndex(action)]} ${what[getRandomIndex(what)]} ${when[getRandomIndex(when)]}`;
  return excuse;
}
window.onload = function () {
  document.getElementById("excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console");
};
