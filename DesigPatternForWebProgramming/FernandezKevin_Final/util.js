// utitlity class with an  time converter
class Util {
    constructor() {
        
    }
// time converter that change minutes to
    static minToHour(mins){
        let hours = Math.floor(mins / 60);
        let minutes = mins % 60;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutes}`
    }
}