// Know Page Name
let lis = document.querySelectorAll("header ul a");

lis.forEach((li) => {
  if(li.classList.contains("current")) {
    if(li.innerHTML === "home")
      homeJs();
    else if(li.innerHTML === "about")
      aboutJs()
    else if(li.innerHTML === "work")
      workJs()
    else if(li.innerHTML === "contact")
      contactJs()
  }
},);

// Js Codes

function homeJs () {
  // Specialize Animate
  window.addEventListener("scroll", () => {
    if(scrollY >= document.querySelector(".specialize").offsetTop-500) {
      document.querySelector(".specialize .row > div:first-child").style.transform = "translateX(0%)";
      document.querySelector(".specialize .row > div:last-child").style.transform = "translateX(0%)";
      document.querySelector(".specialize .row > div:nth-child(2)").style.transform = "translateX(0%)";
      document.querySelector(".specialize .row > div:nth-child(3)").style.transform = "translateX(0%)";
    }
  });
}

function aboutJs () {
  // Progress Animate
  bars = document.querySelectorAll(".skills .progress .progress-bar")
  window.addEventListener("scroll", () => {
    if(scrollY >= document.querySelector(".skills").offsetTop-600) {
      bars.forEach((bar) => {
        bar.style.width = bar.dataset.prog;
      },);
    }
  });
}

function workJs () {}

function contactJs () {
  // Form Session
  let form = document.querySelector(".contact form");
  let inputs = document.querySelectorAll(".contact form [name]");
  
  window.onload = () => {
    inputs.forEach(input => {
      input.value = window.sessionStorage.getItem(input.name);
    });
  }
  form.onsubmit = () => {
    window.sessionStorage.clear();
  }
  inputs.forEach(input => {
    input.oninput = () => {
      window.sessionStorage.setItem(input.name, input.value);
    }
  });
}

// Main Code

// Responsive Nav
let burger = document.querySelector("header .bars");
let menue = document.querySelector("header ul");

burger.onclick = () => {
  menue.classList.toggle("show");
}