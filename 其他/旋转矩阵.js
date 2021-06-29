//地址：https://leetcode-cn.com/problems/rotate-matrix-lcci/
// 最关键的就是 row=col, col=n-1-row,每次不停的做替换
//思路：想象一个奇数边长的正方形由四个长方形拼凑，每次由长方形进行旋转。
//row为宽，col为长，所以col需要(matrix.length+1)/2
var rotate = function(matrix) {
    const n = matrix.length-1
    for (let i = 0; i < Math.floor(matrix.length/2); i ++) {
        for (let j = 0; j < Math.floor((matrix.length+1)/2); j ++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[n-j][i]
            matrix[n-j][i] = matrix[n-i][n-j]
            matrix[n-i][n-j] = matrix[j][n-i]
            matrix[j][n-i] = temp
        }
    }
};
