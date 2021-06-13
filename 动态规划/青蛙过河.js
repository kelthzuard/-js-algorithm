//地址：https://leetcode-cn.com/problems/frog-jump/submissions/
// 思路：每次用map保存可以到达的步长值。
var canCross = function(stones) {
    const len = stones.length
    var dp = new Array(len).fill(0).map(() => {
        return {}
    })
    if (stones[1] != 1) return false
    dp[1][1] = true
    function find(left, right, target) {
        if (left >= right) {
            if (stones[left] == target) return left
            else return false
        }
        const mid = Math.floor((left+right)/2)
        if (target <= stones[mid]) {
            return find(left, mid, target)
        }
        else {
            return find(mid+1, right, target)
        }
    }
    for (let i = 1; i < len-1; i ++) {
        for (let step in dp[i]) {
            step = Number(step)
            for (let nextStep of [step-1, step, step+1]) {
                if (nextStep <= 0) continue 
                let left = i + 1
                let right = (i + nextStep >= len)?len-1:(i + nextStep)
                let next = find(left, right, stones[i]+nextStep)
                if (next) {
                    dp[next][nextStep] = true
                }
            }
        }
    }
    for (let key in dp[len-1]) { //判断对象为不为空的方法
        return true
    }
    return false
};