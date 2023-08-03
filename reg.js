const URL = "http://localhost:3000/api/users/register";
async function callRegister(username, password, email) {
  const data = {
    username: username,
    password: password,
    email: email,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(URL, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      // Process the response data here (if needed)
      console.log("Response data:", data);
      window.location.assign("home.html");
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("Error:", error);
    });
}
document
  .getElementById("registerForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    callRegister(
      document.getElementById("register-username").value,
      document.getElementById("register-password").value,
      document.getElementById("email").value
    );
  });
