const letters = [
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
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = [
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

optionOne.addEventListener("click", function () {
  navigator.clipboard.writeText(optionOne.textContent);
  optionOne.style.transform = "scale(0.95)";
  setTimeout(() => {
    optionOne.style.transform = "scale(1)";
  }, 100);
});

optionTwo.addEventListener("click", function () {
  navigator.clipboard.writeText(optionTwo.textContent);
  optionTwo.style.transform = "scale(0.95)";
  setTimeout(() => {
    optionTwo.style.transform = "scale(1)";
  }, 100);
});

getRandomPassword.addEventListener("click", generate);

let toggleNumbersEl = document.getElementById("toggle-numbers");
let toggleSpecialCharsEl = document.getElementById("toggle-special-characters");

let includeSpecial = false;
let includeNumbers = false;

toggleNumbersEl.addEventListener("change", (e) => {
  includeNumbers = !includeNumbers;
});

toggleSpecialCharsEl.addEventListener("change", (e) => {
  includeSpecial = !includeSpecial;
});

function generateRandomCharacter() {
  let characters = [];
  characters.push(...letters);
  if (includeNumbers) {
    characters.push(...numbers);
  }
  if (includeSpecial) {
    characters.push(...special);
  }
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
const lightsaber = document.getElementById("lightsaber");
console.log(lightsaber);
lightsaber.addEventListener("click", function () {
  this.classList.toggle("active");
});

function generate() {
  optionOne.textContent = generateRandomPassword();
  optionTwo.textContent = generateRandomPassword();
  lightsaber.classList.add("active");
}
