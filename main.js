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

/** Hämtar ut indexnumret (veckodag) av första dagen i nuvarande månaden */
// 1 = Hämtar ut första datumet i månaden för att kunna placera ut på rätt veckodag.
// T.ex. 1 december är på en "onsdag".
const indexOfFirstDayOfCurrentMonth = new Date(year, month, 1, dayName).getDay();


/** Hämtar ut sista dagen i förgående månad */
const lastDaysOfPreviousMonth = new Date(year, month, 0).getDate();

/**Får ut indexplatsen (Veckodagen) som den sista dagen i föregående månad har, söndag = 0*/
const IndexOflastDaysOfPreviousMonth = new Date(year, month, 0).getDay();


/** Hämtar ut första dagen i nästkommande månad */
const firstDayOfNextMonth = new Date(year, month + 1, 1).getDate();

/**Får ut indexplatsen (Veckodagen) som den första dagen i nästkommande månad har, söndag = 0*/
const IndexOfFirstDaysOfNextMonth = new Date(year, month + 1, 1).getDay();


/** Översätter månaderna från siffror till Svenska */
const monthNameSwedish = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
/** Översätter veckodagarna från siffror till Svenska */
const dayNameSwedish = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

const amountOfDaysToDisplayFromNextMonth = 7 - IndexOfFirstDaysOfNextMonth +1;

/** Visar pågående månads namn i headern */
function displayCurrentMonth() {
    document.querySelector(".displaymonth").innerHTML = monthNameSwedish[month];
}


/** Lägg till divar med datum i kalendercontainern */
function addDaysToGrid() {
    // Hämtar ut div elementet från Html
    const calendarContent = document.getElementById('calendar-content');

/**Renderar sista dagarna av förra månaden  */
    for(let previousDays = IndexOflastDaysOfPreviousMonth; previousDays  > 0; previousDays--) {
        let dayBoxes = document.createElement('div');
                                                     // Fråga david om varför denna ens fungerar
        dayBoxes.innerHTML = (`<p>bajs</p>`) + (`<p>${lastDaysOfPreviousMonth - previousDays +1}</p>`); 
        dayBoxes.className = "days";
        dayBoxes.id = "dayboxes";
        calendarContent.appendChild(dayBoxes);
    }

    
    // Lägger till divar ut efter antalet dagar i vald månad inuti calendar-content-diven & ger dem innehåll, id & class
    for (let days = 1; days <=  daysOfMonths; days++) {
        let dayBoxes = document.createElement('div');
        dayBoxes.innerHTML = (`<p>Veckodag</p>`) + (`<p>${days}</p>`);
        dayBoxes.className = "days";
        dayBoxes.id = "dayboxes";
        calendarContent.appendChild(dayBoxes);
    }
    
    /**Renderar första dagarna av nästkommande månad */
    for(let nextDays = 1; nextDays <= amountOfDaysToDisplayFromNextMonth; nextDays++){
        let dayBoxes = document.createElement('div');
        dayBoxes.innerHTML = (`<p>korv</p>`) + (`<p>${nextDays}</p>`);
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

