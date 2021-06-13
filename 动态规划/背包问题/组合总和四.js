// 地址：https://leetcode-cn.com/problems/combination-sum-iv/submissions/
// 思路：和零钱兑换二很像( 完全背包),但是外层是容量，内层是item，这样每次遍历都会完全考虑顺序，是组合的全排列，会出现重复的组合。
var combinationSum4 = function(nums, target) {
    var dp = new Array(target+1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= target; i ++) {
        for (let j = 0; j < nums.length; j ++) {
            if (i >= nums[j]) {
                dp[i] += dp[i-nums[j]] 
            }
        }
    }
    return dp[target]
};