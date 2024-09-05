document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (username && password) {
      // Simulate backend login validation (Replace with actual AJAX call if needed)
      if (
        username === "teacher" &&
        password === "password" &&
        role === "teacher"
      ) {
        localStorage.setItem("role", "teacher");
        window.location.href = "dashboard.html";
      } else if (
        username === "student" &&
        password === "password" &&
        role === "student"
      ) {
        localStorage.setItem("role", "student");
        window.location.href = "dashboard2.html";
      } else {
        alert("Invalid credentials!");
      }
    }
  });
