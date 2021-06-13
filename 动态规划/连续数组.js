// 地址：https://leetcode-cn.com/problems/contiguous-array/
// 思路：用0为-1，1为1，和来作为确定值。
var findMaxLength = function(nums) {
    var hash = new Map()
    hash.set(0, -1)
    var sum = 0
    var max = 0
    for (let i = 0; i < nums.length; i ++) {
        sum += nums[i]
        const zero = i + 1 - sum
        const one = sum
        const diff = -zero + one
        if (hash.has(diff)) {
            const index = hash.get(diff)
            max = Math.max(i - index, max)
        }
        else {
            hash.set(diff, i)
        }
    }
    return max
};