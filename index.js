let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function incrementHome(increment) {
    homeCount += increment
    homeScore.textContent = homeCount
}

function incrementGuest(increment) {
    guestCount += increment
    guestScore.textContent = guestCount
}

function newGame() {
    homeCount = 0
    homeScore.textContent = homeCount
    guestCount = 0 
    guestScore.textContent = guestCount
}

