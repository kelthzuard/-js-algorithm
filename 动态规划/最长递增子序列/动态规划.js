// 地址:https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/
// dp[i] = max(dp[j]) + 1 (0<=j<i && num[j]<num[i])
// 时间复杂度O(n2)
var lengthOfLIS = function(nums) {
    var dp = new Array(nums.length);
    var max = 0;
    for (let i = 0; i < nums.length; i ++) {
        let temp_max = 0;
        for (let j = 0; j < i; j ++) {
            if (nums[j] < nums[i] && dp[j] > temp_max) {
                temp_max = dp[j];
            }
        }
        if (temp_max + 1 > max) {
            max = temp_max + 1;
        }
        dp[i] = temp_max + 1;
    }
    return max;
};