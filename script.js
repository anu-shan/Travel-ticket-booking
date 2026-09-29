function searchTravel() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;
  if (!from || !to || !date) {
    alert("Please enter From, To and Travel Date.");
    return;
  }
  window.location.href = "search.html";
}
function confirmBooking(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const seat = document.getElementById("seat").value;
  localStorage.setItem("passengerName", name);
  localStorage.setItem("seatNumber", seat);
  alert("Booking confirmed successfully!");
  window.location.href = "ticket.html";
}
function contactSubmit(event) {
  event.preventDefault();
  alert("Thank you! Your message has been submitted.");
}
window.addEventListener("DOMContentLoaded", function () {
  const name = localStorage.getItem("passengerName");
  const seat = localStorage.getItem("seatNumber");
  if (name && document.getElementById("ticketName")) {
    document.getElementById("ticketName").textContent = name;
  }
  if (seat && document.getElementById("ticketSeat")) {
    document.getElementById("ticketSeat").textContent = seat;
  }
});