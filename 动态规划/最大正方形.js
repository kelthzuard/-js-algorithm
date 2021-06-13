// 地址：https://www.nowcoder.com/practice/0058c4092cec44c2975e38223f10470e?tpId=117&tqId=37832&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 思路：动态规划，边长dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
function solve( matrix ) {
    var max = 0
    for (let row = 0; row < matrix.length; row ++) {
        for (let col = 0; col < matrix[0].length; col ++) {
            if (row > 0 && col > 0 && matrix[row][col] > 0) {
                const prev = matrix[row-1][col-1]
                const left = matrix[row][col-1]
                const up = matrix[row-1][col]
                var edge = Math.min(prev, left, up) + 1
                matrix[row][col] = edge
                max = Math.max(max, edge)
            }
        }
    }
    return max*max
}
module.exports = {
    solve : solve
};