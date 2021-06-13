// 01背包问题指，有I件物品放到N个容量的背包中，每个物品有自己的重量和价值，返回最大价值。
// 思路是遍历每个物品，之中遍历每个容量(0,N)的状态，f[i][n] = Max(f[i-1][n], (f[i-1][n-weight[n]] + value[i]))
// 其中f[i-1]其实就是代表上一遍的状态，所以可以简化思路，仅用一个数组保存状态。为了避免前面处理的内容影响后面的，从后往前遍历。
// 遍历的顺序对于普通方法可以先N后I或者先I后N都可以。但对于简化方法必须先I后N，才能保证最后遍历的那一次可以更新到dp[N]的最佳状态。
function package(N, I, items, weights) {
    var dp = new Array(I+1).fill(0).map(() => {
        return new Array(N+1).fill(0)
    })
    // 将dp数组增多一维，来处理i-1的边界问题
    for (let i = 1; i <= I; i ++) {
        for (let j = 0; j < N+1; j ++) {
            let t = i - 1 //因为是i多了一维，所以实际对应的标号是i-1
            let doAdd = (j >= weights[t])?(dp[i-1][j-weights[t]] + items[t]):0
            dp[i][j] = Math.max(dp[i-1][j], doAdd)
        }
    }
    return dp
}
// 背包可以不被装满，所以每个状态都有一个合理状态不装任何东西（0）
function packageBetterNofull(N, I, items, weights) {
    var dp = new Array(N+1).fill(0)
    for (let i = 0; i < I; i ++) {
        for (let j = N; j > 0; j --) {
            let doAdd = (j >= weights[i])?(dp[j-weights[i]] + items[i]):0
            dp[j] = Math.max(dp[j], doAdd)
        }
    }
    return dp
}
//背包不能不被装满，所以除了第一个0状态有合理解0以外，其他状态都没有初始合理解，设置为-Infinity
function packageBetterFull(N, I, items, weights) {
    var dp = new Array(N+1).fill(-Infinity)
    dp[0] = 0
    for (let i = 0; i < I; i ++) {
        for (let j = N; j > 0; j --) {
            let doAdd = (j >= weights[i])?(dp[j-weights[i]] + items[i]):0
            dp[j] = Math.max(dp[j], doAdd)
        }
    }
    return dp
}

var items = [4, 2, 3]
var weights = [2, 1, 3]
console.log(packageBetter(4, 3, items, weights))