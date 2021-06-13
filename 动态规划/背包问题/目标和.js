// 地址：https://leetcode-cn.com/problems/target-sum/submissions/
// 思路：令正数和为A，负数和为B。则S = A - B，sum(nums) = A + B 所以正数和为(S+sum)/2。转换为01背包求方案数的问题。
var findTargetSumWays = function(nums, S) {
    const sum = nums.reduce((s, cur) => {
        return s + cur
    }, 0)
    if (S > sum || (S+sum)%2 != 0) {
        return 0
    }
    const target = (S + sum)/2
    const I = nums.length
    var dp = new Array(target+1).fill(0)
    dp[0] = 1
    for (let i = 0; i < I; i ++) {
        for (let j = target; j >= nums[i]; j --) {
            dp[j] += dp[j-nums[i]]
        }
    }
    return dp[target]
};