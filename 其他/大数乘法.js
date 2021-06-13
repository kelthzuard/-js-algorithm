//地址：https://www.nowcoder.com/practice/c4c488d4d40d4c4e9824c3650f7d5571?tpId=117&tqId=37843&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// AB*CD=AC(AD+BC)BD,将两个数组逐位相乘的结果对位存放在新的数组里，再对新数组进行进位判定
function solve( s ,  t ) {
    var dp = new Array(s.length+t.length).fill(0)
    for (let i = 0; i < s.length; i ++) {
        for (let j = 0; j < t.length; j ++) {
            dp[i+j+1] += s[i]*t[j] //核心
        }
    }
    let up = 0
    for (let i = dp.length - 1; i >= 0; i --) {
        const sum = up + dp[i]
        dp[i] = sum % 10
        up = Math.floor(sum/10)
    }
    let k = 0
    while(dp[k] == 0) {
        k ++
    }
    if (k == dp.length) {
        return 0
    }
    else {
        return dp.slice(k, dp.length).join("")
    }
}
module.exports = {
    solve : solve
};