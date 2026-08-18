/* =========================================
   EDVORA — BUS & ROUTES
   DAY 4 — JAVASCRIPT PART 3A
   ========================================= */


/* =========================================
   ELEMENTS
   ========================================= */

const busSidebar =
    document.getElementById("bus-sidebar");

const busMenu =
    document.getElementById("bus-menu");

const busClose =
    document.getElementById("bus-close");

const busOverlay =
    document.getElementById("bus-overlay");

const busNavLinks =
    document.querySelectorAll(".bus-nav-link");


/* =========================================
   OPEN SIDEBAR
   ========================================= */

function openBusSidebar() {

    if (!busSidebar) return;

    busSidebar.classList.add("open");

    if (busOverlay) {
        busOverlay.classList.add("active");
    }

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE SIDEBAR
   ========================================= */

function closeBusSidebar() {

    if (!busSidebar) return;

    busSidebar.classList.remove("open");

    if (busOverlay) {
        busOverlay.classList.remove("active");
    }

    document.body.style.overflow = "";
}


/* =========================================
   MOBILE MENU
   ========================================= */

if (busMenu) {

    busMenu.addEventListener(
        "click",
        openBusSidebar
    );

}


if (busClose) {

    busClose.addEventListener(
        "click",
        closeBusSidebar
    );

}


if (busOverlay) {

    busOverlay.addEventListener(
        "click",
        closeBusSidebar
    );

}


/* =========================================
   NAVIGATION
   ========================================= */

busNavLinks.forEach((link) => {

    link.addEventListener(
        "click",
        function () {

            busNavLinks.forEach((item) => {

                item.classList.remove(
                    "active"
                );

            });

            this.classList.add(
                "active"
            );


            if (
                window.innerWidth <= 800
            ) {

                closeBusSidebar();

            }

        }
    );

});


/* =========================================
   VIEW ROUTE BUTTON
   ========================================= */

const viewRouteButton =
    document.getElementById("view-route");


if (viewRouteButton) {

    viewRouteButton.addEventListener(
        "click",
        function () {

            const routeSection =
                document.getElementById(
                    "routes"
                );


            if (routeSection) {

                routeSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

}


/* =========================================
   TRACK BUS BUTTON
   ========================================= */

const trackBusButton =
    document.getElementById("track-bus");


if (trackBusButton) {

    trackBusButton.addEventListener(
        "click",
        function () {

            showBusMessage(
                "Live tracking will be connected with GPS on Day 6."
            );

        }
    );

}


/* =========================================
   BUS MESSAGE
   ========================================= */

function showBusMessage(message) {

    const oldMessage =
        document.querySelector(
            ".bus-js-message"
        );


    if (oldMessage) {
        oldMessage.remove();
    }


    const messageBox =
        document.createElement("div");


    messageBox.className =
        "bus-js-message";


    messageBox.textContent =
        message;


    messageBox.style.position =
        "fixed";

    messageBox.style.left =
        "50%";

    messageBox.style.bottom =
        "25px";

    messageBox.style.transform =
        "translateX(-50%)";

    messageBox.style.zIndex =
        "9999";

    messageBox.style.maxWidth =
        "90%";

    messageBox.style.padding =
        "12px 18px";

    messageBox.style.borderRadius =
        "10px";

    messageBox.style.background =
        "#0f172a";

    messageBox.style.color =
        "#ffffff";

    messageBox.style.fontSize =
        "12px";

    messageBox.style.fontWeight =
        "600";

    messageBox.style.boxShadow =
        "0 10px 30px rgba(15,23,42,.2)";


    document.body.appendChild(
        messageBox
    );


    setTimeout(() => {

        messageBox.style.opacity =
            "0";

        messageBox.style.transition =
            "opacity .3s ease";


        setTimeout(() => {

            messageBox.remove();

        }, 300);

    }, 2500);

}


/* =========================================
   BUS FILTER
   ========================================= */

const busFilter =
    document.getElementById(
        "bus-filter"
    );


let currentBusFilter =
    "all";


if (busFilter) {

    busFilter.addEventListener(
        "click",
        function () {

            if (
                currentBusFilter ===
                "all"
            ) {

                currentBusFilter =
                    "active";

                this.textContent =
                    "Active ✓";

            }

            else if (
                currentBusFilter ===
                "active"
            ) {

                currentBusFilter =
                    "delayed";

                this.textContent =
                    "Delayed ✓";

            }

            else {

                currentBusFilter =
                    "all";

                this.textContent =
                    "Filter ▾";

            }


            filterBusCards();

        }
    );

}


/* =========================================
   FILTER BUS CARDS
   ========================================= */

function filterBusCards() {

    const busCards =
        document.querySelectorAll(
            ".fleet-bus-card"
        );


    busCards.forEach((card) => {

        const status =
            card.dataset.status;


        if (
            currentBusFilter ===
            "all"
        ) {

            card.style.display =
                "grid";

        }

        else if (
            status ===
            currentBusFilter
        ) {

            card.style.display =
                "grid";

        }

        else {

            card.style.display =
                "none";

        }

    });

}


/* =========================================
   BUS VIEW BUTTONS
   ========================================= */

const fleetViewButtons =
    document.querySelectorAll(
        ".fleet-view-button"
    );


fleetViewButtons.forEach((button) => {

    button.addEventListener(
        "click",
        function () {

            const busId =
                this.dataset.bus;


            showBusMessage(
                "Selected bus: " +
                busId
            );

        }
    );

});


/* =========================================
   NOTIFICATION BUTTON
   ========================================= */

const busNotificationButton =
    document.getElementById(
        "bus-notification"
    );


if (busNotificationButton) {

    busNotificationButton.addEventListener(
        "click",
        function () {

            const notificationSection =
                document.getElementById(
                    "notifications"
                );


            if (notificationSection) {

                notificationSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

}


/* =========================================
   LOGOUT
   ========================================= */

const busLogout =
    document.getElementById(
        "bus-logout"
    );


if (busLogout) {

    busLogout.addEventListener(
        "click",
        function () {

            const confirmLogout =
                window.confirm(
                    "Are you sure you want to log out?"
                );


            if (confirmLogout) {

                window.location.href =
                    "auth.html";

            }

        }
    );

}


/* =========================================
   ESCAPE KEY
   ========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeBusSidebar();

        }

    }
);


/* =========================================
   WINDOW RESIZE
   ========================================= */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 800
        ) {

            closeBusSidebar();

        }

    }
);


/* =========================================
   INITIALIZATION
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        filterBusCards();

        console.log(
            "Edvora Bus & Routes initialized."
        );

    }
);
/* =========================================
   EDVORA — BUS & ROUTES
   DAY 4 — JAVASCRIPT PART 3B
   ========================================= */


/* =========================================
   ROUTE STOP INTERACTIONS
   ========================================= */

const routeStops =
    document.querySelectorAll(
        ".route-stop"
    );


routeStops.forEach((stop) => {

    stop.addEventListener(
        "click",
        function () {

            const stopName =
                this.querySelector(
                    "strong"
                );


            const stopTime =
                this.querySelector(
                    "time"
                );


            if (
                !stopName ||
                !stopTime
            ) {
                return;
            }


            showBusMessage(
                stopName.textContent.trim() +
                " • " +
                stopTime.textContent.trim()
            );

        }
    );

});


/* =========================================
   CURRENT BUS STATUS
   ========================================= */

function updateCurrentBusStatus() {

    const status =
        document.querySelector(
            ".bus-status"
        );


    if (!status) {
        return;
    }


    status.textContent =
        "● ON TIME";

    status.classList.add(
        "active"
    );

}


updateCurrentBusStatus();


/* =========================================
   ROUTE PROGRESS
   ========================================= */

const routeProgressBar =
    document.querySelector(
        ".route-progress-bar span"
    );

const routeProgressValue =
    document.querySelector(
        ".route-progress-top > strong"
    );


let routeProgress =
    42;


function setRouteProgress(value) {

    routeProgress =
        Math.max(
            0,
            Math.min(
                100,
                value
            )
        );


    if (routeProgressBar) {

        routeProgressBar.style.width =
            routeProgress + "%";

    }


    if (routeProgressValue) {

        routeProgressValue.textContent =
            routeProgress + "%";

    }

}


setRouteProgress(
    routeProgress
);


/* =========================================
   COMPLETED STOPS COUNT
   ========================================= */

function updateCompletedStops() {

    const completedStops =
        document.querySelectorAll(
            ".route-stop.completed"
        ).length;


    const totalStops =
        document.querySelectorAll(
            ".route-stop"
        ).length;


    const progressText =
        document.querySelector(
            ".route-progress-top span"
        );


    if (!progressText) {
        return;
    }


    progressText.textContent =
        completedStops +
        " of " +
        totalStops +
        " stops completed";

}


updateCompletedStops();


/* =========================================
   NOTIFICATION ITEMS
   ========================================= */

const transportNotifications =
    document.querySelectorAll(
        ".bus-notification-item"
    );


transportNotifications.forEach(
    (notification) => {

        notification.style.cursor =
            "pointer";


        notification.addEventListener(
            "click",
            function () {

                this.style.opacity =
                    "0.65";


                setTimeout(() => {

                    this.style.opacity =
                        "1";

                }, 200);


            }
        );

    }
);


/* =========================================
   HEADER NOTIFICATION DOT
   ========================================= */

function markNotificationsSeen() {

    const notificationDot =
        document.querySelector(
            ".bus-notification-button i"
        );


    if (notificationDot) {

        notificationDot.style.display =
            "none";

    }

}


if (busNotificationButton) {

    busNotificationButton.addEventListener(
        "click",
        markNotificationsSeen
    );

}


/* =========================================
   NEXT STOP HIGHLIGHT
   ========================================= */

function highlightCurrentStop() {

    const currentStop =
        document.querySelector(
            ".route-stop.current"
        );


    if (!currentStop) {
        return;
    }


    currentStop.style.transition =
        "box-shadow .3s ease";


    currentStop.style.boxShadow =
        "0 0 0 3px rgba(37,99,235,.06)";

}


highlightCurrentStop();


/* =========================================
   BUS CARD HOVER ACCESSIBILITY
   ========================================= */

const fleetCards =
    document.querySelectorAll(
        ".fleet-bus-card"
    );


fleetCards.forEach((card) => {

    card.setAttribute(
        "tabindex",
        "0"
    );


    card.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "Enter"
            ) {

                const viewButton =
                    this.querySelector(
                        ".fleet-view-button"
                    );


                if (viewButton) {

                    viewButton.click();

                }

            }

        }
    );

});


/* =========================================
   LIVE CLOCK
   ========================================= */

function updateBusClock() {

    const clockElements =
        document.querySelectorAll(
            "[data-bus-time]"
        );


    if (
        clockElements.length === 0
    ) {
        return;
    }


    const now =
        new Date();


    let hours =
        now.getHours();


    const minutes =
        String(
            now.getMinutes()
        ).padStart(
            2,
            "0"
        );


    const period =
        hours >= 12
            ? "PM"
            : "AM";


    hours =
        hours % 12 || 12;


    const time =
        hours +
        ":" +
        minutes +
        " " +
        period;


    clockElements.forEach(
        (element) => {

            element.textContent =
                time;

        }
    );

}


updateBusClock();


setInterval(
    updateBusClock,
    30000
);


/* =========================================
   PAGE VISIBILITY
   ========================================= */

document.addEventListener(
    "visibilitychange",
    function () {

        if (
            document.hidden
        ) {

            console.log(
                "Edvora bus page paused."
            );

        }

        else {

            console.log(
                "Edvora bus page resumed."
            );

            updateBusClock();

        }

    }
);


/* =========================================
   FINAL PAGE CHECK
   ========================================= */

function initializeBusPage() {

    updateCompletedStops();

    updateCurrentBusStatus();

    highlightCurrentStop();

    filterBusCards();

    updateBusClock();


    console.log(
        "✓ Edvora Bus & Routes page ready."
    );

}


if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeBusPage
    );

}

else {

    initializeBusPage();

}