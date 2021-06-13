//地址：https://www.nowcoder.com/practice/ce73540d47374dbe85b3125f57727e1e?tpId=117&tqId=37725&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 回溯，注意010，不能以0打头的情况
function restoreIpAddresses( s ) {
    const n = s.length
    var output = []
    function find(start, times, str) {
        if (start >= n && times == 4) {
            output.push(str.slice(0, str.length-1))
            return
        }
        else if (start < n && times == 4) { return }
        else if (start >= n && times < 4) { return }
        let e = s[start] == '0'?1:3
        for (let i = 1; i <= e && start + i <= n; i ++) {
            let end = start + i
            let cut = s.slice(start, end)
            if (cut <= 255) {
                find(end, times + 1, str+cut+'.')
            }
        }
    }
    find(0, 0, '')
    return output
}
module.exports = {
    restoreIpAddresses : restoreIpAddresses
};