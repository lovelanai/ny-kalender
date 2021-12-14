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

/** Hämtar ut hur många dagar som finns i varje månad */
// 1, 0 = days
// 1 = första dagen i månaden
// 0 = första dagen i månaden -1. Alltså sista dagen i förra månaden
const daysOfMonths = new Date(year, month + 1, 0).getDate();

/** Hämtar ut första dagen i varje månad. Veckodag & nummer */
// 1 = första dagen i månaden
const firstDayOfMonths = new Date(year, month, 1);




/** Översätter månaderna från siffror till Svenska */
const monthNameSwedish = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
/** Översätter veckodagarna från siffror till Svenska */
const dayNameSwedish = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];


/** Visar pågående månads namn i headern */
function displayCurrentMonth() {
    document.querySelector(".displaymonth").innerHTML = monthNameSwedish[month];
}


/** Lägg till divar med datum i kalendercontainern */
function addDaysToGrid() {
    // Hämtar ut div elementet från Html
    const calendarContent = document.getElementById('calendar-content');
    // Lägger till divar ut efter antalet dagar i vald månad inuti calendar-content-diven & ger dem innehåll, id & class
    for(let days=0; days <= daysOfMonths; days++) {
        var dayBoxes = document.createElement('div');
        dayBoxes.innerHTML = (`<p>${dayNameSwedish[dayName]}</p>`)+(`<p>${days+0}</p>`);
        dayBoxes.className = "days";
        dayBoxes.id = "dayboxes";
        calendarContent.appendChild(dayBoxes);
    }

}
