// 地址：https://leetcode-cn.com/problems/maximum-product-subarray/
// 思路：记录最大最小的。答案一定在中间
var maxProduct = function(nums) {
    var max = nums[0]
    var min = nums[0]
    var gmax = nums[0]
    for (let i = 1; i < nums.length; i ++) {
        let val = nums[i]
        let x = val*max
        let y = min*val
        max = Math.max(val, x, y)
        min = Math.min(val, x, y)
        gmax = Math.max(gmax, max)
    }
    return gmax
};