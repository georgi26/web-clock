const DEGREE_PER_SECONDS = 6;
const DEGREE_PER_HOUR = 30
class Clock{
    
    constructor(secondsElement, minutesElement,hoursElement){
        this.secondsElement = secondsElement;
        console.log(this.secondsElement)
        this.minutesElement = minutesElement;
        this.hoursElement = hoursElement
        setInterval(this.refresh.bind(this),10)
    }

    refresh(){
        let time = new ClockTime()
        this.secondsElement.style.setProperty("--rotation",time.getClockDegreeSeconds())
        this.minutesElement.style.setProperty("--rotation",time.getClockDegreeMinutes())
        this.hoursElement.style.setProperty("--rotation",time.getClockDegreeHours())
    }
}

class ClockTime{
    constructor(){
        this.time = new Date()
    }
    getSeconds(){
        return this.time.getSeconds()+(this.time.getMilliseconds()/1000)
    }

    getMinutes(){
        return this.time.getMinutes()+(this.getSeconds()/60);
    }

    getHours(){
        return this.time.getHours()+(this.getMinutes()/60);
    }

    getClockDegreeSeconds(){
        return this.getSeconds() * DEGREE_PER_SECONDS
    }

    getClockDegreeMinutes(){
        return this.getMinutes() * DEGREE_PER_SECONDS
    }

    getClockDegreeHours(){
        return this.getHours() * DEGREE_PER_HOUR
    }
}

let clock = new Clock(document.querySelector("[data-hand-second]"),
document.querySelector("[data-hand-big]"),
document.querySelector("[data-hand-small]")
)