// Update current time
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();
    currentTimeElement.textContent = now.toLocaleTimeString();
}

// Update selected time zone
function updateSelectedTime() {
    const selectedTimeElement = document.getElementById('selected-time');
    const countrySelect = document.getElementById('country-select');
    const selectedTimeZone = countrySelect.value;

    if (selectedTimeZone) {
        const time = new Date().toLocaleTimeString('en-US', {
            timeZone: selectedTimeZone
        });
        selectedTimeElement.textContent = time;
    } else {
        selectedTimeElement.textContent = 'Please select a country';
    }
}

// Initialize the application
function init() {
    // Update times immediately
    updateCurrentTime();
    updateSelectedTime();

    // Update current time every second
    setInterval(updateCurrentTime, 1000);

    // Update selected time every second
    setInterval(updateSelectedTime, 1000);


    document.getElementById('country-select').addEventListener('change', updateSelectedTime);
}


document.addEventListener('DOMContentLoaded', init); 