// 地址：https://www.nowcoder.com/practice/c9addb265cdf4cdd92c092c655d164ca?tpId=117&tqId=37748&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 思路:二分，注意在尾部这种情况。
function generateParenthesis( n ) {
    var output = []
    function find(l, r, str) {
        if (l == n && r == n) {
            output.push(str)
            return 
        }
        else {
            if (l < n) {
                find(l+1, r, str+'(')
            }
            if (r < l) {
                find(l, r+1, str+')')
            }

        }
    }
    find(0,0,"")
    return output
}
module.exports = {
    generateParenthesis : generateParenthesis
};