// Populate dropdown with all IANA time zones
function populateTimeZones() {
    const select = document.getElementById('country-select');
    const timeZones = Intl.supportedValuesOf('timeZone');

    timeZones.forEach(zone => {
        const option = document.createElement('option');
        option.value = zone;
        option.textContent = zone.replace(/_/g, ' ');
        select.appendChild(option);
    });
}

// Update local time
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    currentTimeElement.textContent = new Date().toLocaleTimeString();
}

// Update selected time zone time
function updateSelectedTime() {
    const selectedTimeElement = document.getElementById('selected-time');
    const select = document.getElementById('country-select');
    const timeZone = select.value;

    if (timeZone) {
        const time = new Date().toLocaleTimeString('en-US', {
            timeZone: timeZone,
            hour12: true
        });
        selectedTimeElement.textContent = time;
    } else {
        selectedTimeElement.textContent = 'Please select a time zone';
    }
}

// Initialize
function init() {
    populateTimeZones();
    updateCurrentTime();
    updateSelectedTime();

    setInterval(updateCurrentTime, 1000);
    setInterval(updateSelectedTime, 1000);

    document.getElementById('country-select').addEventListener('change', updateSelectedTime);
}

document.addEventListener('DOMContentLoaded', init);
