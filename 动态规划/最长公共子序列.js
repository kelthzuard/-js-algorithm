// 地址：https://www.nowcoder.com/practice/6d29638c85bb4ffd80c020fe244baf11?tpId=117&tqId=37798&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 思路：dp[i][j]代表s1前i个和s2前j个的最长公共子序列
// 如果s1[i] == s2[j] dp[i][j] = dp[i-1][j-1] + 1 命中，则一定在前面的最长中加一
// 要不然就是 max(dp[i][j-1], dp[i-1][j])即各少一个的位置找个最大的
function LCS( s1 ,  s2 ) {
    const n1 = s1.length
    const n2 = s2.length
    var dp = new Array(n1+1).fill(0).map(() => {
        return new Array(n2+1).fill('')
    })
    for (let i = 1; i <= n1;i ++) {
        for (let j = 1; j <= n2; j ++) {
            if (s1[i-1] == s2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + s2[j-1]
            }
            else if (dp[i][j-1].length > dp[i-1][j].length) {
                dp[i][j] = dp[i][j-1]
            }
            else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    if (dp[n1][n2] == '') {
        return -1
    }
    return dp[n1][n2]
}
module.exports = {
    LCS : LCS
};