//地址：https://leetcode-cn.com/problems/merge-sorted-array/submissions/
//思路：倒序插入
var merge = function(nums1, m, nums2, n) {
    for (let i = m+n-1,j=m-1,k=n-1; i >= 0; i --) {
        let n1 = (j >= 0)?nums1[j]:-Infinity
        let n2 = (k >= 0)?nums2[k]:-Infinity
        if (n1 > n2) {
            nums1[i] = nums1[j]
            j --
        }
        else {
            nums1[i] = nums2[k]
            k --
        }
    }
};