window.addEventListener('load', main);

/** Kör alla funktioner i denna script onload */
function main() {
    addDaysToGrid();
    displayCurrentMonth();
}



/** Hämtar datum från server. Filtrerat År, månad, datum och veckodag. */
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const dayNumber = date.getDate();
const dayName = date.getDay();


/** Översätter månaderna från siffror till Svenska */
const monthNameSwedish = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
/** Översätter veckodagarna från siffror till Svenska */
const dayNameSwedish = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];


/** Visar pågående månads namn i headern */
function displayCurrentMonth() {
    document.querySelector(".hej").innerHTML = monthNameSwedish[month];
}

/** Lägg till 31 divar med datum i kalendercontainern */
function addDaysToGrid() {
    // Hämtar ut div elementet från Html
    const calendarContent = document.getElementById('calendar-content');
    // Lägger till 31st divar inuti calendarcontent-diven & ger dem innehåll & class
    for(d=0; d<31;d++) {
        var dayBoxes = document.createElement('div');
        dayBoxes.innerHTML = (`<p>${dayNameSwedish[dayName]}</p>`)+(`<p>${dayNumber}</p>`);
        dayBoxes.className = "days";
        dayBoxes.id = "dayboxes";
        calendarContent.appendChild(dayBoxes);
    }

}
