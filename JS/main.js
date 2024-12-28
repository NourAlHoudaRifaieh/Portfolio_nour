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


