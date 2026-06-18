const correctPassword = "290126";

function checkPassword() {
  const input = document.getElementById("passwordInput");
  const errorText = document.getElementById("errorText");

  if (input.value === correctPassword) {
    localStorage.setItem("dateInviteUnlocked", "true");

    if (window.parent && window.parent.goToPage) {
      window.parent.goToPage("index.html");
    } else {
      window.location.href = "index.html";
    }
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

function handleEnter(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
}


function openSecretLetter() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const unlockHour = 23;
  const unlockMinute = 0;
  const unlockMinutes = unlockHour * 60 + unlockMinute;

  const letterLockBox = document.getElementById("letterLockBox");

  if (currentMinutes >= unlockMinutes) {
    if (window.parent && window.parent.goToPage) {
      window.parent.goToPage("letter.html");
    } else {
      window.location.href = "letter.html";
    }
  } else {
    letterLockBox.style.display = "block";

    letterLockBox.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

function openDecodeGame() {
  if (window.parent && window.parent.goToPage) {
    window.parent.goToPage("decode.html");
  } else {
    window.location.href = "decode.html";
  }
}

function lockInvite() {
  localStorage.removeItem("dateInviteUnlocked");

  if (window.parent && window.parent.goToPage) {
    window.parent.goToPage("login.html");
  } else {
    window.location.href = "login.html";
  }
}

function lockInvite() {
  localStorage.removeItem("dateInviteUnlocked");
  window.location.href = "login.html";
}

function openDecodeGame() {
  window.location.href = "decode.html";
}


function lockInvite() {
  localStorage.removeItem("dateInviteUnlocked");
  window.location.href = "login.html";
}

