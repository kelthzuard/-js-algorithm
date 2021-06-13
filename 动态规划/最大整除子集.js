//地址：https://leetcode-cn.com/problems/largest-divisible-subset/
//思路：动态规划，和最长递增子序列一样
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => {
        return a - b
    })
    var m = 0
    var dp = new Array(nums.length).fill(1)
    for (let i = 0; i < dp.length; i ++) {
        let max = 0
        const n = nums[i]
        for (let j = 0; j < i; j ++) {
            if (n % nums[j] == 0 && dp[j] > max) {
                max = dp[j]
            }
        }
        dp[i] = max + 1
        if (dp[i] > m) { m = dp[i]}
    }
    var n = dp.length - 1
    var output = []
    while(m > 0) {
        if (dp[n] == m) {
            if (output.length == 0 || output[output.length-1] % nums[n] == 0) {
                output.push(nums[n])
                m -- 
            }
        }
        n --
    }
    return output.reverse()
};