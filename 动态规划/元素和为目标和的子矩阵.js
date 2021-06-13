// 地址：https://leetcode-cn.com/problems/number-of-submatrices-that-sum-to-target/
// 思路：确定上下界后，算每列的和，再用和为目标值的子矩阵的思路算。
var numSubmatrixSumTarget = function(matrix, target) {
    const row = matrix.length
    const col = matrix[0].length
    var gcount = 0
    function cacu(sum) {
        var map = new Map()
        map.set(0, 1)
        let total = 0
        for (let val of sum) {
            total += val
            if (map.has(total - target)) {
                gcount += map.get(total - target)
            }
            map.set(total, (map.get(total) || 0) + 1)
        }
    }
    for (let i = 0; i < row; i ++) {
        var sum = new Array(col).fill(0)
        for (let j = i; j < row; j ++) {
            for (let n = 0; n < col; n ++) {
                sum[n] += matrix[j][n]
            }
            cacu(sum)
        }
    }
    return gcount
};