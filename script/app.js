// main.js
import { FetchUser } from "./users.js";
import initAccordion from "./accordion.js";
import headerScroll from "./header.js";
import { showPassword, ValidateEmail } from "./forms.js";
import filterItems from "./filter.js";
import { saveData, loadData } from "./localStroage.js";
import toggleBurger from "./burger.js";
// DOM elements

for (let i = 0; i < 4; i++) {
  FetchUser();
}
toggleBurger();
filterItems();
loadData();
initAccordion();
headerScroll();
showPassword();

const validateButton = document.querySelector(".validateButton");
validateButton.addEventListener("click", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Call the email validation function
  ValidateEmail();
});

const email = document.getElementById("exampleInputEmail1");
const password = document.getElementById("exampleInputPassword1");

email.addEventListener("input", saveData);
password.addEventListener("input", saveData);
