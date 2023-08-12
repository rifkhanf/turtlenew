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
    }

    // Retrieve data from local storage and update the summary table
    const storedSummaryDate = localStorage.getItem("summaryDate");
    const storedSummaryTime = localStorage.getItem("summaryTime");
    const storedSummaryDuration = localStorage.getItem("summaryDuration");
    const storedSummaryTickets = localStorage.getItem("summaryTickets");
    const storedSummaryTotal = localStorage.getItem("summaryTotal");

    // If summary data is available in local storage, update the summary table
    if (storedSummaryDate && storedSummaryTime && storedSummaryDuration && storedSummaryTickets && storedSummaryTotal) {
        document.getElementById("summaryDate").textContent = storedSummaryDate;
        document.getElementById("summaryTime").textContent = storedSummaryTime;
        document.getElementById("summaryDuration").textContent = storedSummaryDuration;
        document.getElementById("summaryTickets").innerHTML = storedSummaryTickets;
        document.getElementById("summaryTotal").textContent = storedSummaryTotal;
    }
});

// Get references to form elements and pay button
const creditCardForm = document.getElementById("creditCardForm");
const cardNumberInput = document.getElementById("cardNumber");
const expiryDateInput = document.getElementById("expiryDate");
const cvcInput = document.getElementById("cvc");
const nameOnCardInput = document.getElementById("nameOnCard");
const payButton = document.getElementById("payButton");

// Listen for input events on the credit card form
creditCardForm.addEventListener("input", function () {
    // Check validity of input fields and additional validations
    const isCardNumberValid = cardNumberInput.checkValidity() && cardNumberInput.value.length === 16;
    const isCvcValid = cvcInput.checkValidity() && (cvcInput.value.length === 3 || cvcInput.value.length === 4);
    const isNameValid = nameOnCardInput.checkValidity();
    const isExpiryValid = expiryDateInput.checkValidity();

    // Display validation messages
    document.getElementById("cardNumberError").textContent = isCardNumberValid ? "" : "Please enter a valid 16-digit card number.";
    document.getElementById("cvcError").textContent = isCvcValid ? "" : "Please enter a valid 3 or 4-digit CVC/CVV number.";
    document.getElementById("nameOnCardError").textContent = isNameValid ? "" : "Please enter a valid name.";
    document.getElementById("expiryDateError").textContent = isExpiryValid ? "" : "Please enter a valid expiry date (MM/YY).";

    // Enable/disable pay button
    if (isCardNumberValid && isExpiryValid && isCvcValid && isNameValid) {
        payButton.removeAttribute("disabled");
    } else {
        payButton.setAttribute("disabled", "disabled");
    }
    
});

// Listen for form submission on the credit card form
creditCardForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the form data
    const formData = {
        cardNumber: cardNumberInput.value,
        expiryDate: expiryDateInput.value,
        cvc: cvcInput.value,
        nameOnCard: nameOnCardInput.value
    };

    // Save the form data to local storage
    localStorage.setItem("paymentFormData", JSON.stringify(formData));

    // Perform payment processing logic here if needed

    // Redirect to the confirmation page
    window.location.href = "./confirmation.html"; // Replace with the actual URL of your confirmation page
});

