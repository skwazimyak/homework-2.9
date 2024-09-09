const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const background = document.getElementById("clock")
const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")
const resetButton = document.getElementById("reset")



let timer
let toggle



class Time{
    constructor(currentTime, maxTime, display){
        this.currentTime = currentTime
        this.maxTime = maxTime
        this.display = display
    }
}



const secondsClass = new Time(0, 60, seconds)
const minutesClass = new Time(0, 60, minutes)
const hoursClass = new Time(0, 24, hours)



const checkTime = (time) => {
    if (time.currentTime === time.maxTime && time.display === seconds) {
        time.currentTime = 0
        changeMinutes()
    }
    else if (time.currentTime === time.maxTime && time.display === minutes) {
        time.currentTime = 0
        changeHours()
    }
    else if(time.currentTime === time.maxTime){
        time.currentTime = 0
    }


    if (time.currentTime < 10) {
        time.display.innerHTML = "0" + time.currentTime
        return
    }
    time.display.innerHTML = time.currentTime
}



const changeSeconds = () => {
    secondsClass.currentTime++
    checkTime(secondsClass)
}

const changeMinutes = () => {
    minutesClass.currentTime++
    checkTime(minutesClass)
}

const changeHours = () => {
    hoursClass.currentTime++
    checkTime(hoursClass)
}
const startTimer = () => {
    if(toggle){
        return
    }
    toggle = true
    timer = setInterval(changeSeconds, 1)
    background.classList.remove("red")
    background.classList.remove("grey")
    background.classList.add("green")
}
const stopTimer = () => {
    toggle = false
    clearInterval(timer)
    background.classList.remove("green")
    background.classList.remove("grey")
    background.classList.add("red")
}
const resetTimer = () => {
    secondsClass.currentTime = 0
    checkTime(secondsClass)
    minutesClass.currentTime = 0
    checkTime(minutesClass)
    hoursClass.currentTime = 0
    checkTime(hoursClass)
    background.classList.remove("green")
    background.classList.remove("red")
    background.classList.add("grey")
}
startButton.onclick = () => {
    startTimer()
}
stopButton.onclick = () => {
    stopTimer()
}
resetButton.onclick = () => {
    resetTimer()
}