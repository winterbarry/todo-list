// add user logic

export function user () {
    let userButton = document.querySelector(".user");
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
