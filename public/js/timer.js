
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');

let studyTime = 25 * 60;
let longBreak = 15 * 60;
let shortBreak = 5 * 60;

let studyTimeMin = 25;
let longBreakMin = 15;
let shortBreakMin = 5;

seconds.innerHTML = '00';

function startTimer() {
    console.log("you suck")
}

function setPomodoroTime() {
    minute.innerHTML = studyTimeMin;
}