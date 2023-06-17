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
    "December",
  ];
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
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
