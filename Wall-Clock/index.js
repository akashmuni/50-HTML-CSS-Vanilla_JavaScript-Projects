console.log("this is wall clock");

function updateclock(){
    //get the current date
    let currentTime = new Date();

    //extrate hour,minute & sec from the date
let currentHour= currentTime.getHours();
let currentMinutes= currentTime.getMinutes();
let currentSeconds= currentTime.getSeconds();

//pad 0 if minute or second is less than 10
currentMinutes = (currentMinutes< 10 ? "0" : "") + currentMinutes;
currentSeconds = (currentSeconds< 10 ? "0" : "") + currentSeconds;

//convert railway clock to Am/Pm clock
currentHour = (currentHour> 12)? currentHour - 12 : currentHour;
currentHour = (currentHour== 0)? 12 : currentHour;
currentHour = (currentHour< 10 ? "0" : "") + currentHour;

//choose am/pm as per the time of the day
let timeOfDay = (currentHour < 12)? "AM":"PM";

//prepare the time string from hours, minutes and seconds
let currentTimeStr = currentHour + ":" + currentMinutes+ ":"+ currentSeconds + " "+ timeOfDay;

//inserting inside DOM
document.getElementById("clock").innerHTML = currentTimeStr;
}


