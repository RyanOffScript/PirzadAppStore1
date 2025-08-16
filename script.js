// Save account in local storage
function createAccount() {
  let user = document.getElementById("newUser").value;
  let pin = document.getElementById("newPin").value;
  let confirm = document.getElementById("confirmPin").value;

  if (pin !== confirm) {
    alert("PINs do not match!");
    return;
  }

  localStorage.setItem("accountUser", user);
  localStorage.setItem("accountPin", pin);

  alert("Account created! Now log in.");
  window.location.href = "login.html";
}

// Login function
function login() {
  let user = document.getElementById("username").value;
  let pin = document.getElementById("pin").value;

  let savedUser = localStorage.getItem("accountUser");
  let savedPin = localStorage.getItem("accountPin");

  if (user === savedUser && pin === savedPin) {
    alert("Welcome " + user + "!");
    window.location.href = "store.html";
  } else {
    alert("Wrong username or PIN!");
  }
}
