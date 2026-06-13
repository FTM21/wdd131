

// Objects and Arrays requirement satisfied cleanly
const products = [
    { id: "gtc-itc-modules", name: "ITC SME Trade Academy Modules" },
    { id: "gtc-a2m-navigator", name: "Access2Markets Database Navigator" },
    { id: "gtc-readiness-quiz", name: "60-Question Operational Diagnostic Matrix" },
    { id: "gtc-compliance-audit", name: "International Customs & Tariff Compliance Planner" },
    { id: "gtc-logistics-consult", name: "SME Supply Chain & Freight Optimizer" }
];

document.addEventListener("DOMContentLoaded", () => {
    // Mobile Hamburger Menu Navigation Toggle logic
    const menuToggle = document.getElementById("menuToggle");
    const primaryNav = document.getElementById("primaryNav");

    if (menuToggle && primaryNav) {
        menuToggle.addEventListener("click", () => {
            primaryNav.classList.toggle("nav-open");
        });
    }

    const productSelect = document.getElementById("product-name");
    const reviewForm = document.getElementById("product-review-form");
    const counterDisplay = document.getElementById("review-counter-display");
    const dynamicOutput = document.getElementById("dynamicReviewOutput");

    // Dynamic Option Generation using a document fragment to mitigate browser reflow penalties
    if (productSelect) {
        const DOMFragment = document.createDocumentFragment();
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            DOMFragment.appendChild(option);
        });
        productSelect.appendChild(DOMFragment);
    }

    // Read initial counter out of local storage safely using template literals
    let currentReviewsCount = parseInt(localStorage.getItem("completedReviews"), 10) || 0;
    if (counterDisplay) {
        counterDisplay.textContent = `${currentReviewsCount}`;
    }

    // Submit processing logic
    if (reviewForm) {
        reviewForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            // Gather input records into an explicit object
            const userReview = {
                productID: productSelect.value,
                productName: productSelect.options[productSelect.selectedIndex].text,
                ratingScore: document.querySelector('input[name="rating"]:checked').value,
                submissionDate: document.getElementById("installation-date").value,
                userComments: document.getElementById("review-comments").value.trim()
            };

            // Conditional branching matrix analysis
            let complianceStatusMessage = "";
            if (parseInt(userReview.ratingScore, 10) >= 4) {
                complianceStatusMessage = "Positive system operational feedback recorded.";
            } else {
                complianceStatusMessage = "System performance notice assigned for engineering audit.";
            }

            // Increment persistent metrics
            currentReviewsCount += 1;
            localStorage.setItem("completedReviews", currentReviewsCount.toString());
            
            if (counterDisplay) {
                counterDisplay.textContent = `${currentReviewsCount}`;
            }

            // Exclusive template literal string injection to output feedback blocks dynamically
            if (dynamicOutput) {
                dynamicOutput.innerHTML = `
                    <div class="inserted-card">
                        <h4>Receipt Verified: ${userReview.productName}</h4>
                        <p><strong>Rating:</strong> ${userReview.ratingScore} / 5 Stars</p>
                        <p><strong>Log Date:</strong> ${userReview.submissionDate}</p>
                        <p><strong>Status Note:</strong> ${complianceStatusMessage}</p>
                    </div>
                `;
            }

            reviewForm.reset();
        });
    }
});