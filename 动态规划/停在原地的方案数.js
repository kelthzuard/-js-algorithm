// 地址：https://leetcode-cn.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/
// 思路：dp[i][j]代表走过i步在j位置的方案数。dp[i][j] = dp[i-1][j-1](从左向右移动) + dp[i-1][j](不动) + dp[i-1][j+1](从右向左移动)
var numWays = function(steps, arrLen) {
    const max = Math.min(Math.floor(steps/2) + 1, arrLen)
    var dp = new Array(max).fill(0)
    const n = Math.pow(10, 9) + 7
    dp[0] = 1
    for (let i = 1; i <= steps; i ++) {
        var temp = new Array(max).fill(0)
        for (let j = 0; j < max; j ++) {
            const fromleft = j > 0?dp[j-1]:0
            const fromright = j < max - 1?dp[j+1]:0
            temp[j] = (fromleft + dp[j] + fromright)%n
        }
        dp = temp
    }
    return dp[0]
};