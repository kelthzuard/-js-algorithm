//地址：https://leetcode-cn.com/problems/convert-integer-lcci/
// 思路：先用异或找出两个数不同的部分，再用 x &(x-1)消去最后一个零找到两个数相差的位数。
var convertInteger = function(A, B) {
    var dif = A ^ B;
    var count = 0;
    while(dif != 0) {
        dif = dif & (dif-1);
        count ++;
    }
    return count;
};