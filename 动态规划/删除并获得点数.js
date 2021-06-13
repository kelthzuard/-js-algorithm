//地址：https://leetcode-cn.com/problems/delete-and-earn/
// 思路：把同样的数字归并在一块儿作为新的数组，然后用打家劫舍的思路做。就first和second那个
var deleteAndEarn = function(nums) {
    var max = -Infinity
    for (let val of nums) {
        if (val > max) max = val
    }
    var dp = new Array(max+1).fill(0) // 注意这里长度是max+1
    for (let i = 0; i < nums.length; i ++) {
        let val = nums[i]
        dp[val] += val
    }
    if (dp.length <= 2) {
        return Math.max(dp[0], dp[1])
    }
    var first = dp[0]
    var second = dp[1]
    max = Math.max(first, second)
    for (let i = 2; i < dp.length; i ++) {
        let m = Math.max(first + dp[i], second)
        if (m > max) {
            max = m
        }
        first = second
        second = m
    }
    return max
};