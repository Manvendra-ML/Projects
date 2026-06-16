// This part of handle the first greeing part of the web App.

const greeting = document.getElementById('greeting')
let date = new Date();
let currentHour = date.getHours();

if (currentHour >= 0 && currentHour <12){
    greeting.innerText = "Good Morning!"
}
else if (currentHour >= 12 && currentHour <18){
    greeting.innerText = "Good Afternoon!"

}
else {
    greeting.innerText = "Good Evening!"

}


// now this part handle the timer part.

const timeClock = document.getElementById("time-left");
const startButton = document.getElementById("start-btn")

let minutes = parseInt(timeClock.innerText)-1;
let seconds = 60;
let timerInterval = null;

startButton.addEventListener("click", (e)=>{
    
    if ( timerInterval !== null){
        return;
    }

    
    timerInterval = setInterval(()=>{

        seconds--;
        let formattedMinutes = String(minutes).padStart(2, '0');
        let formattedSeconds = String(seconds).padStart(2, '0');

        let time = `${formattedMinutes}:${formattedSeconds}`;
        timeClock.innerText = time;
        
        if ( seconds === 0){
            minutes--;
            seconds = 59;
        }
        if (minutes < 0) {
                clearInterval(timerInterval); 
                timerInterval = null;         
                alert("Time's up!");
                return;                      
            }
    },1000)
})
