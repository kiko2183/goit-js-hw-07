document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let emailValue = this.elements["email"].value.trim();
    let passwordValue = this.elements["password"].value.trim();
    if (emailValue === "" || passwordValue === "") {
      alert("All form fields must be filled in");
    } else {
      const form = {
        email: emailValue,
        password: passwordValue,
      };
      console.log(form);
      this.reset();
    }
  });
