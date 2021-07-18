console.log('This is cv scanner');
//Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Akash Muni',
        age: 21,
        city: 'Jeypore',
        skills: 'Full Stack Web Developer',
        image: 'https://randomuser.me/api/portraits/men/88.jpg'
    },
    {
        name: 'Chandan Loganjeet',
        age: 21,
        city: 'Jeypore',
        skills: 'Worpress Developer',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Aditya Choudhury',
        age: 21,
        city: 'Jeypore',
        skills: 'Graphic Designer',
        image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
        name: 'Priyansu Choudhury',
        age: 21,
        city: 'Jeypore',
        skills: 'App Developer',
        image: 'https://randomuser.me/api/portraits/men/89.jpg'
    },
    {
        name: 'Sourav Patro',
        age: 21,
        city: 'Jeypore',
        skills: 'Digitial Marketer',
        image: 'https://randomuser.me/api/portraits/men/66.jpg'
    },
    {
        name: 'Pooja Ahuja',
        age: 20,
        city: 'Jeypore',
        skills: 'Fashion Blogger',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Ramya Baudi',
        age: 20,
        city: 'Jeypore',
        skills: 'Health & Fitness Blogger',
        image: 'https://randomuser.me/api/portraits/women/77.jpg'
    },
    {
        name: 'Chinu Balla',
        age: 20,
        city: 'Jeypore',
        skills: 'Fashion Influencer',
        image: 'https://randomuser.me/api/portraits/women/88.jpg'
    },
]

//CV Iterator
function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex< profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);
nextCV();

//Button listner for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const CurrentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(CurrentCandidate != undefined){

        
        image.innerHTML=`<img src='${CurrentCandidate.image}'>`;
        
        profile.innerHTML=`<ul class="list-group">
        <li class="list-group-item list-group-item-success"><strong>Name:</strong> ${CurrentCandidate.name}</li>
        <li class="list-group-item list-group-item-success"><strong>Age: </strong>${CurrentCandidate.age} years old</li>
        <li class="list-group-item list-group-item-success"><strong>City:</strong> ${CurrentCandidate.city}</li>
        <li class="list-group-item list-group-item-success"><strong>Skill: </strong> ${CurrentCandidate.skills}</li>
        </ul>`
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }
}
