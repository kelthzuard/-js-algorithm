// 地址：https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/
// 思路：dfs加记忆矩阵

var longestIncreasingPath = function(matrix) {
    const row = matrix.length
    const col = matrix[0].length
    var gmax = 0
    var dp_after = new Array(row).fill(0).map(() => {
        return new Array(col).fill(0)
    })
    function reverse(r, c, times) {
        const val = matrix[r][c]
        if (dp_after[r][c] > 0) {
            gmax = Math.max(gmax, times+dp_after[r][c])
            return dp_after[r][c]
        }
        var up = 0,down = 0,left = 0,right = 0
        if (r < row - 1 && matrix[r+1][c] > val) {
            down = reverse(r+1, c, times+1)
        }
        if (r > 0 && matrix[r-1][c] > val) {
            up = reverse(r-1, c, times+1)
        }
        if (c > 0 && matrix[r][c-1] > val) {
            left = reverse(r, c-1, times+1)
        }
        if (c < col - 1 && matrix[r][c+1] > val) {
            right = reverse(r, c+1, times+1)
        }
        dp_after[r][c] = Math.max(down, up, left, right) + 1
        gmax = Math.max(dp_after[r][c]+times, gmax)
        return dp_after[r][c]
    }
    for (let i = 0; i < row; i ++) {
        for (let j = 0; j < col; j ++) {
            reverse(i, j, 0)
        }
    }
    return gmax
};