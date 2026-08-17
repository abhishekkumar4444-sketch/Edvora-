// =========================================
// EDVORA DASHBOARD
// DAY 3 — JAVASCRIPT PART 3A
// =========================================


// =========================================
// SELECT ELEMENTS
// =========================================

const sidebar =
    document.querySelector("#sidebar");

const menuButton =
    document.querySelector("#menu-button");

const sidebarClose =
    document.querySelector("#sidebar-close");

const sidebarOverlay =
    document.querySelector("#sidebar-overlay");

const navLinks =
    document.querySelectorAll(".nav-link");


// =========================================
// OPEN MOBILE SIDEBAR
// =========================================

function openSidebar() {

    if (!sidebar) {
        return;
    }

    sidebar.classList.add("open");

    if (sidebarOverlay) {
        sidebarOverlay.classList.add(
            "active"
        );
    }

    document.body.style.overflow =
        "hidden";
}


// =========================================
// CLOSE MOBILE SIDEBAR
// =========================================

function closeSidebar() {

    if (!sidebar) {
        return;
    }

    sidebar.classList.remove("open");

    if (sidebarOverlay) {
        sidebarOverlay.classList.remove(
            "active"
        );
    }

    document.body.style.overflow =
        "";
}


// =========================================
// MENU BUTTON
// =========================================

if (menuButton) {

    menuButton.addEventListener(
        "click",
        openSidebar
    );

}


// =========================================
// CLOSE BUTTON
// =========================================

if (sidebarClose) {

    sidebarClose.addEventListener(
        "click",
        closeSidebar
    );

}


// =========================================
// OVERLAY
// =========================================

if (sidebarOverlay) {

    sidebarOverlay.addEventListener(
        "click",
        closeSidebar
    );

}


// =========================================
// NAVIGATION
// =========================================

navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            // Remove active state

            navLinks.forEach((item) => {

                item.classList.remove(
                    "active"
                );

            });


            // Add active state

            link.classList.add(
                "active"
            );


            // Close mobile sidebar

            if (
                window.innerWidth <= 800
            ) {

                closeSidebar();

            }

        }
    );

});


// =========================================
// NOTIFICATION BUTTON
// =========================================

const notificationButton =
    document.querySelector(
        "#notification-button"
    );


if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        () => {

            const notifications =
                document.querySelector(
                    "#notifications"
                );


            if (notifications) {

                notifications.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

}


// =========================================
// VIEW ALL NOTIFICATIONS
// =========================================

const viewNotifications =
    document.querySelector(
        "#view-all-notifications"
    );


if (viewNotifications) {

    viewNotifications.addEventListener(
        "click",
        () => {

            alert(
                "Notifications center will be connected in a future Edvora update."
            );

        }
    );

}


// =========================================
// CONTACT DRIVER
// =========================================

const contactDriver =
    document.querySelector(
        "#contact-driver"
    );


if (contactDriver) {

    contactDriver.addEventListener(
        "click",
        () => {

            alert(
                "Driver contact will be available after the Edvora communication system is connected."
            );

        }
    );

}


// =========================================
// QUICK ACTIONS
// =========================================

const quickActions =
    document.querySelectorAll(
        ".quick-action"
    );


quickActions.forEach((action) => {

    action.addEventListener(
        "click",
        () => {

            const actionType =
                action.dataset.action;


            handleQuickAction(
                actionType
            );

        }
    );

});


// =========================================
// QUICK ACTION HANDLER
// =========================================

function handleQuickAction(
    actionType
) {

    switch (actionType) {


        case "track":

            alert(
                "Live bus tracking will be connected with GPS on Day 6."
            );

            break;


        case "route":

            const routeSection =
                document.querySelector(
                    "#route"
                );


            if (routeSection) {

                routeSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

            break;


        case "report":

            alert(
                "The issue reporting system will be connected with the admin dashboard later."
            );

            break;


        default:

            console.log(
                "Unknown Edvora action:",
                actionType
            );

    }

}


// =========================================
// LOGOUT BUTTON
// =========================================

const logoutButton =
    document.querySelector(
        "#logout-button"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        () => {

            const confirmLogout =
                confirm(
                    "Are you sure you want to log out?"
                );


            if (confirmLogout) {

                window.location.href =
                    "auth.html";

            }

        }
    );

}


// =========================================
// PROFILE BUTTON
// =========================================

const profileButton =
    document.querySelector(
        "#profile-button"
    );


if (profileButton) {

    profileButton.addEventListener(
        "click",
        () => {

            const profileSection =
                document.querySelector(
                    "#profile"
                );


            if (profileSection) {

                profileSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

}


// =========================================
// WINDOW RESIZE
// =========================================

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 800
        ) {

            closeSidebar();

        }

    }
);
// =========================================
// EDVORA DASHBOARD
// DAY 3 — JAVASCRIPT PART 3B
// =========================================


// =========================================
// NOTIFICATION ITEMS
// =========================================

const notificationItems =
    document.querySelectorAll(
        ".notification-item"
    );


notificationItems.forEach((item) => {

    item.addEventListener(
        "click",
        () => {

            item.classList.remove(
                "unread"
            );


            const unreadDot =
                item.querySelector(
                    ".unread-dot"
                );


            if (unreadDot) {

                unreadDot.remove();

            }

        }
    );

});


// =========================================
// UPDATE NOTIFICATION COUNT
// =========================================

function updateNotificationCount() {

    const unreadItems =
        document.querySelectorAll(
            ".notification-item.unread"
        );


    const badge =
        document.querySelector(
            ".nav-badge"
        );


    if (!badge) {
        return;
    }


    if (unreadItems.length === 0) {

        badge.style.display =
            "none";

    } else {

        badge.style.display =
            "grid";

        badge.textContent =
            unreadItems.length;

    }

}


updateNotificationCount();


// =========================================
// ACTIVE NAVIGATION ON SCROLL
// =========================================

const sections = [
    "overview",
    "my-bus",
    "route",
    "notifications",
    "profile"
];


function updateActiveNavigation() {

    let currentSection =
        "overview";


    const scrollPosition =
        window.scrollY + 160;


    sections.forEach((sectionId) => {

        const section =
            document.getElementById(
                sectionId
            );


        if (!section) {
            return;
        }


        if (
            scrollPosition >=
            section.offsetTop
        ) {

            currentSection =
                sectionId;

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove(
            "active"
        );


        if (
            link.dataset.page ===
            currentSection
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


// =========================================
// SMOOTH ANCHOR NAVIGATION
// =========================================

navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute(
                    "href"
                );


            if (
                !targetId ||
                !targetId.startsWith("#")
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


// =========================================
// ROUTE PROGRESS DEMO
// =========================================

const progressBar =
    document.querySelector(
        ".progress-bar span"
    );


const progressText =
    document.querySelector(
        ".progress-header strong"
    );


let routeProgress = 38;


function updateRouteProgress() {

    if (routeProgress >= 100) {

        routeProgress = 100;

    }


    if (progressBar) {

        progressBar.style.width =
            routeProgress + "%";

    }


    if (progressText) {

        progressText.textContent =
            routeProgress + "%";

    }

}


// Initial value

updateRouteProgress();


// =========================================
// SIMULATED BUS STATUS
// =========================================

const busStatus =
    document.querySelector(
        ".status-pill.online"
    );


if (busStatus) {

    busStatus.title =
        "Bus is currently running on schedule.";

}


// =========================================
// CURRENT TIME
// =========================================

function updateDashboardTime() {

    const timeElements =
        document.querySelectorAll(
            "[data-current-time]"
        );


    if (
        timeElements.length === 0
    ) {

        return;

    }


    const now =
        new Date();


    const hours =
        String(
            now.getHours()
        ).padStart(2, "0");


    const minutes =
        String(
            now.getMinutes()
        ).padStart(2, "0");


    const currentTime =
        `${hours}:${minutes}`;


    timeElements.forEach(
        (element) => {

            element.textContent =
                currentTime;

        }
    );

}


updateDashboardTime();


// =========================================
// KEYBOARD ACCESSIBILITY
// =========================================

document.addEventListener(
    "keydown",
    (event) => {

        // Escape closes mobile sidebar

        if (
            event.key === "Escape"
        ) {

            closeSidebar();

        }

    }
);


// =========================================
// PAGE INITIALIZATION
// =========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateActiveNavigation();

        updateNotificationCount();

        updateRouteProgress();

        console.log(
            "Edvora Dashboard initialized successfully."
        );

    }
);