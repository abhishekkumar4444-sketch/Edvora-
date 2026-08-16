// =========================================
// EDVORA — JAVASCRIPT PART 1/3
// Mobile Menu + Navigation
// =========================================


// ---------- SELECT ELEMENTS ----------

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navButtons = document.querySelector(".nav-buttons");


// ---------- MOBILE MENU ----------

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-active");
        navButtons.classList.toggle("mobile-active");

        menuButton.classList.toggle("menu-open");

    });

}


// ---------- CLOSE MENU AFTER CLICK ----------

const allNavLinks = document.querySelectorAll(
    ".nav-links a, .nav-buttons a"
);

allNavLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("mobile-active");
        }

        if (navButtons) {
            navButtons.classList.remove("mobile-active");
        }

        if (menuButton) {
            menuButton.classList.remove("menu-open");
        }

    });

});


// ---------- SMOOTH ANCHOR NAVIGATION ----------

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

// =========================================
// EDVORA — JAVASCRIPT PART 2/3
// Contact Form + Validation + UI Feedback
// =========================================


// ---------- CONTACT FORM ----------

const contactForm =
    document.querySelector("#contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Get form fields

            const name =
                document.querySelector("#name");

            const email =
                document.querySelector("#email");

            const school =
                document.querySelector("#school");

            const message =
                document.querySelector("#message");


            // Basic validation

            if (
                !name.value.trim() ||
                !email.value.trim()
            ) {

                showFormMessage(
                    "Please enter your name and email.",
                    "error"
                );

                return;
            }


            // Simple email validation

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(
                    email.value.trim()
                )
            ) {

                showFormMessage(
                    "Please enter a valid email address.",
                    "error"
                );

                return;
            }


            // Button

            const submitButton =
                contactForm.querySelector(
                    ".form-submit"
                );


            const originalText =
                submitButton.innerHTML;


            // Loading state

            submitButton.disabled = true;

            submitButton.innerHTML =
                "Sending...";


            // Simulate sending

            setTimeout(() => {

                submitButton.innerHTML =
                    "Message Sent ✓";

                submitButton.style.background =
                    "#059669";


                showFormMessage(
                    "Thanks! Your message has been received.",
                    "success"
                );


                // Reset form

                contactForm.reset();


                // Restore button

                setTimeout(() => {

                    submitButton.disabled = false;

                    submitButton.innerHTML =
                        originalText;

                    submitButton.style.background =
                        "";

                }, 2500);


            }, 1000);

        }
    );

}


// ---------- FORM MESSAGE ----------

function showFormMessage(
    message,
    type
) {

    let messageBox =
        document.querySelector(
            ".form-message"
        );


    // Create message box

    if (!messageBox) {

        messageBox =
            document.createElement(
                "div"
            );

        messageBox.className =
            "form-message";

        contactForm.appendChild(
            messageBox
        );

    }


    messageBox.textContent =
        message;


    messageBox.classList.remove(
        "success",
        "error"
    );


    messageBox.classList.add(
        type
    );


    // Remove automatically

    setTimeout(() => {

        messageBox.classList.remove(
            "success",
            "error"
        );

    }, 4000);

}


// =========================================
// INPUT INTERACTIONS
// =========================================


const formInputs =
    document.querySelectorAll(
        "#contact-form input, #contact-form textarea"
    );


formInputs.forEach((input) => {

    input.addEventListener(
        "focus",
        () => {

            input.parentElement
                .classList.add(
                    "input-focused"
                );

        }
    );


    input.addEventListener(
        "blur",
        () => {

            input.parentElement
                .classList.remove(
                    "input-focused"
                );

        }
    );

});


// =========================================
// GET STARTED BUTTON
// =========================================


const getStartedButtons =
    document.querySelectorAll(
        'a[href="#get-started"]'
    );


getStartedButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            console.log(
                "Edvora Get Started clicked"
            );

        }
    );

});


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================


const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;


        if (window.scrollY > 30) {

            navbar.classList.add(
                "navbar-scrolled"
            );

        } else {

            navbar.classList.remove(
                "navbar-scrolled"
            );

        }

    }
);
// =========================================
// EDVORA — JAVASCRIPT PART 3/3
// Animations + Active Navigation + UI
// =========================================


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(
    ".feature-card, .step-card, .audience-content, " +
    ".school-dashboard, .phone-preview, " +
    ".contact-form-card, .cta-card"
);


// Initial state

revealElements.forEach((element) => {

    element.classList.add(
        "reveal-element"
    );

});


// Intersection Observer

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 140;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach((link) => {

            link.classList.remove(
                "active-link"
            );


            const href =
                link.getAttribute("href");


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active-link"
                );

            }

        });

    }
);


// =========================================
// HERO DASHBOARD FLOATING EFFECT
// =========================================

const dashboard =
    document.querySelector(
        ".dashboard-card"
    );


if (dashboard) {

    window.addEventListener(
        "mousemove",
        (event) => {

            // Disable effect on small screens

            if (
                window.innerWidth <= 760
            ) {
                return;
            }


            const x =
                (window.innerWidth / 2 -
                    event.clientX) /
                80;


            const y =
                (window.innerHeight / 2 -
                    event.clientY) /
                100;


            dashboard.style.transform =
                `rotateY(${x}deg)
                 rotateX(${y}deg)`;

        }
    );


    dashboard.addEventListener(
        "mouseleave",
        () => {

            dashboard.style.transform =
                "rotateY(0deg) rotateX(0deg)";

        }
    );

}


// =========================================
// CURRENT YEAR
// =========================================

const footerYear =
    document.querySelector(
        ".footer-bottom p"
    );


if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Edvora. All rights reserved.`;

}


// =========================================
// PREVENT EMPTY "#" LINKS
// =========================================

const emptyLinks =
    document.querySelectorAll(
        'a[href="#"]'
    );


emptyLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

        }
    );

});


// =========================================
// BUTTON CLICK EFFECT
// =========================================

const actionButtons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn, " +
        ".nav-cta, .cta-button, .form-submit"
    );


actionButtons.forEach((button) => {

    button.addEventListener(
        "mousedown",
        () => {

            button.classList.add(
                "button-pressed"
            );

        }
    );


    button.addEventListener(
        "mouseup",
        () => {

            button.classList.remove(
                "button-pressed"
            );

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.classList.remove(
                "button-pressed"
            );

        }
    );

});


// =========================================
// PAGE LOADED
// =========================================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

        console.log(
            "Edvora website loaded successfully."
        );

    }
);