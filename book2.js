document.addEventListener("DOMContentLoaded", function () {
    // Function to calculate the total payable based on user inputs. Total payable is checked from the number of guests user adds
    function calculateTotalPayable() {
      // Retrieve the number of tickets selected for each category
      const slAdultTickets = parseInt(document.getElementById("slAdult").value) || 0;   //getting the number of tickets of SLAdults
      const slChildTickets = parseInt(document.getElementById("slChild").value) || 0;   //getting the number of tickets of SLChild
      const foreignerAdultTickets = parseInt(document.getElementById("foreignerAdult").value) || 0;   //getting the number of tickets of ForeignAdult
      const foreignerChildTickets = parseInt(document.getElementById("foreignerChild").value) || 0;   //getting the number of tickets of ForeignChild
      const infantTickets = parseInt(document.getElementById("infant").value) || 0;   //No need to add because always it is zero
  

      //This is to ensure that previous dates cannot be used
    const visitDateInput = document.getElementById("visitDate");  
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();



    // Ensure that month and day are always two digits
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;      //Got this code from codecomputing.org
    }

    const minDate = `${year}-${month}-${day}`;
    visitDateInput.setAttribute("min", minDate);
  


      // Retrieve the selected time slot
      const selectedTimeSlot = document.getElementById("timeSlot").value;  //Getting the time slot
      const isPeakHour = selectedTimeSlot >= "10-11" && selectedTimeSlot <= "17-18" || selectedTimeSlot === "05-06"; //Is peak hour is a boolean. This is a boolean expression.. If the times are chosen it will find out if it is peak or not
  
      // Retrieve the pricing details for each ticket type
      const slAdultNormalCharge = 4;   //Getting all the prices to be saved as constants.. This will never change. Thats why used const
      const slAdultPeakCharge = 6;      //Getting all the prices to be saved as constants.. This will never change. Thats why used const
      const slChildNormalCharge = 2;      //Getting all the prices to be saved as constants.. This will never change. Thats why used const
      const slChildPeakCharge = 3;           //Getting all the prices to be saved as constants.. This will never change. Thats why used const
      const foreignerAdultNormalCharge = 10;  //Getting all the prices to be saved as constants.. This will never change. Thats why used const
      const foreignerAdultPeakCharge = 13;  //Getting all the prices to be saved as constants.. This will never change. Thats why used const
      const foreignerChildNormalCharge = 5;   //Getting all the prices to be saved as constants.. This will never change. Thats why used const
      const foreignerChildPeakCharge = 8;   //Getting all the prices to be saved as constants.. This will never change. Thats why used const
  
      // Calculate the total payable amount
      const totalPayable =  //Keeping a variable as totalPayable to find. Here a multiplication is done
        slAdultTickets * (isPeakHour ? slAdultPeakCharge : slAdultNormalCharge) + //slAdultTicket* Checking if peak hour, if no slAdultNormalCharge.
        slChildTickets * (isPeakHour ? slChildPeakCharge : slChildNormalCharge) + //same for this
        foreignerAdultTickets * (isPeakHour ? foreignerAdultPeakCharge : foreignerAdultNormalCharge) +   //Same for this
        foreignerChildTickets * (isPeakHour ? foreignerChildPeakCharge : foreignerChildNormalCharge);    //Same for this
  
      return totalPayable;   //Getting the final anser ,,.. The variables answer is shown here

    }
  
    // Function to update the summary table based on user inputs
    function updateSummary() {   //A function is given for each variable here
      const visitDate = document.getElementById("visitDate").value;
      const selectedTimeSlot = document.getElementById("timeSlot").value;
      const isPeakHour = selectedTimeSlot >= "10-11" && selectedTimeSlot <= "17-18" || selectedTimeSlot === "05-06";
  
      const summaryDateCell = document.getElementById("summaryDate");
      const summaryTimeCell = document.getElementById("summaryTime");
      const summaryDurationCell = document.getElementById("summaryDuration");
      const summaryTicketsCell = document.getElementById("summaryTickets");
      const summaryTotalCell = document.getElementById("summaryTotal");
  
      summaryDateCell.textContent = visitDate;
      summaryTimeCell.textContent = selectedTimeSlot;
      summaryDurationCell.textContent = `1 hrs (${isPeakHour ? "0 Peak" : "01 Normal"})`;
  
      const slAdultTickets = parseInt(document.getElementById("slAdult").value) || 0;
      const slChildTickets = parseInt(document.getElementById("slChild").value) || 0;
      const foreignerAdultTickets = parseInt(document.getElementById("foreignerAdult").value) || 0;
      const foreignerChildTickets = parseInt(document.getElementById("foreignerChild").value) || 0;
      const infantTickets = parseInt(document.getElementById("infant").value) || 0;
  
      summaryTicketsCell.innerHTML = `
        ${slAdultTickets} SL Adult $${slAdultTickets * (isPeakHour ? 6 : 4)}<br>
        ${slChildTickets} SL Child $${slChildTickets * (isPeakHour ? 3 : 2)}<br>
        ${foreignerAdultTickets} Foreigner Adult $${foreignerAdultTickets * (isPeakHour ? 13 : 10)}<br>
        ${foreignerChildTickets} Foreigner Child $${foreignerChildTickets * (isPeakHour ? 8 : 5)}<br>
        ${infantTickets} Infant Free
      `;
  
      const totalPayable = calculateTotalPayable();
      summaryTotalCell.textContent = `$${totalPayable}`;
  
      // Store the summary table values in the browser's local storage
      localStorage.setItem("summaryDate", visitDate);
      localStorage.setItem("summaryTime", selectedTimeSlot);
      localStorage.setItem("summaryDuration", `1 hrs (${isPeakHour ? "0 Peak" : "01 Normal"})`);
      localStorage.setItem("summaryTickets", summaryTicketsCell.innerHTML);
      localStorage.setItem("summaryTotal", `$${totalPayable}`);
  
      // Enable or disable the "Continue with purchase" button based on user inputs
      const continueButton = document.getElementById("continueButton");
      continueButton.enable = totalPayable >= 0;
    }
  
    // Retrieve data from local storage and update the summary table
    const storedSummaryDate = localStorage.getItem("summaryDate");
    const storedSummaryTime = localStorage.getItem("summaryTime");
    const storedSummaryDuration = localStorage.getItem("summaryDuration");
    const storedSummaryTickets = localStorage.getItem("summaryTickets");
    const storedSummaryTotal = localStorage.getItem("summaryTotal");
  
    if (storedSummaryDate && storedSummaryTime && storedSummaryDuration && storedSummaryTickets && storedSummaryTotal) {
      document.getElementById("summaryDate").textContent = storedSummaryDate;
      document.getElementById("summaryTime").textContent = storedSummaryTime;
      document.getElementById("summaryDuration").textContent = storedSummaryDuration;
      document.getElementById("summaryTickets").innerHTML = storedSummaryTickets;
      document.getElementById("summaryTotal").textContent = storedSummaryTotal;
    }
  
    // Add event listeners to the input elements
    document.getElementById("visitDate").addEventListener("change", updateSummary);
    document.getElementById("timeSlot").addEventListener("change", updateSummary);
    document.getElementById("slAdult").addEventListener("input", updateSummary);
    document.getElementById("slChild").addEventListener("input", updateSummary);
    document.getElementById("foreignerAdult").addEventListener("input", updateSummary);
    document.getElementById("foreignerChild").addEventListener("input", updateSummary);
    document.getElementById("infant").addEventListener("input", updateSummary);
  
    // Add event listeners to increment and decrement buttons
    const incrementButtons = document.querySelectorAll(".increment");
    const decrementButtons = document.querySelectorAll(".decrement");
  
    //This is for the increment function input box
    function handleIncrement(event) {
      const inputElement = event.target.parentElement.querySelector("input");
      inputElement.value = parseInt(inputElement.value) + 1;
      updateSummary();
    }
    //This is for the decrement function input box
    function handleDecrement(event) {
      const inputElement = event.target.parentElement.querySelector("input");
      const currentValue = parseInt(inputElement.value);
      inputElement.value = currentValue > 0 ? currentValue - 1 : 0;
      updateSummary();
    }
    //This is for the buttons next to the input fields
    incrementButtons.forEach((button) => {
      button.addEventListener("click", handleIncrement);
    });
    //This is for the buttons next to the input fields
    decrementButtons.forEach((button) => {
      button.addEventListener("click", handleDecrement);
    });
  
    // Initial updating of the summary table on page load. Once the page loads the summary table is updated.
    updateSummary();
  });


// Add event listener to the "Continue with purchase" button
const continueButton = document.getElementById("continueButton");
continueButton.addEventListener("click", function () {
  const totalPayable = document.getElementById("summaryTotal").textContent;
  const queryParams = `?date=${encodeURIComponent(localStorage.getItem("summaryDate"))}&time=${encodeURIComponent(localStorage.getItem("summaryTime"))}&total=${encodeURIComponent(totalPayable)}`;

  window.location.href = `./details.html${queryParams}`;
});
//This pushes the button to the next page

