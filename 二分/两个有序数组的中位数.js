// 地址：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
// 思路：看题解，主要是每次比较 k / 2 - 1如果哪个小，说明小的那个左边全部排除，k - (k/2), 小的那个index+1
var findMedianSortedArrays = function(nums1, nums2) {
    const l1 = nums1.length
    const l2 = nums2.length
    function find(k) {
        var index1 = 0
        var index2 = 0
        while(true) {
            if (index1 === l1) {
                return nums2[index2 + k - 1] // 如果超出，说明一个数组全部被排除，直接返回另一个数组的即可
            }
            if (index2 === l2) {
                return nums1[index1 + k - 1]
            }
            if (k === 1) {
                return Math.min(nums2[index2], nums1[index1]) // 如果只剩一个，直接返回最小的那个
            }
            const x = Math.floor(k/2) - 1
            let next1 = Math.min(index1 + x, l1 - 1)
            let next2 = Math.min(index2 + x, l2 - 1)
            if (nums1[next1] <= nums2[next2]) {
                k = k - (next1 - index1) - 1 //这里必须这么减，因为如果是遇到了边界，就不一定减的是 k / 2
                index1 = next1 + 1
            }
            else {
                k = k - (next2 - index2) - 1
                index2 = next2 + 1
            }
        }
    }
    if ((l1 + l2) % 2 === 0) {
        const half = (l1+l2) / 2
        return ((find(half) + find(half+1)) / 2)
    }
    else {
        return find(Math.floor((l1+l2+1)/2))
    }
};