//地址：https://leetcode-cn.com/problems/ugly-number-ii/submissions/
//思路：动态规划，设置p2,p3,p5表示当前应该*n的元素，每次取三者的最小值。取到谁谁就+1
var nthUglyNumber = function(n) {
    var dp = [0, 1]
    var p2 = 1
    var p3 = 1
    var p5 = 1
    for (let i = 2; i <= n; i ++) {
        const min = Math.min(dp[p2]*2, dp[p3]*3, dp[p5]*5)
        if (min == dp[p2]*2) {
            p2 ++
        }
        if (min == dp[p3]*3) {
            p3 ++
        }
        if (min == dp[p5]*5){
            p5 ++
        }
        dp[i] = min
    }
    return dp[n]
};