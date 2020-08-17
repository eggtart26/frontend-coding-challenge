// var input = '2020-07-17T01:28:03Z'
export function daysAgo(input) {
    const nowDate = new Date();
    const createDate = new Date(input);

    var millisecondsNow = nowDate.getTime()
    var millisecondsCrate = createDate.getTime()
    var dayAgo = Math.floor((millisecondsNow - millisecondsCrate) / (1000 * 3600 * 24))
    return dayAgo;
}