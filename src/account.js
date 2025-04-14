// Add User Module

import { storeName } from './local';

let username = "";

function user() {
  // get buttons
  let addUserButton = document.querySelector(".user");  
  let closeBtn = document.getElementById("closeAccountBtn");

  // get forms and fields
  let accountForm = document.getElementById("usernameForm");
  let usernameField = document.getElementById("userInputField");
  let accountName = document.querySelector(".accountName");

  // display form
  addUserButton.addEventListener('click', () => {
      accountForm.style.display = 'flex';
  });

  // hide form
  closeBtn.addEventListener('click', () => {
      accountForm.style.display = 'none';
  });

  // set username on button click
  accountForm.addEventListener("submit", (event) => {
      event.preventDefault();
      
      username = usernameField.value.trim();

      if (username) {
          accountName.textContent = username;
          storeName(username); // pass the arguement and store the updated username immediately
          usernameField.value = ""; 
      } else {
          usernameField.placeholder = "Please enter a valid name";
          usernameField.style.border = "5px solid red";
      }
  });
}

export { user };
