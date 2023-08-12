// When the document content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve form data from local storage
    const storedFormData = localStorage.getItem("purchaseFormData");

    // If form data is available in local storage, populate payment details
    if (storedFormData) {
        const formData = JSON.parse(storedFormData);
        document.getElementById("paymentName").textContent = formData.fullName;
        document.getElementById("paymentMobile").textContent = formData.mobileNumber;
        document.getElementById("paymentEmail").textContent = formData.email;
        document.getElementById("paymentGender").textContent = formData.gender;

        // Retrieve data from local storage and update the summary table
        const storedSummaryDate = localStorage.getItem("summaryDate");
        const storedSummaryTime = localStorage.getItem("summaryTime");
        const storedSummaryTotal = localStorage.getItem("summaryTotal");

        // If summary data is available in local storage, update the summary table
        if (storedSummaryDate && storedSummaryTime && storedSummaryTotal) {
            document.getElementById("summaryDate").textContent = storedSummaryDate;
            document.getElementById("summaryTime").textContent = storedSummaryTime;
            document.getElementById("summaryTotal").textContent = storedSummaryTotal;
        }
    }
});

// ... (remaining code)
 // Retrieve the reference code from local storage or initialize it as 1
 let referenceCode = parseInt(localStorage.getItem("referenceCode")) || 1;

 // Display the reference code on the page
 document.getElementById("referenceCode").textContent = referenceCode;

 // Increment the reference code for the next visit and store it in local storage
 referenceCode++;
 localStorage.setItem("referenceCode", referenceCode);
