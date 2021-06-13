// 地址https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    this.sum = [];
    for (let i = 0; i < matrix.length; i ++) {
        let temp = [];
        for (let j = 0; j < matrix[0].length; j ++) {
            let top = (i > 0)?this.sum[i-1][j]:0;
            let left = (j > 0)?temp[j-1]:0;
            let inner = (i > 0 && j > 0)?this.sum[i-1][j-1]:0;
            temp.push(top + left - inner + matrix[i][j]);
        }
        this.sum.push(temp);
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let left = (col1 > 0)?this.sum[row2][col1-1]:0;
    let right = (row1 > 0)?this.sum[row1-1][col2]:0;
    let inner = (col1 > 0 && row1 > 0)?this.sum[row1-1][col1-1]:0;
    return this.sum[row2][col2] - right - left + inner;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */