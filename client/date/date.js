
export function daysAgo(input) {
    const nowDate = new Date();
    const createDate = new Date(input);

    var millisecondsNow = nowDate.getTime()
    var millisecondsCrate = createDate.getTime()
    var dayAgo = Math.floor((millisecondsNow - millisecondsCrate) / (1000 * 3600 * 24))
    return dayAgo;
}

export function date() {
    const date = new Date();
    var year = date.getYear()+1900;
    var month = date.getMonth()
    var day = date.getDate();
    
    if(month<10) {
        var month = '0' + month;
    }
    if(day<10) {
        var day = '0' + day;
    }
    return `${year}-${month}-${day}`
};