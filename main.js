window.addEventListener('load', main);

/** Kör alla funktioner i denna script onload */
function main() {
    addDaysToGrid();
    displayCurrentMonth();
}



/** Hämtar datum från server. Filtrerat År, månad, datum och veckodag. */
const date = new Date();
const year = date.getFullYear();
let month = date.getMonth();
const dayNumber = date.getDate();
const dayName = date.getDay();

/** Hämtar ut hur många dagar som finns i varje månad */
// 1, 0 = days
// 1 = Från början är januari=0, med +1 blir januari indexnummer 1.
// 0 = Första dagen i nästa månad är 1, tar man då 0 får man sista dagen i nuvarande månad.
const daysOfMonths = new Date(year, month + 1, 0).getDate();

/** Hämtar ut första dagen i varje månad. Veckodag & nummer */
// 1 = Hämtar ut första datumet i månaden för att kunna placera ut på rätt veckodag.
// T.ex. om 1 december är på en "onsdag".
const firstDayOfMonths = new Date(year, month, 1, dayName);

/** Hämtar ut sista dagen i förgående månad */
const lastDaysOfPreviousMonth = new Date(year, month, 0).getDate();

/**Får ut indexplatsen (Veckodagen) som den sista dagen i föregående månad har, söndag = 0*/
const IndexOflastDaysOfPreviousMonth = new Date(year, month, 0).getDay();


/** Hämtar ut första dagen i nästkommande månad */
const firstDayOfNextMonth = new Date(year, month + 1, 1).getDate();

/**Får ut indexplatsen (Veckodagen) som den första dagen i nästkommande månad har, söndag = 0*/
const IndexOflFirstDaysOfNextMonth = new Date(year, month + 1, 1).getDay();


/** Översätter månaderna från siffror till Svenska */
const monthNameSwedish = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
/** Översätter veckodagarna från siffror till Svenska */
const dayNameSwedish = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];


/** Visar pågående månads namn i headern */
function displayCurrentMonth() {
    document.querySelector(".displaymonth").innerHTML = monthNameSwedish[month];
}


/** Lägg till divar med datum i kalendercontainern */
function addDaysToGrid() {
    // Hämtar ut div elementet från Html
    const calendarContent = document.getElementById('calendar-content');


    // Lägger till divar ut efter antalet dagar i vald månad inuti calendar-content-diven & ger dem innehåll, id & class
    for (let days = 1; days <= daysOfMonths; days++) {
        var dayBoxes = document.createElement('div');
        dayBoxes.innerHTML = (`<p>Veckodag</p>`) + (`<p>${days}</p>`);
        dayBoxes.className = "days";
        dayBoxes.id = "dayboxes";
        calendarContent.appendChild(dayBoxes);
    }
}


function displayPrevMonth() {
    month = month - 1;

    if (month < 0) {
        month = 11;
    }
    document.querySelector(".displaymonth").innerHTML = monthNameSwedish[month];
}

function displayNextMonth() {
    month = month + 1;

    if (month > 11) {
        month = 0;
    }
    document.querySelector(".displaymonth").innerHTML = monthNameSwedish[month];

}

