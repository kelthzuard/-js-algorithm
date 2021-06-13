//地址：https://leetcode-cn.com/problems/ones-and-zeroes/submissions/
//思路：多维01背包求最优解。只需要在循环条件时循环二维即可。
var findMaxForm = function(strs, m, n) {
    var dp = new Array(m+1).fill(0).map(() => {
        return new Array(n+1).fill(0)
    })
    var max = -Infinity;
    for (let i = 0; i < strs.length; i ++) {
        let M = 0
        let N = 0
        let str = strs[i]
        for (let s = 0; s < str.length; s ++) {
            if (str[s] == '1') N ++
            else M ++
        }
        for (let j = m; j >= M; j --) {
            for (let k = n; k >= N; k --) {
                dp[j][k] = Math.max(dp[j][k], (dp[j-M][k-N]+1))
            }
        }
    }
    return dp[m][n]
};