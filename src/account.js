// Add User Module

export function user () {
    let addUserButton = document.querySelector(".user");  
    if (addUserButton) {
        addUserButton.addEventListener("click", () => { 
            let username = prompt('Please enter your name: ');
            if (username != null) { 
                document.querySelector(".account").textContent = username;
            }
        }); 
    }
}

// add logic to store username persistently after
