// 地址：https://leetcode-cn.com/problems/spiral-matrix/
// 思路：设置四个边界值，每次转圈遍历再把边界缩减。
var spiralOrder = function(matrix) {
    var top = 0;
    var bottom = matrix.length;
    var left = 0;
    var right = matrix[0].length;
    var output = [];
    while(bottom >= top && right >= left) {
        for (let i = left; i < right && bottom > top; i ++) { //除了普通判断以外还需判断另一边是否满足条件。
            output.push(matrix[top][i]);
        }
        top ++;
        for (let i = top; i < bottom && right > left; i ++) {
            output.push(matrix[i][right-1]);
        }
        right --;
        for (let i = right-1; i >= left && bottom > top; i --) {
            output.push(matrix[bottom-1][i]);
        }
        bottom --;
        for (let i = bottom-1; i >= top && right > left; i --) {
            output.push(matrix[i][left]);
        }
        left ++;
    } 
    return output;
};