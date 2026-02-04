document.addEventListener("DOMContentLoaded", () => {

  /* =======================
     EMAIL PAGE LOGIC
  ======================== */
  const emailInput = document.getElementById("email");
  const nextBtn = document.getElementById("nextBtn");

  if (emailInput && nextBtn) {
    nextBtn.addEventListener("click", () => {
      const email = emailInput.value.trim();

      if (email === "") {
        emailInput.style.borderColor = "#ea4335"; // red
        alert("Enter an email or phone number");
        emailInput.focus();
        return;
      }

      // Save email for password page
      localStorage.setItem("userEmail", email);

      emailInput.style.borderColor = "#8ab4f8";

      window.location.href = "password.html";
    });

    emailInput.addEventListener("input", () => {
      emailInput.style.borderColor = "#5f6368";
    });
  }

  /* =======================
     PASSWORD PAGE LOGIC
  ======================== */
  const subtitle = document.querySelector(".subtitle");
  const passwordInput = document.getElementById("password");
  const showPass = document.getElementById("showPass");
  const signInBtn = document.getElementById("signInBtn");

  // Set subtitle to the saved email
  if (subtitle) {
    const savedEmail = localStorage.getItem("userEmail");
    subtitle.textContent = savedEmail || "";
  }

  // Show/hide password
  if (showPass && passwordInput) {
    showPass.addEventListener("change", () => {
      passwordInput.type = showPass.checked ? "text" : "password";
    });
  }

  // Sign in button
  if (signInBtn && passwordInput) {
    signInBtn.addEventListener("click", () => {
      const password = passwordInput.value.trim();

      if (password === "") {
        passwordInput.style.borderColor = "#ea4335";
        alert("Enter your password");
        passwordInput.focus();
        return;
      }

      passwordInput.style.borderColor = "#8ab4f8";

      alert("Signed in successfully (demo)");

      // Optional: clear email after sign-in
      localStorage.removeItem("userEmail");
    });
  }

  if (passwordInput) {
    passwordInput.addEventListener("input", () => {
      passwordInput.style.borderColor = "#5f6368";
    });
  }

});
