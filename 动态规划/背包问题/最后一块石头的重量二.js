// 地址:https://leetcode-cn.com/problems/last-stone-weight-ii/
// 把石头分为尽可能相等的两堆，01背包问题
var lastStoneWeightII = function(stones) {
    const sum = stones.reduce((sum, cur) => {
        return sum + cur
    }, 0)
    const half = Math.ceil(sum/2)
    var dp = new Array(half + 1).fill(false)
    dp[0] = true
    for (let weight of stones) {
        for (let i = half; i >= weight; i --) {
            if (dp[i-weight]) dp[i] = true
        }
    }
    for (let i = half; i >= 0; i --) {
        if (dp[i]) {
            return Math.abs(sum - 2*i)
        }
    }
};