// Add User Module

export function user () {
    let userButton = document.querySelector(".user");  // select the "Add User" button
    if (userButton) {
        userButton.addEventListener("click", () => { 
            let user = prompt('Please enter your name: ');
            if (user != null) { 
                document.querySelector(".account").textContent = user;
            }
        }); 
    }
}

// add logic to store username persistently after
