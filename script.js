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
        let time = new Date()
        let secondsRotation = ((time.getSeconds()+(time.getMilliseconds()/1000)))*(DEGREE_PER_SECONDS)
        this.secondsElement.style.setProperty("--rotation",secondsRotation)
        let minutesRotation = (time.getMinutes()+time.getSeconds()/60)*DEGREE_PER_SECONDS
        this.minutesElement.style.setProperty("--rotation",minutesRotation)
        let hoursRotation = (time.getHours()+time.getMinutes()/60)* DEGREE_PER_HOUR
        this.hoursElement.style.setProperty("--rotation",hoursRotation)
    }
}

let clock = new Clock(document.querySelector("[data-hand-second]"),
document.querySelector("[data-hand-big]"),
document.querySelector("[data-hand-small]")
)