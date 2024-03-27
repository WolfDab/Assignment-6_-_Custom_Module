function getTimeOfDay(time) {
    if (time >= 4 && time < 12) {
        return "Morning";
    } else if (time >= 12 && time < 17) {
        return "Afternoon";
    } else {
        return "Evening";
    }
}

function isMorning(time) {
    let hour = time.getHours();
    return hour >= 4 && hour < 12;
}

function isAfternoon(time) {
    let hour = time.getHours();
    return hour >= 12 && hour < 17;
}

function isEvening(time) {
    let hour = time.getHours();
    return hour >= 17 || hour < 4;
}
