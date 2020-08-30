function test() {
  alert("this is a test");
}
function myFunction() {
 
  var genders = document.getElementById("my-dropdown").selectedIndex;
  const ourDate = "";
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;
  const definedMonths = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'aeptember', 'october', 'november', 'december']

  if (day <1 || day >31) {
    document.getElementById("dateError").innerHTML="enter valid date"   
    } 
    if (year ==="") {
    document.getElementById("yearError").innerHTML = "cannot be empty"  
    } 
     if (definedMonths.includes(month.toLowerCase())===false) {
    document.getElementById("monthError").innerHTML = "enter a valid month"
    }
  
    if(genders===0){
      document.getElementById("genderError").innerHTML = "please chose gender"
    }

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
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
    "Kwasi",
  ];
  var femaleName = ["Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna", "Akosua"];
  const findDay = (element) => element == n;
  var dayIndex = days.findIndex(findDay);
  if (genders === 1) {
    userAkan = maleName[dayIndex];
  } else if (genders === 2) {
    userAkan = femaleName[dayIndex];
  }
  console.log(dayIndex, femaleName[3]);
  // alert(userAkan);
  if (userAkan === undefined) {
    document.getElementById("answer").innerHTML = ""
  document.getElementById("errorAns").innerHTML = `Sorry we could not generate your akan name make sure to provide a valid date of birth, month of birth and year of birth`
  setTimeout(() => {
    document.getElementById("dateError").innerHTML="" 
  document.getElementById("yearError").innerHTML = "" 
  document.getElementById("monthError").innerHTML = ""
  document.getElementById("genderError").innerHTML = ""
    document.getElementById("errorAns").innerHTML = ""
    document.getElementById("answer").innerHTML = ""
  },3000)
  

  document.getElementById("myForm").reset();
  } else {
    document.getElementById("answer").innerHTML = `Your Akan name is ${userAkan} `
    setTimeout(() => {
      document.getElementById("dateError").innerHTML="" 
    document.getElementById("yearError").innerHTML = "" 
    document.getElementById("monthError").innerHTML = ""
    document.getElementById("genderError").innerHTML = ""
    document.getElementById("errorAns").innerHTML = ""
    },3000)
    

    document.getElementById("myForm").reset();
  }
  return userAkan;
}



