function getTimeOfDay(time) {
    if (time >= 4 && time < 12) {
        return "Morning";
    } else if (time >= 12 && time < 17) {
        return "Afternoon";
    } else {
        return "Evening";
    }
}

function isMorning(hour) {
    return hour >= 4 && hour < 12;
}

function isAfternoon(hour) {
    return hour >= 12 && hour < 17;
}

function isEvening(hour) {
    return hour >= 17 || hour < 4;
}

module.exports = {
    getTimeOfDay,
    isMorning,
    isAfternoon,
    isEvening
};