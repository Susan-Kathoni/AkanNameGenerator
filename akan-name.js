function test() {
  alert("this is a test");
}
function myFunction() {
  var genders = document.getElementById("my-dropdown").selectedIndex;

  const ourDate = "";
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;

  let userAkan;
  var d = new Date(ourDate.concat(month, " ", day, " ", year));
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  console.log(n);
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var maleName = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
  const findDay = (element) => element == n;
  var dayIndex = days.findIndex(findDay);
  if (genders === 1) {
    userAkan = maleName[dayIndex];
  } else if (genders === 2) {
    userAkan = femaleName[dayIndex];
  }
  console.log(dayIndex, femaleName[3]);
  alert(userAkan);
  return userAkan;
}
