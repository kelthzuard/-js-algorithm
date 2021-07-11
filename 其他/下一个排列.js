// 地址：https://leetcode-cn.com/problems/next-permutation/
// 思路：从末尾开始找到第一个不为递增的值，再从后往前找到第一个大于该值的值，交换，再用双指针倒序后面
var nextPermutation = function(nums) {
    const n = nums.length
    for (let i = n - 2; i >= 0; i --) {
        if (nums[i] < nums[i+1]) {
            let l = i + 1
            let r = n - 1
            for (let j = n - 1; j > i; j --) {
                if (nums[i] < nums[j]) {
                    [nums[i], nums[j]] = [nums[j], nums[i]]
                    break
                }
            }
            while(l < r) {
                [nums[l], nums[r]] = [nums[r], nums[l]]
                l ++
                r --
            }
            return
        }
    }
    nums = nums.reverse()
    return
};