console.log("This is alarm clock app");

const alarmSubmit = document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click', setAlarm )

var audio = new Audio ('https://pl3dxz-a.akamaihd.net/downloads/ringtones/files/mp3/woh-din-bhi-kya-din-the-1-53666.mp3')
function ringBell() {
    audio.play();
}
// let validalarm = false;

function realtimeclock(){
    var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
var t = setTimeout(realtimeclock, 500)
}

function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value)
    
    console.log(`Setting Alarm for ${alarmDate}`);
    now = new Date();
    let timeToAlarm = alarmDate - now;
    console.log(alarmDate-now);

    // let regex = /^[0-9]{25}$/
    // let str = alarm.value;
    // console.log(regex, str);

    // if (regex.test(str)) {

    //     console.log("it's valid");
    //     alarm.classList.remove('is-invalid');
    //     alarm.classList.add('is-valid');
    //     validalarm = true;
    //     // let success = document.getElementById('success')
    //     // success.classList.add('show')
    //     // failure.classList.remove('show')
    // }
    // else {
    //     console.log("it's invalid");
    //     alarm.classList.add('is-invalid')
    //     alarm.classList.remove('is-valid');
    //     validalarm = false;
    //     // let success = document.getElementById('success')
    //     // let failure = document.getElementById('failure')
    //     // failure.classList.add('show')
    //     // success.classList.remove('show')
    // }


    if(timeToAlarm >= 0){
        setTimeout(() => {
            ringBell();

        }, timeToAlarm);
    }
    let success = document.getElementById('success')
    success.classList.add('show')
    setTimeout(() => {
        success.classList.remove('show')
    }, 3000);

}

// const submit = document.getElementById('submit')
//  function alarmAlert(e) {
//     e.preventDefault();
//     console.log('You clicked');

//     //submit your form here

//     if (validalarm) {

//         console.log('phone name and email are valid. Submitting the form.');
//         let success = document.getElementById('success')
//         success.classList.add('show')
//         failure.classList.remove('show')

//     }
//     else {
//         console.log('One of phone name or email is invalid. Hence unable to Submit.');
//         let failure = document.getElementById('failure')
//         failure.classList.add('show')
//         success.classList.remove('show')
//     }

//     setTimeout(() => {
//         success.classList.remove('show')
//         failure.classList.remove('show')
//     }, 5000);
// }
 
