// TravelGo - My Ticket Module
// Reads bookingData created by the Booking page.

const ticketContainer = document.getElementById("ticketContainer");

const booking = JSON.parse(localStorage.getItem("bookingData"));

if (!booking) {
    ticketContainer.innerHTML = `
        <div class="empty-state">
            <h3>No Booking Found</h3>
            <p>Please search for a journey and complete a booking first.</p>

            <a class="button-link" href="index.html">
                Search Journeys
            </a>
        </div>
    `;
} else {
    const journey = booking.journey;

    ticketContainer.innerHTML = `
        <div class="ticket-card">
            <div class="ticket-header">
                <h2>TravelGo Ticket</h2>
                <span class="status">${booking.status}</span>
            </div>

            <div class="ticket-number">
                Booking ID:
                <strong>${booking.bookingId}</strong>
            </div>

            <div class="ticket-grid">
                <div>
                    <span>Passenger</span>
                    <strong>${booking.passengerName}</strong>
                </div>

                <div>
                    <span>Email</span>
                    <strong>${booking.email}</strong>
                </div>

                <div>
                    <span>Route</span>
                    <strong>${journey.from} → ${journey.to}</strong>
                </div>

                <div>
                    <span>Travel Date</span>
                    <strong>${journey.date}</strong>
                </div>

                <div>
                    <span>Departure</span>
                    <strong>${journey.time}</strong>
                </div>

                <div>
                    <span>Passengers</span>
                    <strong>${booking.passengers}</strong>
                </div>

                <div>
                    <span>Operator</span>
                    <strong>${journey.operator}</strong>
                </div>

                <div>
                    <span>Total Fare</span>
                    <strong>NZ$${booking.totalFare}</strong>
                </div>
            </div>

            <div class="ticket-actions">
                <button id="cancelButton" class="cancel-button">
                    Cancel Booking
                </button>

                <a class="button-link" href="index.html">
                    Back to Home
                </a>
            </div>
        </div>
    `;

    document.getElementById("cancelButton")
        .addEventListener("click", function () {

            if (confirm("Are you sure you want to cancel this booking?")) {

                localStorage.removeItem("bookingData");
                localStorage.removeItem("selectedJourney");

                ticketContainer.innerHTML = `
                    <div class="empty-state">
                        <h3>Booking Cancelled</h3>
                        <p>Your demo booking has been cancelled.</p>

                        <a class="button-link" href="index.html">
                            Search Again
                        </a>
                    </div>
                `;
            }
        });
}