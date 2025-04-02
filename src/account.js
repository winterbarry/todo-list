// Add User Module

export function user () {
    // buttons
    let addUserButton = document.querySelector(".user");  
    let closeBtn = document.getElementById("closeAccountBtn");

    // forms and fields
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

    accountForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let username = usernameField.value.trim();
        if (username) {
            accountName.textContent = username;
            usernameField.value = ""; 
        } else if (username === "") {
            usernameField.placeholder = "Please enter a valid name";
            usernameField.style.border = "5px solid red";
        }
    });
}

// add logic to store username persistently after
