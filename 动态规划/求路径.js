//地址：https://www.nowcoder.com/practice/166eaff8439d4cd898e3ba933fbc6358?tpId=117&tqId=37736&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//动态规划
function uniquePaths( m ,  n ) {
    var dp = new Array(m).fill(0).map(() => {
        return new Array(n).fill(0);
    });
    dp[0][0] = 1;
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j ++) {
            if (i < m-1) {
                dp[i+1][j] += dp[i][j];
            }
            if (j < n-1) {
                dp[i][j+1] += dp[i][j];
            }
        }
    }
    return dp[m-1][n-1];
}
module.exports = {
    uniquePaths : uniquePaths
};