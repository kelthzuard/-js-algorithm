//地址：https://leetcode-cn.com/problems/coin-change-2/
//思路：完全背包 dp[i][j] = dp[i-1][j](上一轮可以组成j容量的次数) + dp[i][j-weight[i]](这一轮可以组成该j容量的次数)
// item放在外层，容量放内层代表着有序的排列，不会有重复的组合。
var change = function(amount, coins) {
    const I = coins.length
    var dp = new Array(amount+1).fill(0)
    dp[0] = 1
    for (let i = 0; i < I; i ++) {
        for (let j = coins[i]; j <= amount; j ++) {
            dp[j] += dp[j-coins[i]] //求方案总数的模板
        }
    }
    return dp[amount]
}