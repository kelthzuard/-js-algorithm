//地址：https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/submissions/
//思路：如果出现left == mid == right.则无法判断，需要左右都递归
var search = function(nums, target) {
    function sort(left, right) {
        
        if (left >= right) {
            if (nums[left] == target) {
                return true
            }
            return false
        }
        let mid = Math.floor((left+right)/2)
        let cur = nums[mid]
        if (nums[left] == cur && nums[right] == cur) {
            return sort(left, mid) || sort(mid+1, right)
        }
        else if (cur >= nums[left]) {
            if (cur >= target && target >= nums[left]) {
                return sort(left, mid)
            }
            else {
                return sort(mid+1, right)
            }
        }
        else {
            if (cur < target && target <= nums[right]) {
                return sort(mid+1, right)
            }
            else {
                return sort(left, mid)
            }
        }
    }
    return sort(0, nums.length-1)
};