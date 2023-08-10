function logOut() {
  //remove token when loggin out and redirect to home page
  localStorage.removeItem("jwt");
  window.location.assign("home.html");
}
const button = document.getElementById("logout");
button.addEventListener("click", logOut);

//retrieve token and get user info
storedToken = localStorage.getItem("jwt");
if (storedToken) {
  const account_url = "http://localhost:3000/api/users/account";
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${storedToken}`);

  fetch(account_url, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById(
        "username"
      ).textContent = `Username: ${data.username}`;
      document.getElementById("email").textContent = `Email: ${data.email}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
} else {
  //if user isnt logged in go to login page
  window.location.assign("login.html");
}
