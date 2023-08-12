// When the document content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve data from local storage and update the summary table on details.html
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

document.addEventListener("DOMContentLoaded", function () {
    // Get the purchase form element
    const purchaseForm = document.getElementById("purchaseForm");

    // Function to check if a name is valid (only letters and spaces)
    function isValidName(name) {
        const namePattern = /^[A-Za-z\s]+$/;
        return namePattern.test(name);                              //VALIDATIONS!!!!!!!
    }

    // Function to check if a mobile number is valid (exactly 10 digits)
    function isValidMobileNumber(number) {
        const mobilePattern = /^[0-9]{10}$/;
        return mobilePattern.test(number);                          //VALIDATIONS!!!!!!!
    }

    // Function to check if an email is valid
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);                            //VALIDATIONS!!!!!!!
    }

    // Listen for the form submission event
    purchaseForm.addEventListener("submit", function (event) {
        event.preventDefault();                                     //VALIDATIONS!!!!!!!
        // Prevent the default form submission behavior

        // Get form field values
        const fullName = document.getElementById("fullName").value;
        const mobileNumber = document.getElementById("mobileNumber").value;
        const email = document.getElementById("email").value;                  //VALIDATIONS!!!!!!!
        const confirmEmail = document.getElementById("confirmEmail").value;
        const gender = document.getElementById("gender").value;

        // Validate form data
        if (!isValidName(fullName)) {
            alert("Please enter a valid Full Name.");
            return;
        }

        if (!isValidMobileNumber(mobileNumber)) {
            alert("Please enter a valid Mobile Number.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid Email ID.");
            return;
        }

        if (!isValidEmail(confirmEmail)) {
            alert("Please enter a valid Confirm Email ID.");
            return;
        }

        if (email !== confirmEmail) {
            alert("Email addresses do not match.");
            return;
        }

        // Create a form data object
        const formData = {
            fullName,
            mobileNumber,
            email,
            gender
        };

        // Store the form data in local storage
        localStorage.setItem("purchaseFormData", JSON.stringify(formData));
        
        // Redirect to the paying page or the next step
        window.location.href = "./paymentt.html";
    });
});
