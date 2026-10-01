// TravelGo - Booking Module
// Reads the journey selected on the Home & Search page.
const selectedJourney =
JSON.parse(localStorage.getItem("selectedJourney"));
const journeySummary =
document.getElementById("journeySummary");
const bookingForm =
document.getElementById("bookingForm");
const passengerCount =
document.getElementById("passengerCount");
if (!selectedJourney) {
journeySummary.innerHTML = `
<p>No journey has been selected.</p>
<a class="button-link" href="index.html">Back to Search</a>
`;
bookingForm.style.display = "none";
} else {
const passengers = Number(selectedJourney.passengers || 1);
passengerCount.value = passengers;
journeySummary.innerHTML = `
<h3>${selectedJourney.operator}</h3>
<p><strong>Route:</strong>
${selectedJourney.from} → ${selectedJourney.to}</p>
<p><strong>Date:</strong> ${selectedJourney.date}</p>
<p><strong>Departure:</strong> ${selectedJourney.time}</p>
<p><strong>Duration:</strong> ${selectedJourney.duration}</p>
<p><strong>Fare per passenger:</strong>
NZ$${selectedJourney.price}</p>
<p><strong>Estimated Total:</strong>
NZ$${selectedJourney.price * passengers}</p>
`;
}
bookingForm.addEventListener("submit", function(event) {
event.preventDefault();
if (!selectedJourney) {
alert("Please select a journey first.");
return;
}
const name = document.getElementById("fullName").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const passengers = Number(passengerCount.value);
if (!name || !email || !phone || passengers < 1) {
alert("Please complete all passenger details.");
return;
}
const booking = {
bookingId: "TG" + Date.now().toString().slice(-8),
passengerName: name,
email: email,
phone: phone,
passengers: passengers,
journey: selectedJourney,
totalFare: selectedJourney.price * passengers,
status: "Confirmed"
};
localStorage.setItem("bookingData", JSON.stringify(booking));
window.location.href = "ticket.html";
});
