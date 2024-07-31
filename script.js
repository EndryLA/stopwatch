let timer = '';
let currentTime = {
    hours : 0,
    minutes : 0,
    seconds : 0
}
console.log(typeof(timer))
let timerDisplay = document.getElementById('timerDisplay')


function updateTimer() {
    currentTime.seconds++
    if (currentTime.seconds == 60) {
        currentTime.seconds = 0;
        currentTime.minutes++
    if (currentTime.minutes == 60) {
    currentTime.minutes = 0
    currentTime.hours++
    }}
    // ces conditions empêchent un bug visuel où j'ai un seul chiffre pour les seconds < 10 
    currentTime.seconds < 10 ? currentTime.seconds = "0" + currentTime.seconds : currentTime.seconds
    currentTime.minutes.toString().length < 2 ? currentTime.minutes = "0" + currentTime.minutes : currentTime.minutes
    currentTime.hours.toString().length < 2? currentTime.hours = "0" + currentTime.hours : currentTime.hours



    timerDisplay.innerHTML = currentTime.hours + ":" + currentTime.minutes + ":" + currentTime.seconds
    
}

function startTimer() {


    // cette ligne de code (34) empêche la fonction setInterval de se déclencher s'il y en a déjà une en route
    // ce qui m'empêche de doubler la vitesse d'écoulement du chronomètre
    if (!timer) {
        timer =  setInterval(updateTimer,1000)
        timerDisplay.style.color = 'green'
    }

}

function pauseTimer() {
    clearInterval(timer)
    timerDisplay.style.color = 'red'
    timer = ''
}

function resetTimer() {
    clearInterval(timer)
    timer = ''
    timerDisplay.style.color = 'white'
    currentTime.hours = "00"
    currentTime.minutes = "00"
    currentTime.seconds = "00"
    timerDisplay.innerHTML = currentTime.hours + ":" + currentTime.minutes + ":" + currentTime.seconds

}

// il faut ajouter un timer = '' dans les fonctions stop et reset pour pouvoir relancer le timer après