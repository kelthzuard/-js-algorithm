// 地址：https://leetcode-cn.com/problems/house-robber-ii/submissions/
//思路 dp[i] = max(dp[i-2]+num,dp[-1])
//由于有环，考虑要第一个，就不考虑最后一位。或者要最后一位，就不考虑第一位
var rob = function(nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    if (nums.length == 2) {
        return Math.max(nums[0], nums[1])
    }
    const n = nums.length
    var l1 = nums[1]
    var l2 = Math.max(nums[1], nums[2])
    // pick last
    var l3 = nums[0]
    l4 = Math.max(nums[0], nums[1])
    // pick first
    for (let i = 3; i < n; i ++) {
        let cur = Math.max(nums[i]+l1, l2) 
        l1 = l2
        l2 = cur
    }
    max1 = l2
    for (let i = 2; i < n - 1; i ++) {
        let cur = Math.max(nums[i]+l3, l4)
        l3 = l4
        l4 = cur
    }
    max2 = l4
    return Math.max(max1, max2)
};