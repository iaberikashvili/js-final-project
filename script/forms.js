function showPassword() {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#exampleInputPassword1");
  togglePassword.addEventListener("click", () => {
    // Toggle the type attribute using
    // getAttribure() method
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // Toggle the eye and bi-eye icon
    togglePassword.classList.toggle("bi-eye-fill");
    togglePassword.classList.toggle("bi-eye-slash");
  });
}
function ValidateEmail() {
  const email = document.querySelector("#exampleInputEmail1").value;
  var emailRegex = /^[^\s@]+@gmail\.com$/;
  if (emailRegex.test(email)) {
    // Valid email, clear any previous error message
    document.getElementById("emailHelp").textContent = "";
  } else {
    // Invalid email, display error message
    document.getElementById("emailHelp").textContent =
      "Email must end with @gmail.com";
  }
}

export { showPassword, ValidateEmail };
