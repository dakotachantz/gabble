function showLoginForm() {
  event.preventDefault();
  let form = document.getElementById("loginForm");
  if (form.style.display == "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}

function showSignupForm() {
  event.preventDefault();
  let form = document.getElementById("signupForm");
  if (form.style.display == "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}
