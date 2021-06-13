//地址：https://leetcode-cn.com/problems/sorted-matrix-search-lcci/
//思路：把矩阵的左下角看成二叉搜索树，左边上边都是左子树小于，右边都是右子树大于。从左下角开始每次比较即可
var searchMatrix = function(matrix, target) {
    let r = matrix.length-1
    let c = 0
    while(r >= 0 && c < matrix[0].length) {
        let cur = matrix[r][c]
        if (cur == target) {return true}
        if (cur > target) {
            r --
        }
        else {
            c ++
        }
    }
    return false
};