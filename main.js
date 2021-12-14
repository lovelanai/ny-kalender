window.addEventListener('load', main);

/** Kör alla funktioner i denna script onload */
function main() {
    addDaysToGrid();
    console.log(monthSwedish[month]);
}



/** Hämtar datum från server. Filtrerat År, månad, datum och veckodag. */
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const dayNumber = date.getDate();
const dayName = date.getDay();


/** Ge namn istället för nummer för månader & dagar */
// Översätter månaderna från siffror till Svenska
const monthSwedish = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
// Översätter veckodagarna från siffror till Svenska
const dayNameSwedish = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];






// for (let j = 1; j <= nextDays; j++) {
//     days += `<div class="next-date">${j}</div>`;
//     daysMonthContainer.innerHTML = days;
//   }
// };

function addDaysToGrid() {
    const calendarContent = document.getElementById('calendar-content');
    for(d=0; d<31;d++) {
        var board = document.createElement('div');
        board.innerHTML = (dayNumber)
        board.className = "blah";
    
        calendarContent.appendChild(board);
    }

// calendarContent.innerHTML=(`<div>${dayNumber}</div>`);

}