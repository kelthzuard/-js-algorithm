// 地址：https://leetcode-cn.com/problems/counting-bits/solution/bi-te-wei-ji-shu-by-leetcode-solution-0t1i/
// 其他几种方法太变态了，选了个最简单的。
var countBits = function(num) {
    function count_one(n) {
        var count = 0
        while(n > 0) {
            count ++;
            n = n & (n-1); // n和(n-1)的按位与运算会把最后一位变成0
        }
        return count;
    }
    var sum = []
    for (let i = 0; i <= num; i ++) {
        sum.push(count_one(i));
    }
    return sum;
};