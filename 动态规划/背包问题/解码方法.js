//地址：https://leetcode-cn.com/problems/decode-ways/
//思路：动态规划，完全背包的思想。但不同的是每次只匹配一个。
var numDecodings = function(s) {
    const sn = s.length
    var dp = new Array(sn+1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= sn; i ++) {
        if (s[i-1] != '0') {
            dp[i] += dp[i-1]
        }
        if (i > 1) {
            const char = s[i-2] + s[i-1]
            if (char >= 10 && char <= 26) {
                dp[i] += dp[i-2]
            }
        }
    }
    return dp[sn]
};