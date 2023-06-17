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
