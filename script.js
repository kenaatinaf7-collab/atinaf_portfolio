// Mobile Navigation Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu after selecting a navigation link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.textContent = "☰";
        });
    });
}

// Display the Current Year in the Footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
}
// Get the welcome screen elements
const welcomeScreen = document.getElementById("welcomeScreen");
const visitorForm = document.getElementById("visitorForm");
const visitorName = document.getElementById("visitorName");

// Handle the visitor form submission
visitorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the visitor's name
    const name = visitorName.value.trim();

    // Check whether the name is empty
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Hide the welcome screen
    welcomeScreen.classList.add("hidden");

    // Save the name for this browser tab
    sessionStorage.setItem("visitorName", name);

    // Show a personalized welcome message
    alert("Welcome to my portfolio, " + name + "!");
});
// Display the saved visitor name
const savedName = sessionStorage.getItem("visitorName");
const visitorGreeting = document.getElementById("visitorGreeting");

if (savedName && visitorGreeting) {
    visitorGreeting.textContent = "Welcome, " + savedName + "!";
}