//地址：https://www.nowcoder.com/practice/05fed41805ae4394ab6607d0d745c8e4?tpId=117&tqId=37801&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//思路：这个题和编辑距离不同的思路点在于，需要考虑s2不动，只动s1，就会有三种情况
//dp = dp[i-1][j-1] + min(ic+dc, rc)
//dp = dp[i-1][j] + dc 用i-1的s1变换成j的s2，考虑s2不动，s1需要减去一个
//dp = dp[i][j-1] + ic 和上方一样，不同之处在于需要加上一个
// 初始状态dp[i][0]为减去i，dp[0][j]为加上j
function minEditCost( str1 ,  str2 ,  ic ,  dc ,  rc ) {
    const n1 = str1.length
    const n2 = str2.length
    const change = Math.min((ic+dc), rc)
    const t = Math.min(ic, dc)
    var dp = new Array(n1+1).fill(0).map(() => {
        return new Array(n2+1).fill(0)
    })
    for (let i = 0; i <= n1; i ++) {
        dp[i][0] = dc*i
    }
    for (let i = 0; i <= n2; i ++) {
        dp[0][i] = ic*i
    }
    for (let i = 1; i <= n1; i ++) {
        for (let j = 1; j <= n2; j ++) {
            let doC = 0
            if (str1[i-1] != str2[j-1]) {
                doC = change
            }
            dp[i][j] = Math.min(doC+dp[i-1][j-1], dp[i][j-1]+ic,dp[i-1][j]+dc)
        }
    }
    return dp[n1][n2]
}
module.exports = {
    minEditCost : minEditCost
};