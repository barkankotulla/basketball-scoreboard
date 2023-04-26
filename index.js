let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function incrementHomeByOne() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function incrementHomeByTwo() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function incrementHomeByThree() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function incrementGuestByOne() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function incrementGuestByTwo() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function incrementGuestByThree() {
    guestCount += 3
    guestScore.textContent = guestCount
}