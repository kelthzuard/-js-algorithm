//地址：https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
//思路1：动态规划

var cuttingRope = function(n) {
    var dp = new Array(n+1).fill(0)
    dp[1] = 1
    for (let i = 2; i <= n; i ++) {
        let max = 0
        for (let j = 1; j < i; j ++) {
            max = Math.max((i - j)*dp[j], max)
        }
        if (i !== n) {
            dp[i] = Math.max(max, i)
        }
        else {
            dp[i] = max
        }

    }
    return dp[n]
};

// 思路2：贪心，尽可能多的分成3的数列

var cuttingRope = function(n) {
    if (n <= 3) {
        return n - 1
    }
    const x = Math.floor(n/3)
    const y = n % 3
    if (y === 0) return Math.pow(3, x)
    else if (y == 2) return Math.pow(3, x)*2
    else if (y == 1) return Math.pow(3, x - 1)*4
};