//地址：https://leetcode-cn.com/problems/search-in-rotated-sorted-array/submissions/
//思路：每次比较mid和left，right的值，如果mid > left说明左边有序，否则右边有序。
//在有序的一边查看target是否在有序的边界内，如果是，递归，否则递归另外一边。
var search = function(nums, target) {
    function find(left, right) {
        if (left >= right) {
            if (nums[left] == target) {
                return left
            }
            return -1
        }
        let mid = Math.floor((left+right)/2)
        if (nums[mid] >= nums[left]) {
            if (nums[mid] >= target && target >= nums[left]) {
                return find(left, mid)
            }
            else {
                return find(mid+1, right)
            }
        }
        else {
            if (nums[mid] < target && target <= nums[right]) {
                return find(mid+1, right)
            }
            else {
                return find(left, mid)
            }
        }
    }
    return find(0, nums.length-1)
};

