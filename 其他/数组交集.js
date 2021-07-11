// 地址：https://leetcode-cn.com/problems/intersection-of-two-arrays/
var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    const n1 = nums1.length
    const n2 = nums2.length
    const output = []
    for (let i = 0,j = 0; (i < n1 && j < n2); ) {
        if (nums1[i] == nums2[j]) {
            output.push(nums1[i])
            while(i < n1 - 1 && nums1[i] == nums1[i+1]) i ++
            while(j < n2 - 1 && nums2[j] == nums2[j+1]) j ++
            i ++
            j ++
        }
        else if (nums1[i] > nums2[j]) j ++
        else i ++
    }
    return output
};