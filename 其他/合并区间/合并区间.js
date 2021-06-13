function merge( intervals ) {
    if (intervals.length == 0) {
        return []
    }
    intervals.sort((a,b) => {
        return a.start - b.start;
    });
    var output = [intervals[0]];
    for (let i = 1; i < intervals.length; i ++) {
        let prev = output[output.length-1];
        let cur = intervals[i];
        if (prev.end >= cur.start) {
            output[output.length-1].end = Math.max(prev.end, cur.end);
        }
        else {
            output.push(cur);
        }
    }
    return output;
}
module.exports = {
    merge : merge
};