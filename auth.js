// =========================================
// EDVORA AUTH
// DAY 2 — JAVASCRIPT PART 3A
// =========================================


// =========================================
// SELECT ELEMENTS
// =========================================

const loginScreen =
    document.querySelector("#login-screen");

const signupScreen =
    document.querySelector("#signup-screen");

const showSignupButton =
    document.querySelector("#show-signup");

const showLoginButton =
    document.querySelector("#show-login");


// =========================================
// LOGIN → SIGNUP
// =========================================

if (showSignupButton) {

    showSignupButton.addEventListener(
        "click",
        () => {

            loginScreen.hidden = true;

            signupScreen.hidden = false;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


// =========================================
// SIGNUP → LOGIN
// =========================================

if (showLoginButton) {

    showLoginButton.addEventListener(
        "click",
        () => {

            signupScreen.hidden = true;

            loginScreen.hidden = false;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


// =========================================
// PASSWORD SHOW / HIDE
// =========================================

const passwordButtons =
    document.querySelectorAll(
        ".password-toggle"
    );


passwordButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const targetId =
                button.dataset.target;

            const passwordInput =
                document.getElementById(
                    targetId
                );


            if (!passwordInput) {
                return;
            }


            if (
                passwordInput.type ===
                "password"
            ) {

                passwordInput.type =
                    "text";

                button.textContent =
                    "🙈";

                button.setAttribute(
                    "aria-label",
                    "Hide password"
                );

            } else {

                passwordInput.type =
                    "password";

                button.textContent =
                    "👁";

                button.setAttribute(
                    "aria-label",
                    "Show password"
                );

            }

        }
    );

});


// =========================================
// EMAIL VALIDATION HELPER
// =========================================

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(
        email.trim()
    );

}


// =========================================
// MESSAGE HELPER
// =========================================

function showAuthMessage(
    elementId,
    message,
    type = "error"
) {

    const messageElement =
        document.getElementById(
            elementId
        );


    if (!messageElement) {
        return;
    }


    messageElement.textContent =
        message;


    messageElement.className =
        "auth-message " + type;

}
// =========================================
// EDVORA AUTH
// DAY 2 — JAVASCRIPT PART 3B
// Form Validation + UI Feedback
// =========================================


// =========================================
// LOGIN FORM
// =========================================

const loginForm =
    document.querySelector("#login-form");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const email =
                document.querySelector(
                    "#login-email"
                );

            const password =
                document.querySelector(
                    "#login-password"
                );


            // Clear previous message

            showAuthMessage(
                "login-message",
                ""
            );


            // Email validation

            if (
                !isValidEmail(
                    email.value
                )
            ) {

                showAuthMessage(
                    "login-message",
                    "Please enter a valid email address."
                );

                email.focus();

                return;
            }


            // Password validation

            if (
                password.value.length < 8
            ) {

                showAuthMessage(
                    "login-message",
                    "Password must contain at least 8 characters."
                );

                password.focus();

                return;
            }


            // Button

            const button =
                loginForm.querySelector(
                    ".auth-submit"
                );


            const originalContent =
                button.innerHTML;


            button.disabled = true;

            button.innerHTML =
                "<span>Signing in...</span>";


            // Demo login

            setTimeout(() => {

                button.innerHTML =
                    "<span>Signed in ✓</span>";

                button.style.background =
                    "#059669";


                showAuthMessage(
                    "login-message",
                    "Login successful. Dashboard connection will be added later.",
                    "success"
                );


                setTimeout(() => {

                    button.disabled = false;

                    button.innerHTML =
                        originalContent;

                    button.style.background =
                        "";

                }, 2500);

            }, 900);

        }
    );

}


// =========================================
// SIGNUP FORM
// =========================================

const signupForm =
    document.querySelector("#signup-form");


if (signupForm) {

    signupForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document.querySelector(
                    "#signup-name"
                );

            const email =
                document.querySelector(
                    "#signup-email"
                );

            const password =
                document.querySelector(
                    "#signup-password"
                );

            const confirmPassword =
                document.querySelector(
                    "#signup-confirm-password"
                );

            const terms =
                document.querySelector(
                    "#terms"
                );


            // Clear previous message

            showAuthMessage(
                "signup-message",
                ""
            );


            // Name validation

            if (
                name.value.trim().length < 2
            ) {

                showAuthMessage(
                    "signup-message",
                    "Please enter your full name."
                );

                name.focus();

                return;
            }


            // Email validation

            if (
                !isValidEmail(
                    email.value
                )
            ) {

                showAuthMessage(
                    "signup-message",
                    "Please enter a valid email address."
                );

                email.focus();

                return;
            }


            // Password length

            if (
                password.value.length < 8
            ) {

                showAuthMessage(
                    "signup-message",
                    "Password must contain at least 8 characters."
                );

                password.focus();

                return;
            }


            // Confirm password

            if (
                password.value !==
                confirmPassword.value
            ) {

                showAuthMessage(
                    "signup-message",
                    "Passwords do not match."
                );

                confirmPassword.focus();

                return;
            }


            // Terms

            if (!terms.checked) {

                showAuthMessage(
                    "signup-message",
                    "Please accept the Terms and Privacy Policy."
                );

                return;
            }


            // Submit button

            const button =
                signupForm.querySelector(
                    ".auth-submit"
                );


            const originalContent =
                button.innerHTML;


            button.disabled = true;

            button.innerHTML =
                "<span>Creating account...</span>";


            // Demo account creation

            setTimeout(() => {

                button.innerHTML =
                    "<span>Account created ✓</span>";

                button.style.background =
                    "#059669";


                showAuthMessage(
                    "signup-message",
                    "Account created successfully. Real authentication will be added with the database.",
                    "success"
                );


                setTimeout(() => {

                    button.disabled = false;

                    button.innerHTML =
                        originalContent;

                    button.style.background =
                        "";

                }, 2500);

            }, 1000);

        }
    );

}


// =========================================
// PASSWORD STRENGTH INDICATOR
// =========================================

const signupPassword =
    document.querySelector(
        "#signup-password"
    );


if (signupPassword) {

    signupPassword.addEventListener(
        "input",
        () => {

            const length =
                signupPassword.value.length;


            if (length === 0) {

                signupPassword.style.borderColor =
                    "";

            } else if (length < 8) {

                signupPassword.style.borderColor =
                    "#f59e0b";

            } else {

                signupPassword.style.borderColor =
                    "#10b981";

            }

        }
    );

}


// =========================================
// CONFIRM PASSWORD LIVE CHECK
// =========================================

const confirmPassword =
    document.querySelector(
        "#signup-confirm-password"
    );


if (
    confirmPassword &&
    signupPassword
) {

    confirmPassword.addEventListener(
        "input",
        () => {

            if (
                confirmPassword.value === ""
            ) {

                confirmPassword.style.borderColor =
                    "";

                return;
            }


            if (
                confirmPassword.value ===
                signupPassword.value
            ) {

                confirmPassword.style.borderColor =
                    "#10b981";

            } else {

                confirmPassword.style.borderColor =
                    "#ef4444";

            }

        }
    );

}


// =========================================
// PAGE LOADED
// =========================================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "auth-loaded"
        );

        console.log(
            "Edvora authentication UI loaded."
        );

    }
);