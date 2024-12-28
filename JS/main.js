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
