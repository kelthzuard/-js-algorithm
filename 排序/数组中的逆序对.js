// 地址：https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
// 思路：利用归并排序的性质，左右两边有序，就可以找出左边大于右边的逆序对。
var reversePairs = function(nums) {
    const n = nums.length
    var output = 0
    function doMerge(left, mid, right) {
        const l = nums.slice(left, mid+1)
        const r = nums.slice(mid+1, right+1)
        for (let i=0,j=0,k=left; k <= right; k ++) {
            if (i >= l.length) {
                nums[k] = r[j]
                j ++
            }
            else if (j >= r.length) {
                nums[k] = l[i]
                i ++
                output += j
            }
            else {
                if (l[i] <= r[j]) {
                    nums[k] = l[i]
                    i ++
                    output += j
                }
                else {
                    nums[k] = r[j]
                    j ++
                }
            }
        }
    }
    function merge(left, right) {
        if (left >= right) {
            return 
        }
        const mid = Math.floor((left+right)/2)
        merge(left, mid)
        merge(mid+1, right)
        doMerge(left, mid, right)
    }
    merge(0, nums.length-1)
    return output
};