//地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/solution/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-yec2/
// 思路：设置一个间隔，当重复次数大于2时，间隔加一，注意当重复次数大于2即需要无视当前数时。不做下标的增加，因为间隔加一等于下表增加。
var removeDuplicates = function(nums) {
    var prev = null
    var repeat = 0
    var space = 0
    for (var i = 0; (i+space) < nums.length;) {
        let cur = nums[i+space]
        if (cur != prev) {
            prev = cur
            repeat = 0
            nums[i] = nums[i+space]
            i ++
        }
        else {
            repeat += 1
            if (repeat >= 2) {
                space += 1
                nums[i] = nums[i+space]
            }
            else {
                nums[i] = nums[i+space]
                i ++
            }
        }
    }
    return i
};