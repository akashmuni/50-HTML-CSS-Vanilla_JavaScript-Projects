
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;

// console.log(name, email, phone);

name.addEventListener('blur', function () {
    console.log('name is blurred');
    // validate name here
    let regex = /^[a-zA-Z]([0-9 a-z A-Z]){2,20}$/
    let str = name.value;
    // console.log(regex, str);

    if (regex.test(str)) {

        console.log("it's valid");
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
        validUser = true;
    }
    else {
        console.log("it's invalid");
        name.classList.add('is-invalid')
        name.classList.remove('is-valid');
        validUser = false;
    }
})
email.addEventListener('blur', function () {

    console.log('email is blurred');
    // validate email here
    let regex = /^[_\-\.0-9a-zA-Z]+@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regex, str);

    if (regex.test(str)) {

        console.log("it's valid");
        email.classList.add('is-valid')
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log("it's invalid");
        email.classList.add('is-invalid')
        email.classList.remove('is-valid');
        validEmail = false;
    }
})
phone.addEventListener('blur', function () {
    console.log('phone is blurred');
    // validate phone here
    let regex = /^[0-9]{10}$/
    let str = phone.value;
    // console.log(regex, str);

    if (regex.test(str)) {

        // console.log("it's valid");
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        validPhone = true;
    }
    else {
        // console.log("it's invalid");
        phone.classList.add('is-invalid')
        phone.classList.remove('is-valid');
        validPhone = false;
    }
})

const submit = document.getElementById('submit')
submit.addEventListener('click', function (e) {
    e.preventDefault()
    // console.log('You clicked');

    //submit your form here

    if (validEmail && validUser && validPhone) {

        console.log('phone name and email are valid. Submitting the form.');
        let success = document.getElementById('success')
        success.classList.add('show');
        failure.classList.remove('show');
    }
    else {
        console.log('One of phone name or email is invalid. Hence unable to Submit.');
        let failure = document.getElementById('failure')
        failure.classList.add('show')
        success.classList.remove('show')
    }

    setTimeout(() => {
        success.classList.remove('show')
        failure.classList.remove('show')
    }, 5000);
})