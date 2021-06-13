//地址：https://leetcode-cn.com/problems/spiral-matrix-ii/
//思路：和螺旋矩阵一一摸一样
var generateMatrix = function(n) {
    var dp = new Array(n).fill(0).map(() => {
        return new Array(n).fill(0);
    });
    var i = 1;
    var max = n*n;
    var top = 0;
    var left = 0;
    var right = n-1;
    var bottom = n-1;
    while(i <= max) {
        for (let j = left; j <= right && i <= max; j ++) {
            dp[top][j] = i;
            i ++;
        }
        top ++;
        for (let j = top; j <= bottom && i <= max; j ++) {
            dp[j][right] = i;
            i ++;
        }
        right --;
        for (let j = right; j >= left && i <= max; j --) {
            dp[bottom][j] = i;
            i ++;
        }
        bottom --;
        for (let j = bottom; j >= top && j <= max; j --) {
            dp[j][left] = i;
            i ++;
        }
        left ++;
    }
    return dp;
};