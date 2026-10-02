// TravelGo - Home & Search Module

const journeys = [
    {
        id: "TG101",
        operator: "TravelGo Express",
        from: "Auckland",
        to: "Wellington",
        time: "08:00 AM",
        duration: "8h 30m",
        price: 59
    },
    {
        id: "TG202",
        operator: "TravelGo Comfort",
        from: "Auckland",
        to: "Hamilton",
        time: "09:30 AM",
        duration: "1h 45m",
        price: 29
    },
    {
        id: "TG303",
        operator: "TravelGo Express",
        from: "Wellington",
        to: "Rotorua",
        time: "07:15 AM",
        duration: "6h 10m",
        price: 75
    },
    {
        id: "TG404",
        operator: "TravelGo Comfort",
        from: "Hamilton",
        to: "Rotorua",
        time: "10:00 AM",
        duration: "2h 30m",
        price: 35
    }
];


// Get the search form
const searchForm = document.getElementById("searchForm");


// Search button action
searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get user input
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const travelDate = document.getElementById("travelDate").value;
    const passengers =
        document.getElementById("passengers").value;

    // Check whether all fields are selected
    if (!from || !to || !travelDate || !passengers) {

        alert("Please enter all travel details.");

        return;
    }


    // Check same departure and destination
    if (from === to) {

        alert(
            "Departure and destination cannot be the same."
        );

        return;
    }


    // Save search details
    const searchData = {
        from: from,
        to: to,
        travelDate: travelDate,
        passengers: passengers
    };

    localStorage.setItem(
        "searchData",
        JSON.stringify(searchData)
    );


    // Find available journeys
    const availableJourneys = journeys.filter(function (journey) {

        return (
            journey.from === from &&
            journey.to === to
        );

    });


    // Display journeys
    displayJourneys(availableJourneys);

});


// Display available journeys
function displayJourneys(availableJourneys) {

    const journeyList =
        document.getElementById("journeyList");


    journeyList.innerHTML = "";


    // No journey found
    if (availableJourneys.length === 0) {

        journeyList.innerHTML = `
            <div class="journey-card">
                <h3>No journeys found</h3>
                <p>
                    Sorry, no available journey was found
                    for your selected route.
                </p>
            </div>
        `;

        return;
    }


    // Display each journey
    availableJourneys.forEach(function (journey) {

        const card = document.createElement("div");

        card.className = "journey-card";


        card.innerHTML = `
            <h3>${journey.operator}</h3>

            <p>
                <strong>${journey.from}</strong>
                → 
                <strong>${journey.to}</strong>
            </p>

            <p>
                Departure: ${journey.time}
            </p>

            <p>
                Duration: ${journey.duration}
            </p>

            <p>
                Fare: <strong>NZ$${journey.price}</strong>
            </p>

            <button onclick="selectJourney('${journey.id}')">
                Book Now
            </button>
        `;


        journeyList.appendChild(card);

    });

}


// Select journey and continue to booking
function selectJourney(journeyId) {

    const selectedJourney =
        journeys.find(function (journey) {

            return journey.id === journeyId;

        });


    if (!selectedJourney) {

        alert("Journey not found.");

        return;
    }


    // Get saved search details
    const searchData =
        JSON.parse(
            localStorage.getItem("searchData")
        );


    // Combine journey and search details
    const bookingData = {

        ...selectedJourney,

        date: searchData.travelDate,

        passengers: searchData.passengers

    };


    // Save selected journey
    localStorage.setItem(
        "selectedJourney",
        JSON.stringify(bookingData)
    );


    // Go to booking page
    window.location.href = "booking.html";
}