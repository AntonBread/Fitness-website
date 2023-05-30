export function secondsToString(totalSecs) {
    let min = Math.floor(totalSecs / 60).toString();
    let sec = (totalSecs % 60).toString();
    
    var timeString = `${min} мин.`;

    if (sec !== "0") {
        timeString += ` ${sec} с.`;
    }

    return timeString;
}

export function dateTimeToString(dateTimeString) {
    const dateTime = new Date(dateTimeString)
    const formattedDate = dateTime.toLocaleDateString("ru")
    return formattedDate.slice(0, 6) + formattedDate.slice(-2)
}
