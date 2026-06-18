const correctPassword = "290126";

  function checkPassword() {
    const input = document.getElementById("passwordInput");
    const errorText = document.getElementById("errorText");
    const loadingScreen = document.getElementById("loadingScreen");

    if (input.value === correctPassword) {
      localStorage.setItem("dateInviteUnlocked", "true");

      loadingScreen.style.display = "flex";

      setTimeout(function () {
        window.location.href = "index.html";
      }, 3000);
    } else {
      errorText.style.display = "block";
      input.value = "";
      input.focus();
    }
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      checkPassword();
    }
  }

function openSecretLetter() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const unlockMinutes = 23 * 60;
  const letterLockBox = document.getElementById("letterLockBox");
  const letterLoadingScreen = document.getElementById("letterLoadingScreen");

  if (currentMinutes >= unlockMinutes) {
    letterLoadingScreen.style.display = "flex";

    setTimeout(function () {
      window.location.href = "letter.html";
    }, 3000);
  } else {
    letterLockBox.style.display = "block";

    letterLockBox.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

function openDecodeGame() {
    window.location.href = "decode.html";
  }

function openSecretLetter() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const unlockMinutes = 23 * 60;
  const letterLockBox = document.getElementById("letterLockBox");
  const letterLoadingScreen = document.getElementById("letterLoadingScreen");

  if (currentMinutes >= unlockMinutes) {
    letterLoadingScreen.style.display = "flex";

    setTimeout(function () {
      window.location.href = "letter.html";
    }, 3000);
  } else {
    letterLockBox.style.display = "block";

    letterLockBox.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}
  function lockInvite() {
    localStorage.removeItem("dateInviteUnlocked");
    window.location.href = "login.html";
  }

function lockInvite() {
  localStorage.removeItem("dateInviteUnlocked");

  if (window.parent && window.parent.goToPage) {
    window.parent.goToPage("login.html");
  } else {
    window.location.href = "login.html";
  }
}


