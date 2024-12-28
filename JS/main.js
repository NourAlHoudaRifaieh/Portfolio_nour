document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioBoxes = document.querySelectorAll(".portfolio-box");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Filter portfolio items
            portfolioBoxes.forEach(box => {
                if (filter === "all" || box.getAttribute("data-category") === filter) {
                    box.style.display = "block"; // Show matching items
                } else {
                    box.style.display = "none"; // Hide non-matching items
                }
            });
        });
    });
});


// This code for the popup modal for the portfolio section when i click on any project it will open the popup 
// and show the details of this project 
document.addEventListener("DOMContentLoaded", () => {
    const portfolioBoxes = document.querySelectorAll(".portfolio-box");
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDetails = document.getElementById("modalDetails");
    const modalFramework = document.getElementById("modalFramework");
    const modalLanguage = document.getElementById("modalLanguage");
    const modalOther = document.getElementById("modalOther");
    const closeModal = document.querySelector(".close");

    // Add event listener to each portfolio box
    portfolioBoxes.forEach(box => {
        box.addEventListener("click", () => {
            // Fetch data from attributes
            const title = box.getAttribute("data-title");
            const details = box.getAttribute("data-details");
            const framework = box.getAttribute("data-framework");
            const language = box.getAttribute("data-language");
            const other = box.getAttribute("data-other");

            // Populate modal with project details
            modalTitle.textContent = title;
            modalDetails.textContent = details;
            modalFramework.textContent = framework;
            modalLanguage.textContent = language;
            modalOther.textContent = other;

            // Show the modal
            modal.style.display = "flex";
        });
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
