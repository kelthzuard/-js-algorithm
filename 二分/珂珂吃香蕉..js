// 地址：https://leetcode-cn.com/problems/koko-eating-bananas/submissions/
// 思路：用一个函数计算每个速度对应的时间，在[1,max[piles]]中做二分
var minEatingSpeed = function(piles, h) {
    var max = piles.reduce((max, cur) => {
        if (cur > max) {return cur}
        else return max
    }, 0)
    function getResult(k) {
        let hours = 0;
        for (let val of piles) {
            hours += Math.floor(val/k)
            if (val % k != 0) {hours ++}
        }
        return hours
    }
    let left = 0
    let right = max
    while(left<right) {
        let mid = Math.floor((left+right)/2)
        let r = getResult(mid)
        if (r <= h) {
            right = mid
        }
        else {
            left = mid + 1
        }
    }
    return left
};