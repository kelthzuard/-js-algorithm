//地址：https://leetcode-cn.com/problems/132-pattern/solution/132mo-shi-by-leetcode-solution-ye89/
//思路：从右往左遍历1，维护一个2的最大值max2，和一个单调增栈stack
//每次找到一个数，一直出栈直到能入单增栈，并且在单增栈出栈元素中找到能作为2的最大值，置为max2
//如果遍历1的值小于max2.返回true
var find132pattern = function(nums) {
    var stack = []
    var max2 = -Infinity
    for (let i = nums.length-1; i >= 0; i --) {
        let cur = nums[i]
        if (cur < max2) {
            return true
        }
        while(stack.length > 0 && cur > stack[stack.length-1]) {
            let n = stack.pop()
            if (n > max2) {
                max2 = n
            }
        }
        if (cur > max2) {
            stack.push(cur)
        }
    }
    return false
};