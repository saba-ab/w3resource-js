// 1
// Write a JavaScript program to display the
//current day and time in the following format.
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

function getDate() {
  const weekDays = [
    "Sunday",
    "Monday",
    "Thursday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const currentDay = weekDays[day];
  const dayTime = hour < 12 ? "AM" : "PM";
  const periodHour = hour > 12 ? hour - 12 : hour;
  const Output = `Today is : ${currentDay}. 
  current time is : ${periodHour} ${dayTime} : ${minute} : ${second}`;
  return Output;
}
const time = getDate();

// 2  Write a JavaScript program to print the current window contents.

function printCurrentWindow() {
  window.print();
}

// 3 Write a JavaScript program to get the current date.
//Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function getCurrentDate() {
  const months = [
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
  ];
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const monthConverted = month < 10 && month.toString().padStart(2, "0");
  const year = date.getFullYear();
  const dateInArr = [day, monthConverted, year];
  const output_1 = dateInArr.join("-");
  const output_2 = dateInArr.join("/");
  const output_3 = `${day} ${months[month]} ${year}`;
  const finalOutput = `${output_1} ${output_2} ${output_3}`;
  return finalOutput;
}

const currentDate = getCurrentDate();
console.log(currentDate);

// 4
// Write a JavaScript program to find the area
//of a triangle where three sides are 5, 6, 7.

function getTriangleArea(a, b, c) {
  const semiParameter = (a + b + c) / 2;
  const area = Math.sqrt(
    semiParameter *
      (semiParameter - a) *
      (semiParameter - b) *
      (semiParameter - c)
  );
  const shortenedData = area.toFixed(2);
  return shortenedData;
}
const triangleArea = getTriangleArea(5, 6, 7);
console.log(triangleArea);

// 5
// Write a JavaScript program to rotate the string 'w3resource' in the right direction.
// This is done by periodically removing one letter from the string end and attaching
//it to the front.

function rotateString(text) {
  const length = text.length;
  setInterval(() => {
    const lastCharacter = text[length - 1];
    const leastCharacters = text.substring(0, length - 1);
    text = lastCharacter + leastCharacters;
    console.log(text);
  }, 100);
}
// rotateString("some random text ");

// 6
//Write a JavaScript program to determine whether a given
//year is a leap year in the Gregorian calendar.

function detectLeapYear(year) {
  const date = new Date(`${year}-02-29`);
  const days = date.getDate();
  const leapYear = days === 29 ? `It is leap year` : `It is not leap year`;
  return leapYear;
}
const leapYear = detectLeapYear(2023);
console.log(leapYear);

// 7
//Write a JavaScript program to find out if
//1st January will be a Sunday between 2014 and 2050.
function isSunday(startYear, endYear) {
  const result = [];

  for (let i = startYear; i < endYear; i++) {
    const year = i;
    year.toString();
    const dates = [];
    const date = new Date(`${year}-01-01`);
    dates.push(date);
    dates.forEach((date) => {
      const year = date.getFullYear();
      const day = date.getDay();
      const sunday = day === 0 && `${year} year 1 january is sunday`;
      result.push(sunday);
    });
  }
  const filteredResult = result.filter((sunday) => {
    return sunday !== false;
  });
  return filteredResult;
}
const sunday = isSunday(2014, 2051);
console.log(sunday);

// 8
//Write a JavaScript program where the program takes a
//random integer between 1 and 10, and the user is then
//prompted to input a guess number.The program displays a
// message "Good Work" if the input matches the guess number
//otherwise "Not matched"
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
document.body.appendChild(mainContainer);
function guessNumberGame() {
  const guessNumberContainer = document.createElement("div");
  guessNumberContainer.classList.add("guess-number-container");
  mainContainer.appendChild(guessNumberContainer);
  const guessNumberHeader = document.createElement("h2");
  const guessNumberHint = document.createElement("p");

  guessNumberHeader.textContent = "Guess the number game";
  guessNumberHint.textContent = "Enter number between 1 and 10";
  guessNumberContainer.appendChild(guessNumberHeader);
  guessNumberContainer.appendChild(guessNumberHint);
  const inputNumber = document.createElement("input");
  inputNumber.setAttribute("type", "number");
  inputNumber.classList.add("input-number");
  guessNumberContainer.appendChild(inputNumber);
  const checkNumber = document.createElement("button");
  checkNumber.classList.add("check-button");
  checkNumber.textContent = "CHECK";
  guessNumberContainer.appendChild(checkNumber);
  const randomNumber = (Math.random() * 10).toFixed();
  if (randomNumber === "0") {
    return randomNumber + 1;
  }
  const result = document.createElement("p");
  result.classList.add("guess-result");
  result.textContent = "click to check";
  guessNumberContainer.appendChild(result);
  checkNumber.addEventListener("click", () => {
    const guess = inputNumber.value.toString();
    if (guess === randomNumber) {
      result.textContent = "Good Work";
    } else {
      result.textContent = "Not matched";
    }
  });
}
guessNumberGame();
