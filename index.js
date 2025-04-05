console.log("gooch");

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let getRandomPassword = document.getElementById("generate-password");
let optionOne = document.getElementById("option-one");
let optionTwo = document.getElementById("option-two");
getRandomPassword.addEventListener("click", generate);

function generateRandomCharacter() {
  let random = Math.floor(Math.random() * characters.length);
  return characters[random];
}

function generateRandomPassword() {
  let password = "";
  for (let i = 0; i < 15; i++) {
    password += generateRandomCharacter();
  }
  return password;
}
function generate() {
  optionOne.textContent = generateRandomPassword();
  optionTwo.textContent = generateRandomPassword();
}
const lightsaber = document.getElementById("lightsaber");
console.log(lightsaber);
lightsaber.addEventListener("click", function () {
  this.classList.toggle("active");
});
