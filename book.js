function calculateSummary(){
    const date=document.getElementById("date").value;
    const slAdult1=document.getElementById("slAdult1").value;
    const slChild1=document.getElementById("slChild1").value;
    const foreignAdult1=document.getElementById("foreignAdult1").value;
    const foreignChild1=document.getElementById("foreignChild1").value;
    const infant1=document.getElementById("infant1").value;
    const time=document.getElementById("time").value;
    
    
    document.getElementById("summaryDate").innerHTML=`${date}`;
    document.getElementById("summaryTime").innerHTML=`${time}`;
    document.getElementById("summaryDuration").innerHTML=`01 hours(0 Normal:00 Peak)`;
    document.getElementById("slAdultNum").innerHTML=`${slAdult1}`;
    document.getElementById("slChildNum").innerHTML=`${slChild1}`;
    document.getElementById("foreignAdultNum").innerHTML=`${foreignAdult1}`;
    document.getElementById("foreignChildNum").innerHTML=`${foreignChild1}`;
    document.getElementById("infantNum").innerHTML=`${infant1}`;
    document.getElementById("slAdult").innerHTML=`$${slAdult1*4}`
    document.getElementById("slChild").innerHTML=`$${slChild1*2}`
    document.getElementById("foreignAdult").innerHTML=`$${foreignAdult1*10}`
    document.getElementById("foreignChild").innerHTML=`$${foreignChild1*5}`
    document.getElementById("infant").innerHTML="Free";
    document.getElementById("summaryTotal").innerHTML=`$${slAdult1*4+slChild1*2+foreignAdult1*10+foreignChild1*5}`;
    
    }
    
    
    // Function to calculate and update the summary duration
    function calculateSummaryDuration() {
      const timeSelect = document.getElementById("time");
      const selectedOptions = Array.from(timeSelect.selectedOptions);
    
      if (selectedOptions.length === 0) {
        document.getElementById("summaryTime").textContent = "No time slots selected";
        return;
      }
    
      const startTime = selectedOptions[0].value.split(" to ")[0];
      const endTime = selectedOptions[selectedOptions.length - 1].value.split(" to ")[1];
      document.getElementById("summaryTime").textContent = startTime + " to " + endTime;
    }
    
    // Helper function to calculate the total charges for ticket categories
    function calculateTotalCharges() {
        const slAdult1 = Number(document.getElementById("slAdult1").value);
        const slChild1 = Number(document.getElementById("slChild1").value);
        const foreignAdult1 = Number(document.getElementById("foreignAdult1").value);
        const foreignChild1 = Number(document.getElementById("foreignChild1").value);
        const infant1 = Number(document.getElementById("infant1").value);
      
        const slAdultNormalCharge = 4;
        const slAdultPeakCharge = 6;
        const slChildNormalCharge = 2;
        const slChildPeakCharge = 3;
        const foreignerAdultNormalCharge = 10;
        const foreignerAdultPeakCharge = 13;
        const foreignerChildNormalCharge = 5;
        const foreignerChildPeakCharge = 8;
      
        const slAdultTotal = slAdult * (slAdultNormalCharge||slAdultPeakCharge);
        const slChildTotal = slChild * (slChildNormalCharge || slChildPeakCharge);
        const foreignerAdultTotal = foreignerAdult * (foreignerAdultNormalCharge||foreignerAdultPeakCharge);
        const foreignerChildTotal = foreignerChild * (foreignerChildNormalCharge||foreignerChildPeakCharge);
      
        return slAdultTotal + slChildTotal + foreignerAdultTotal + foreignerChildTotal;
      }
      
      // Helper function to calculate the duration and peak hours count
      function calculateDuration(startTime, endTime) {
        const peakStart1 = 10;
        const peakEnd1 = 13;
        const peakStart2 = 15;
        const peakEnd2 = 18;
      
      
        //"Number" is a JS function that's built-in and it converts a value into a number. It determines the time duration.
        const startHour = Number(startTime.split(":")[0]);
        const endHour = Number(endTime.split(":")[0]);
      
        const durationInHours = endHour - startHour;
      
        let peakHours = 0;
        if (
          (startHour >= peakStart1 && startHour < peakEnd1) ||
          (endHour > peakStart1 && endHour <= peakEnd1) ||
          (startHour >= peakStart2 && startHour < peakEnd2) ||
          (endHour > peakStart2 && endHour <= peakEnd2)
        ) {
          peakHours = durationInHours;
        }
      
        const normalHours = durationInHours - peakHours;
        return { normal: normalHours, peak: peakHours };
      }
      
    
    
    // Call the function when the time slots are changed
    document.getElementById("time").addEventListener("change", calculateSummaryDuration);
    
    
    
      // Function to calculate the summary
      function calculateSummary() {
        // Your code for calculating the summary
        // This function should update the relevant span elements in the table with the calculated values.
        // Example:
        document.getElementById("summaryDate").textContent = document.getElementById("date").value;
        // ...rest of the code
      }
    
      // Function to calculate the type of tickets requested
      function calculateTypeOfTicks() {
        // Your code for calculating the type of tickets requested
        // This function should also update the relevant span elements in the table with the calculated values.
        // Example:
        document.getElementById("slAdultNum").textContent = "Your calculated SL adult count";
        document.getElementById("slAdult").textContent = "Your calculated SL adult charges";
        // ...rest of the code
      }
    
      // Function to update the summary date when the user chooses a date
      function updateSummaryDate() {
        document.getElementById("summaryDate").textContent = document.getElementById("date").value;
      }
    
      // Add event listener to the date input element
      document.getElementById("date").addEventListener("change", updateSummaryDate);
    
    
    
      // Function to calculate the summary
      function calculateSummary() {
        // Your code for calculating the summary
        // This function should update the relevant span elements in the table with the calculated values.
        // Example:
        document.getElementById("summaryDate").textContent = document.getElementById("date").value;
        document.getElementById("summaryTime").textContent = getSelectedTimeSlots(); // Call a function to get the selected time slots
        updateTicketNumbers(); // Call the function to update the ticket numbers
        // ...rest of the code
      }
    
      // Function to calculate the type of tickets requested
      function calculateTypeOfTicks() {
        // Your code for calculating the type of tickets requested
        // This function should also update the relevant span elements in the table with the calculated values.
        // Example:
        document.getElementById("slAdultNum").textContent = document.getElementById("slAdult1").value;
        document.getElementById("slChildNum").textContent = document.getElementById("slChild1").value;
        document.getElementById("foreignAdultNum").textContent = document.getElementById("foreignAdult1").value;
        document.getElementById("foreignChildNum").textContent = document.getElementById("foreignChild1").value;
        document.getElementById("infantNum").textContent = document.getElementById("infant1").value;
        // ...rest of the code
      }
    
      // Function to update the ticket numbers in the table
      function updateTicketNumbers() {
        document.getElementById("slAdultNum").textContent = document.getElementById("slAdult1").value;
        document.getElementById("slChildNum").textContent = document.getElementById("slChild1").value;
        document.getElementById("foreignAdultNum").textContent = document.getElementById("foreignAdult1").value;
        document.getElementById("foreignChildNum").textContent = document.getElementById("foreignChild1").value;
        document.getElementById("infantNum").textContent = document.getElementById("infant1").value;
      }
    
      // Function to get the selected time slots
      function getSelectedTimeSlots() {
        const timeSelect = document.getElementById("time");
        const selectedOptions = Array.from(timeSelect.selectedOptions);
    
        if (selectedOptions.length === 0) {
          return "No time slots selected";
        }
    
        const startTime = selectedOptions[0].value.split(" to ")[0];
        const endTime = selectedOptions[selectedOptions.length - 1].value.split(" to ")[1];
        return startTime + " to " + endTime;
      }
    
      // Add event listeners to ticket quantity input fields
      document.getElementById("slAdult1").addEventListener("input", updateTicketNumbers);
      document.getElementById("slChild1").addEventListener("input", updateTicketNumbers);
      document.getElementById("foreignAdult1").addEventListener("input", updateTicketNumbers);
      document.getElementById("foreignChild1").addEventListener("input", updateTicketNumbers);
      document.getElementById("infant1").addEventListener("input", updateTicketNumbers);
    
    
      function calculateDuration() {
        const timeSelect = document.getElementById('time');
        const selectedOptions = Array.from(timeSelect.selectedOptions);
      
        if (selectedOptions.length === 1) {
          const startTime = selectedOptions[0].value.split(' ')[0];
          const endTime = selectedOptions[0].value.split(' ')[4];
      
          const startHour = parseInt(startTime.split(':')[0]);
          const startMinutes = parseInt(startTime.split(':')[1]);
          const endHour = parseInt(endTime.split(':')[0]);
          const endMinutes = parseInt(endTime.split(':')[1]);
      
          const totalMinutes = (endHour - startHour) * 60 + (endMinutes - startMinutes);
          const totalHours = Math.max(Math.ceil(totalMinutes / 60), 1);
          const normalHours = Math.min(totalHours, 2);
          const peakHours = Math.max(totalHours - 2, 0);
      
          const formattedDuration = `${totalHours} hrs (${normalHours} Normal : ${peakHours} Peak)`;
          document.getElementById('summaryDuration').textContent = formattedDuration;
        } else if (selectedOptions.length === 2) {
          const startTime1 = selectedOptions[0].value.split(' ')[0];
          const endTime1 = selectedOptions[0].value.split(' ')[4];
          const startTime2 = selectedOptions[1].value.split(' ')[0];
          const endTime2 = selectedOptions[1].value.split(' ')[4];
      
          const startHour1 = parseInt(startTime1.split(':')[0]);
          const startMinutes1 = parseInt(startTime1.split(':')[1]);
          const endHour1 = parseInt(endTime1.split(':')[0]);
          const endMinutes1 = parseInt(endTime1.split(':')[1]);
      
          const startHour2 = parseInt(startTime2.split(':')[0]);
          const startMinutes2 = parseInt(startTime2.split(':')[1]);
          const endHour2 = parseInt(endTime2.split(':')[0]);
          const endMinutes2 = parseInt(endTime2.split(':')[1]);
      
          const totalMinutes1 = (endHour1 - startHour1) * 60 + (endMinutes1 - startMinutes1);
          const totalMinutes2 = (endHour2 - startHour2) * 60 + (endMinutes2 - startMinutes2);
          const totalMinutes = totalMinutes1 + totalMinutes2;
      
          const totalHours = Math.max(Math.ceil(totalMinutes / 60), 1);
          const normalHours = Math.min(totalHours, 2);
          const peakHours = Math.max(totalHours - 2, 0);
      
          const formattedDuration = `${totalHours} hrs (${normalHours} Normal : ${peakHours} Peak)`;
          document.getElementById('summaryDuration').textContent = formattedDuration;
        } else {
          document.getElementById('summaryDuration').textContent = '';
        }
      }
      
      document.getElementById('time').addEventListener('change', calculateDuration);
      
      function calculateDuration() {
        const timeSelect = document.getElementById('time');
        const selectedOptions = Array.from(timeSelect.selectedOptions);
      
        if (selectedOptions.length > 0) {
          let totalMinutes = 0;
          for (let i = 0; i < selectedOptions.length - 1; i++) {
            const startTime = selectedOptions[i].value.split(' ')[0];
            const endTime = selectedOptions[i].value.split(' ')[4];
            const startHour = parseInt(startTime.split(':')[0]);
            const startMinutes = parseInt(startTime.split(':')[1]);
            const endHour = parseInt(endTime.split(':')[0]);
            const endMinutes = parseInt(endTime.split(':')[1]);
            totalMinutes += (endHour - startHour) * 60 + (endMinutes - startMinutes);
          }
      
          const totalHours = Math.max(Math.ceil(totalMinutes / 60), 0);
          const normalHours = Math.min(totalHours, 2);
          const peakHours = Math.max(totalHours - 2, 0);
      
          const formattedDuration = `${totalHours} hrs (${normalHours} Normal : ${peakHours} Peak)`;
          document.getElementById('summaryDuration').textContent = formattedDuration;
        } else {
          document.getElementById('summaryDuration').textContent = '';
        }
      }
      
      document.getElementById('time').addEventListener('change', calculateDuration);