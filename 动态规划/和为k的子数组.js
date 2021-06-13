// 地址：https://leetcode-cn.com/problems/subarray-sum-equals-k/
// 思路： pre[i] - pre[j] = k ----> pre[j] = pre[i] - k 所以只需要知道所有pre[i] - k的面积个数，即pre[j]即可
var subarraySum = function(nums, k) {
    let sum = 0
    let total = 0
    var map = new Map()
    map.set(0, 1)
    for (let val of nums) {
        sum += val
        if (map.has(sum - k)) {
            total += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return total
};