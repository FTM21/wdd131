

// Dynamic Object Array Specifications
const products = [
    { id: "gtc-itc-modules", name: "ITC SME Trade Academy Modules" },
    { id: "gtc-a2m-navigator", name: "Access2Markets Database Navigator" },
    { id: "gtc-readiness-quiz", name: "60-Question Operational Diagnostic Matrix" },
    { id: "gtc-compliance-audit", name: "International Customs & Tariff Compliance Planner" },
    { id: "gtc-logistics-consult", name: "SME Supply Chain & Freight Optimizer" }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");
    const reviewForm = document.getElementById("product-review-form");
    const counterDisplay = document.getElementById("review-counter-display");

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

    // Read counter tracking arrays out of local persistent storage
    let currentCompletedReviewsCount = parseInt(localStorage.getItem("completedReviews"), 10) || 0;
    if (counterDisplay) {
        counterDisplay.textContent = currentCompletedReviewsCount.toString();
    }

    // Capture standard form execution matrix safely
    if (reviewForm) {
        reviewForm.addEventListener("submit", () => {
            currentCompletedReviewsCount += 1;
            localStorage.setItem("completedReviews", currentCompletedReviewsCount.toString());
        });
    }
});