//地址：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/submissions/
//思路：哪边有序就找另外一边，判断有序先判断右边，因为存在可能两边都有序的情况，所以一定在左边。
var findMin = function(nums) {
    function find(left, right) {
        if (left >= right) {
            return nums[left]
        }
        let mid = Math.floor((left+right)/2)
        if (nums[mid] < nums[right]) {
            return find(left ,mid)
        }
        else {
            return find(mid+1, right)
        }
    }
    return find(0 ,nums.length-1)
};