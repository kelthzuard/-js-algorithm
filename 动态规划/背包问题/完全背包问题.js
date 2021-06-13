// 完全背包问题指物品无限制，可以任意取用
// 这个问题和01背包问题的区别在于不需要从后往前遍历，只需要从前往后遍历，指后面的状态可以覆盖前面，即可以多次取用
// 这种情况下内外层的循环可以交换。 
function compeletePackage(I, N, weights, items) {
    var dp = new Array(N+1).fill(0)
    for (let i = 0; i < I; i ++) {
        for (let j = 0; j <= N; j ++) {
            let doAdd = (j >= weights[i])?(dp[j-weights[i]] + items[i]):0
            dp[j] = Math.max(dp[j], doAdd)
        }
    }
    return dp[N]
}

// 例子leetcode零钱兑换：https://leetcode-cn.com/problems/coin-change/submissions/
// 思路：1：这里是求最小，所以用min，weight为硬币面额，容量为总面额，价值为1
// 2：这里要求恰好找零，所以用Infinity为初始状态，最后检查最后一个是不是Infinity
var coinChange = function(coins, amount) {
    var dp = new Array(amount+1).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i < coins.length; i ++) {
        for (let j = 1; j <= amount; j ++) {
            let doAdd = (j >= coins[i])?(dp[j-coins[i]]+1):Infinity
            dp[j] = Math.min(dp[j], doAdd)
        }
    }
    return (dp[amount] == Infinity)?-1:dp[amount]
};