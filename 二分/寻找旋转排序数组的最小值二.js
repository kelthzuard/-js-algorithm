//地址：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/solution/
//思路：如果无法判断顺序 left == mid == right，则返回两边较小的值。
var findMin = function(nums) {
    function find(left, right) {
        if (left >= right) {
            return nums[left]
        }
        let mid = Math.floor((left+right)/2)
        if (nums[left] == nums[mid] && nums[mid] == nums[right]) {
            return Math.min(find(left, mid), find(mid+1, right))
        }
        else if (nums[right] >= nums[mid]) {
            return find(left, mid)
        }
        else {
            return find(mid+1, right)
        }
    }
    return find(0, nums.length-1)
};