// 地址：https://leetcode-cn.com/problems/uncrossed-lines/
// 思路：最长递增子序列

var maxUncrossedLines = function(nums1, nums2) {
    const n1 = nums1.length
    const n2 = nums2.length
    var dp = new Array(n1+1).fill(0).map(() => {
        return new Array(n2+1).fill(0)
    })
    for (let i = 1; i <= n1; i ++) {
        for (let j = 1; j <= n2; j ++) {
            if (nums1[i-1] == nums2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            }
            else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[n1][n2]
};