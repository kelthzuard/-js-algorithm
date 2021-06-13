//地址：https://leetcode-cn.com/problems/partition-equal-subset-sum/
//思路：01背包，首先算出数组和的一半作为目标。接着用01背包的思想，如果可以装满容量i则dp[i] = true
var canPartition = function(nums) {
    var sum = nums.reduce((s, cur) => {
        return s + cur
    }, 0)
    if (sum % 2 != 0) {return false}
    sum = sum/2
    const I = nums.length
    var dp = new Array(sum+1).fill(false)
    dp[0] = true
    for (let i = 0; i < I; i ++) {
        for (let j = sum; j >= 0; j --) {
            if (!dp[j] && j >= nums[i] && dp[j-nums[i]]) {
                dp[j] = true // 01背包，如果可以装满容量j则设置成true
            }
            if (dp[sum]) {return true}
        }
    }
    return false
};