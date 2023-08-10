function logOut() {
  localStorage.removeItem("jwt");
  window.location.assign("home.html");
}
const button = document.getElementById("logout");
button.addEventListener("click", logOut);

storedToken = localStorage.getItem("jwt");
if (storedToken) {
  const account_url = "http://localhost:3000/api/users/account";
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${storedToken}`);

  // Send the GET request
  fetch(account_url, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log(data);
      document.getElementById(
        "username"
      ).textContent = `Username: ${data.username}`;
      document.getElementById("email").textContent = `Email: ${data.email}`;
    })
    .catch((error) => {
      // Handle errors
      console.error("Error:", error);
    });
} else {
  window.location.assign("login.html");
}
