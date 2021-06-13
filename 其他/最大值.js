//地址：https://leetcode-cn.com/problems/largest-number/
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        let left = String(a) + String(b)
        let right = String(b) + String(a)
        if (left > right) {
            return -1
        }
        else {
            return 1
        }
    })
    if (nums[0] == 0) {
        return '0'
    }
    return nums.join("")
};