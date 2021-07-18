window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#4A00E0",
    "#f12711",
    "#a8ff78",
    "#0f9b0f",
    "#FFD200",
    "#12D8FA"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      const heading = document.getElementById('heading');
      heading.style.color = colors[index];
      const tagline = document.getElementById('tagline');
      tagline.style.backgroundColor = colors[index];
      tagline.style.color = "#fff";
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
