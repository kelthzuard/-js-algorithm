// 地址：https://leetcode-cn.com/problems/minimum-number-of-days-to-make-m-bouquets/
// 思路：二分，但是注意在单次判断中只需要判断连续小于day的k长度子串数量即可。不用回溯。麻了

var minDays = function(bloomDay, m, k) {
    const n = bloomDay.length
    function find(day) {
        var count = 0
        var single = 0
        for (let val of bloomDay) {
            if (val <= day) {
                single ++
                if (single == k) {
                    count ++
                    single = 0
                }
                if (count >= m) return true
            }
            else {
                single = 0
            }
        }
        return false
    }
    if (Math.floor(n/k) < m) return -1
    var min = Infinity
    var max = bloomDay.reduce((max, cur) => {
        if (cur < min) min = cur
        return cur > max?cur:max
    }, 0)
    function traverse(left, right) {
        if (left >= right) return left
        const mid = Math.floor((left + right)/2)
        const r = find(mid)
        if (r) {
            return traverse(left, mid)
        }
        else {
            return traverse(mid+1, right)
        }
    }
    return traverse(min, max)
};