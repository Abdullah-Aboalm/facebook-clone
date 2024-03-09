// start login

let email = document.querySelector("#em");
let password = document.querySelector("#pas");
let submit = document.querySelector("#submit");
let copyright = document.querySelector(".copyright");
let date = new Date();

copyright.innerHTML = `Meta &copy; ${date.getFullYear()}`;

var regEm =
  /(?:^(?:010|011|012|015)\d{8}$)|(?:^[a-z1-9_]+@[a-z1-9_]+\.[a-z1-9_]{2,10}$)/i;
var regPas = /\w{4,15}/i;

submit.addEventListener("click", () => {
  if (regEm.test(email.value) == false) {
    email.classList.add("err");
  }
  if (regPas.test(password.value) == false) {
    password.classList.add("err");
  }
  if (regPas.test(password.value) && regEm.test(email.value)) {
    location.href = "homePageEn.html";
  }
  if (email.value == 0 && password.value == 0) {
    email.classList.add("err");
    password.classList.add("err");
  }
});

email.addEventListener("input", () => {
  email.classList.remove("err");
});

password.addEventListener("input", () => {
  password.classList.remove("err");
});

// mob langs

// main div
let langsMob = document.querySelector(".langs-pop");
// popup
let mobLangs = document.querySelector(".langs-mob");
let overlay = document.querySelector(".overlay");

let closeIcon = document.querySelector("#close");

langsMob.addEventListener("click", () => {
  mobLangs.style.bottom = "0";
  overlay.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  mobLangs.style.bottom = "-60vh";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  mobLangs.style.bottom = "-60vh";
  overlay.style.display = "none";
});

//  end login
