// var input = '2020-07-17T01:28:03Z'
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
    //2017-10-22
    // console.log(date)
    // console.log(year)
    // console.log(month)
    // console.log(day)
    return `${year}-${month}-${day}`
};