//地址：https://www.nowcoder.com/practice/28eb3175488f4434a4a6207f6f484f47?tpId=117&tqId=37752&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//思路：二分，注意细节，如果中间能匹配，还必须确定左边能匹配，再匹配右边。
function longestCommonPrefix( strs ) {
    if (strs.length == 0) {
        return ""
    }
    function getResult(i) {
        let cur = null
        for (let str of strs) {
            if (i >= str.length) {return false}
            if (cur != null && str[i] != cur) {return false}
            cur = str[i]
        }
        return true
    }
    function find(left, right) {
        if (left >= right) {
            return getResult(left)?left:-1
        }
        const mid = Math.ceil((left+right)/2) //因为判断中间可以得话在右边，所以用ceil和mid-1
        if (getResult(mid)) {
            const l = find(left, mid-1)
            if (l == mid-1) {
                return find(mid, right) //确定左边是否全对，否则返回左边。
            }
            else {
                return l
            }
        }
        else {
            return find(left, mid-1)
        }
    }
    const r = find(0, strs[0].length-1)
    return strs[0].slice(0, r+1)
}
module.exports = {
    longestCommonPrefix : longestCommonPrefix
};