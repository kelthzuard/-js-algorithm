// 多重背包问题指每一种物品有数量限制number[i]
// 多重背包问题同样可以转换为01背包和完全背包问题
// 当一件物品装满大于容量后，视为完全背包问题
// 当物品小于容量时，视作很多件相同物品的01背包问题。为了简化问题,采用二进制的想法，分成1, 1*2, 2*2, 4*2 ...这种容积物品的集合。对于每一种物品做零一背包。

function zeroPackage(weight, value, N, dp) {
    for (let i = dp[N]; i > 0; i --) {
        let doAdd = (i >= weight)?(dp[i-weight] + value):0
        dp[i] = Math.max(doAdd, dp[i])
    }
}

function completePackage(weight, value, N, dp) {
    for (let i = 1; i <= N; i ++) {
        let doAdd = (i > weight)?(dp[i-weight]  + value):0
        dp[i] = Math.max(doAdd, dp[i])
    }
}

function multiPackage(N, value, weight, number) {
    if ( weight*number >= N) {
        completePackage(weight, value, N, dp)
    }
    else {
        for (let j = 1; j <= number;) {
            zeroPackage(weight*j, value*j, N, dp)
            number -= j
            j = (number >= j*2)?j*2:number
        }
    }
}

function solve(N, I, items, weights, numbers) {
    var dp = new Array(N+1).fill(0)
    for (let i = 0; i < I; i ++) {
        multiPackage(N, items[i], weights[i], numbers[i])
    }
    return dp[N]
}