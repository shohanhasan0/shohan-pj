document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the default way
  
    // Get form values
    const departureCity = document.getElementById("departure").value;
    const destinationCity = document.getElementById("destination").value;
    const seats = document.getElementById("seats").value;
  
    // Simple validation
    if (seats < 1 || seats > 10) {
      alert("Please select a valid number of seats (1 to 10).");
      return;
    }
  
    // Display booking confirmation
    const bookingMessage = `
      <p><strong>Booking Successful!</strong></p>
      <p>You have successfully booked ${seats} seat(s) from ${departureCity} to ${destinationCity}.</p>
    `;
    document.getElementById("bookingMessage").innerHTML = bookingMessage;
  });
  