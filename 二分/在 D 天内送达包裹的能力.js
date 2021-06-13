// 地址：https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/
// 和珂珂吃香蕉一模一样
var shipWithinDays = function(weights, D) {
    function cacu(payload) {
        var day = 1
        var reload = payload
        for (let val of weights) {
            if (reload < val) {
                day ++
                reload = payload
            }
            reload -= val
        }
        return day
    }
    var max = -Infinity
    var sum = weights.reduce((s, cur) => {
        if (cur > max) max = cur
        return s + cur
    }, 0)
    function find(left, right) {
        if (left >= right) return left
        const mid = Math.floor((left+right)/2)
        if (cacu(mid) <= D) {
            return find(left, mid)
        }
        else {
            return find(mid+1 ,right)
        }
    }
    return find(max, sum)
};