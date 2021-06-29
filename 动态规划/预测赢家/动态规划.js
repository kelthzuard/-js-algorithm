// 地址：https://leetcode-cn.com/problems/predict-the-winner/submissions/
// dp矩阵 dp[i][j]代表在区间i,j之间最大的差值。
var PredictTheWinner = function(nums) {
    const n = nums.length
    var dp = new Array(n).fill(0).map(() => {
        return new Array(n).fill(0)
    })
    for (let i = 0; i < n; i ++) {
        dp[i][i] = nums[i]
    }
    for (let i = n - 2; i >= 0; i --) {
        for (let j = i + 1; j < n; j ++) {
            dp[i][j] = Math.max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1])
        }
    }
    return dp[0][n-1] >= 0
};