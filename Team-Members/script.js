// local reviews data
const reviews = [
    {
      id: 1,
      name: "Akash Muni",
      job: "Full Stack Developer",
      img:
        "https://bookybergtech.in/wp-content/uploads/2021/05/unnamed-e1622392087401.png",
      text:
        "I'm a Full Stack Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae nemo neque blanditiis nihil suscipit tempore, esse aspernatur voluptates atque?",
    },
    {
      id: 2,
      name: "Chandan Logunjeet",
      job: "WordPress Developer",
      img:
        "https://bookybergtech.in/wp-content/uploads/2021/05/chandan-e1622398492650.png",
      text:
        "I'm a WordPress Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae nemo neque blanditiis nihil suscipit tempore, esse aspernatur voluptates atque?",
    },
    {
      id: 3,
      name: "Aditya Choudhury",
      job: "Graphic Designer",
      img:
        "https://bookybergtech.in/wp-content/uploads/2021/05/aditya1-e1622487955242.png",
      text:
        "I'm a Graphic Designer Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae nemo neque blanditiis nihil suscipit tempore, esse aspernatur voluptates atque?",
    },
    {
      id: 4,
      name: "Priyansu Choudhury",
      job: "App Developer",
      img:
        "https://bookybergtech.in/wp-content/uploads/2021/05/priyanshu-e1622401752840.png",
      text:
        "I'm a App Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae nemo neque blanditiis nihil suscipit tempore, esse aspernatur voluptates atque? ",
    },
    {
      id: 5,
      name: "Somya Panigrahi",
      job: "Graphic Designer",
      img:
        "https://bookybergtech.in/wp-content/uploads/2021/05/somya-1-e1622403756423.png",
      text:
        "I'm a Graphic Designer Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae nemo neque blanditiis nihil suscipit tempore, esse aspernatur voluptates atque?",
    },
    {
      id: 6,
      name: "Sourav Patro",
      job: "Marketing Manager",
      img:
        "https://bookybergtech.in/wp-content/uploads/2021/05/sourav-e1622480834570.png",
      text:
        "I'm a Marketing Expert Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae nemo neque blanditiis nihil suscipit tempore, esse aspernatur voluptates atque?",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });