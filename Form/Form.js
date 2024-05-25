// Tampil Form Sign Up
const slideBtn = document.querySelectorAll(".btn");
slideBtn.forEach((e) => {
  e.addEventListener("click", function (t) {
    signUpSlide(t);
  });
});

function signUpSlide(t) {
  if (t.target.classList.contains("sign-up-btn")) {
    signUp.classList.add("sign-up-slide");
    signIn.classList.add("sign-in-slide");
  } else if (t.target.classList.contains("back")) {
    signUp.classList.remove("sign-up-slide");
    signIn.classList.remove("sign-in-slide");
  }
}
// End Tampil Form Sign Up

// Slide Line
const lineOne = document.querySelector(".line-slide .line-one");
const lineTwo = document.querySelector(".line-slide .line-two");

slideBtn.forEach((e) => {
  e.addEventListener("click", function (t) {
    slideLineAnimations(t);
  });
});

function slideLineAnimations(t) {
  if (
    t.target.classList.contains("sign-up-btn") &&
    t.target.closest(".sign-in")
  ) {
    t.preventDefault();
  }

  if (t.target.classList.contains("sign-up-btn")) {
    lineOne.classList.add("one-hover");
    lineTwo.classList.add("two-hover");
  } else if (t.target.classList.contains("back")) {
    lineOne.classList.remove("one-hover");
    lineTwo.classList.remove("two-hover");
  }
}
// End Slide Line 

// Event Logo Teks
const h1 = document.querySelectorAll("h1");

h1.forEach((e) => {
  const text = e.textContent;
  const huruf = [...text].map((h) => `<span>${h}</span>`).join(" ");
  e.innerHTML = huruf;
});
// End Logo Teks 

// Sign Im & Sign Up Placholder animations
const signIn = document.querySelector(".sign-in");
const input = signIn.querySelectorAll("input");
const placeHolder = signIn.querySelectorAll(".placeholder");
input.forEach((e, i) => {
  e.addEventListener("click", function () {
    phSigninClick(e, i);
  });

  e.addEventListener("blur", function () {
    phSigninBlur(e, i);
  });
});

function phSigninClick(e, i) {
  if (e.value.trim() === "") {
    placeHolder[i].classList.add("place-click-signin");
  }
}

function phSigninBlur(e, i) {
  if (e.value.trim() === "") {
    placeHolder[i].classList.remove("place-click-signin");
  }
}

// Sign Up
const signUp = document.querySelector(".sign-up");
const signUpInput = signUp.querySelectorAll("input");
const upPlaceHolder = signUp.querySelectorAll(".placeholder");

signUpInput.forEach((e, i) => {
  e.addEventListener("click", function () {
    phSignUpClick(e, i);
  });

  e.addEventListener("blur", function () {
    phSignUpBlur(e, i);
  });
});

function phSignUpClick(e, i) {
  if (e.value.trim() === "") {
    upPlaceHolder[i].classList.add("place-click-signup");
  }
}

function phSignUpBlur(e, i) {
  if (e.value.trim() === "") {
    upPlaceHolder[i].classList.remove("place-click-signup");
  }
}
// End Sign Im & Sign Up Placholder animations

// Show Password
const inputPw = document.querySelectorAll(".password-input .password");
const showPw = document.querySelectorAll(".password-input .show");
const hidePw = document.querySelectorAll(".password-input .hide");

showPw.forEach((e, i) => {
  e.addEventListener("click", function () {
    showHide(e, i);
  });
});

function showHide(e, i) {
  if (inputPw[i].type === "password") {
    inputPw[i].type = "text";
    showPw[i].style.color = "transparent";
    hidePw[i].style.color = "#0abebe";
  } else {
    inputPw[i].type = "password";
    showPw[i].style.color = "#0abebe";
    hidePw[i].style.color = "transparent";
  }
}
// End Show Password

// Button Click Animations
slideBtn.forEach((e) => {
  e.addEventListener("mousedown", function (t) {
    btnDown(t);
  });
});

slideBtn.forEach((e) => {
  e.addEventListener("mouseup", function (t) {
    btnUp(t);
  });
});

function btnDown(t) {
  if (t.target.classList.contains("button")) {
    t.target.classList.remove("button-up");
    t.target.classList.add("button-down");
  }
}

function btnUp(t) {
  if (t.target.classList.contains("button")) {
    t.target.classList.remove("button-down");
    t.target.classList.add("button-up");
  }
}
// End Button Click Animations

// Icon Click Animations
const icon = document.querySelectorAll(".icon-login a");
icon.forEach((e) => {
  e.addEventListener("mousedown", function () {
    e.classList.remove("icon-up");
    e.classList.add("icon-down");
  });
});

icon.forEach((e) => {
  e.addEventListener("mouseup", function () {
    e.classList.remove("icon-down");
    e.classList.add("icon-up");
  });
});
// End Icon Click Animations
