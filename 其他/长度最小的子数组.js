//地址：https://leetcode-cn.com/problems/minimum-size-subarray-sum/
// 滑动窗口
var minSubArrayLen = function(target, nums) {
    let l = 0
    let r = 0
    let min = Infinity
    let total = nums[0]
    while(r < nums.length) {
        if (total < target) {
            r ++
            total += nums[r]
        }
        else {
            min = Math.min(r - l + 1, min)
            total -= nums[l]
            l ++
        }
    }
    return min == Infinity?0:min
};