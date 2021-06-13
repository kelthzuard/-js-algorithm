//地址：https://www.nowcoder.com/practice/75e6cd5b85ab41c6a7c43359a74e869a?tpId=117&tqId=37742&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//思路：回溯，注意去重
function combinationSum2( num ,  target ) {
    num.sort((a, b) => a-b)
    var output = []
    function find(start, t, arr) {
        if (t == 0) {
            output.push(arr.slice())
            return
        }
        for (let i = start; i < num.length; i ++) {
            if (num[i] > t) {return}
            if (i > 0 && num[i] == num[i-1] && i > start) {
                continue
            }
            arr.push(num[i])
            find(i+1, t-num[i], arr)
            arr.pop()
        }
    }
    find(0, target, [])
    return output
}
module.exports = {
    combinationSum2 : combinationSum2
};