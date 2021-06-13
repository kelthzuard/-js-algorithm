// 地址：https://www.nowcoder.com/practice/fd711bdfa0e840b381d7e1b82183b3ee?tpId=117&tqId=37809&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 思路快排，由于要在次数相同时按字典序排，所以比较时要额外添加条件。
function topKstrings( strings ,  k ) {
    var hash = new Map()
    for (let val of strings) {
        if (!hash.has(val)) {
            hash.set(val, 1);
        }
        else {
            hash.set(val, hash.get(val)+1);
        }
    }
    var list = Array.from(hash.entries());
    function compare(a1, a2) { //考虑相同时的情况。
        if (a1[1] == a2[1]) {
            if (Number(a1[0]) < Number(a2[0])) {
                return true
            }
            else {
                return false;
            }
        }
        else if (a1[1] > a2[1]) {
            return true;
        }
        else {
            return false;
        }
    }
    function qsort(start, end) {
        if (start >= end) {
            return start;
        }
        let left = start;
        let right = end;
        let base = list[left];
        while(left < right) {
            while(right > left && compare(list[right], base)) {
                right --;
            }
            while(right > left && !compare(list[left], base)) {
                left ++;
            }
            let temp = list[left];
            list[left] = list[right];
            list[right] = temp;
        }
        list[start] = list[left];
        list[left] = base;
        if (list.length - left == k) {
            return left;
        }
        else if(list.length - left < k) {
            return qsort(start, left-1);
        }
        else {
            return qsort(left+1, end);
        }
    }
    let mid = qsort(0, list.length-1);
    list = list.slice(mid, list.length);
    list.sort((a,b) => {
        if (a[1] != b[1]) {
            return b[1] - a[1];
        }
        else {
            return a[0] - b[0];
        }
    });
    return list;
}
module.exports = {
    topKstrings : topKstrings
};