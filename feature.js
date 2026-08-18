/* =========================================
   EDVORA — FEATURES PAGE
   JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       ELEMENTS
       ===================================== */

    const menuButton =
        document.getElementById("features-menu");

    const navLinks =
        document.getElementById("features-nav-links");

    const overlay =
        document.getElementById("features-overlay");


    /* =====================================
       MOBILE MENU
       ===================================== */

    function openMenu() {

        if (!navLinks) return;

        navLinks.classList.add("mobile-open");

        if (overlay) {
            overlay.style.display = "block";
        }

        document.body.style.overflow = "hidden";
    }


    function closeMenu() {

        if (!navLinks) return;

        navLinks.classList.remove("mobile-open");

        if (overlay) {
            overlay.style.display = "none";
        }

        document.body.style.overflow = "";
    }


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    navLinks.classList.contains(
                        "mobile-open"
                    );

                if (isOpen) {
                    closeMenu();
                } else {
                    openMenu();
                }

            }
        );

    }


    /* =====================================
       CLOSE MENU WHEN OVERLAY IS CLICKED
       ===================================== */

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeMenu
        );

    }


    /* =====================================
       CLOSE MENU AFTER NAVIGATION
       ===================================== */

    if (navLinks) {

        const links =
            navLinks.querySelectorAll("a");

        links.forEach(link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });

    }


    /* =====================================
       SMOOTH INTERNAL LINKS
       ===================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(link => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================
       FEATURE CARD INTERACTION
       ===================================== */

    const featureCards =
        document.querySelectorAll(
            ".feature-card"
        );


    featureCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.transform =
                    "translateY(-5px)";

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


    /* =====================================
       CURRENT YEAR
       ===================================== */

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );


    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================
       SIMPLE SCROLL REVEAL
       ===================================== */

    const revealElements =
        document.querySelectorAll(
            ".feature-card, " +
            ".workflow-item, " +
            ".security-card, " +
            ".contact-card"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
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


        revealElements.forEach(element => {

            observer.observe(element);

        });

    }


    /* =====================================
       ESC KEY — CLOSE MOBILE MENU
       ===================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================
       SCREEN SIZE CHECK
       ===================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 700
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================
       PAGE LOADED
       ===================================== */

    console.log(
        "Edvora Features page loaded successfully."
    );

});