function saveData() {
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;

  const credentials = {
    email: email,
    password: password,
  };

  localStorage.setItem("credentials", JSON.stringify(credentials));
}

function loadData() {
  const storedCredentials = localStorage.getItem("credentials");

  if (storedCredentials) {
    const credentials = JSON.parse(storedCredentials);
    console.log(credentials);

    document.getElementById("exampleInputEmail1").value =
      credentials.email || "";
    document.getElementById("exampleInputPassword1").value =
      credentials.password || "";
  }
}
export { saveData, loadData };
