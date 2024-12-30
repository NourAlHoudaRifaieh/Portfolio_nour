// this code for the  filter filterable portfolio section 
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioBoxes = document.querySelectorAll(".portfolio-box");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            // Filter portfolio items
            portfolioBoxes.forEach(box => {
                if (filter === "all" || box.getAttribute("data-category") === filter) {
                    box.style.display = "block"; 
                } else {
                    box.style.display = "none"; 
                }
            });
        });
    });
});
/************This code for the popup modal for the portfolio section when i click on any project it 
* will open the popup and show the details of this project**************************************/
document.addEventListener("DOMContentLoaded", () => {
    const portfolioBoxes = document.querySelectorAll(".portfolio-box");
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDetails = document.getElementById("modalDetails");
    const modalInfo = document.getElementById("modalInfo");
    const modalFramework = document.getElementById("modalFramework");
    const modalLanguage = document.getElementById("modalLanguage");
    const modalOther = document.getElementById("modalOther");
    const closeModal = document.querySelector(".modal .close");
    // Show modal with content
    portfolioBoxes.forEach(box => {
        box.addEventListener("click", () => {
            const title = box.getAttribute("data-title");
            const details = box.getAttribute("data-details");
            const info = box.getAttribute("data-info");
            const framework = box.getAttribute("data-framework");
            const language = box.getAttribute("data-language");
            const other = box.getAttribute("data-other");
            // Populate modal content
            modalTitle.textContent = title;
            modalDetails.textContent = details;
            modalInfo.textContent = info;
            modalFramework.textContent = framework;
            modalLanguage.textContent = language;
            modalOther.textContent = other;
            // Show modal
            modal.style.display = "flex";
        });
    });
    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
    // Close modal when clicking outside the content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
/***************This code for  Create a smooth scroll effect for internal links*******************/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth", // Smooth scrolling
            block: "start"      // Align to the top of the section
        });
    });
});
/**************Responsive Menu Toggle*******************/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
     navbar.classList.toggle('active');
});
/************this code for the validation form of contact section ******************/
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission to server for validation
    const fullName = document.getElementById('fullName').value.trim();
    const emailAddress = document.getElementById('emailAddress').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!fullName) {
        alert('Full Name is required');
        return;
    }
    if (!validateFullName(fullName)) {
        alert('Full Name should only contain letters and spaces');
        return;
    }
    if (!validateEmail(emailAddress)) {
        alert('Please enter a valid email address');
        return;
    }
    if (!message) {
        alert('Message cannot be empty');
        return;
    }
    alert('Form submitted successfully!'); 
});
//Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Correct pattern
    return emailPattern.test(email);
}
// Full Name validation function (letters and spaces only)
function validateFullName(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}
/********this code for navbar to chnage the color when it will be active************/ 
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});
/**********this code for dark mood**************/ 
const darkModeToggle = document.getElementById('darkModeToggle');
const root = document.documentElement;
// Load saved preference from localStorage
if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️'; // Update icon for dark mode
}
// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    root.classList.toggle('dark-mode');
    const theme = root.classList.contains('dark-mode') ? 'dark' : 'light';
    darkModeToggle.textContent = theme === 'dark' ? '☀️' : '🌙'; // Update icon dynamically
    localStorage.setItem('theme', theme); // Save preference
});
/**************Remove the preloader after the site loads************/
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0'; // Fade-out effect
    setTimeout(() => {
        preloader.style.display = 'none'; // Hide completely
    }, 500); // Adjust the timeout to match the fade-out duration
});