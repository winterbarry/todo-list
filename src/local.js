// Local Storage module

function storeData(username) {
  if (username) {
    localStorage.setItem('username', username);
  }
}

function loadData() {
  const storedUsername = localStorage.getItem('username');

  if (storedUsername) {
      const accountName = document.querySelector(".accountName");
      accountName.textContent = storedUsername;
  }
}

document.addEventListener('DOMContentLoaded', loadData);

export { storeData, loadData };

