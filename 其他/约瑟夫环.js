// 地址：https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/submissions/
//思路：见题解

var lastRemaining = function(n, m) {
    function f(n) {
        if (n == 1) {
            return 0 
        }
        var x = f(n-1)
        return (x + m) % n
    }
    return f(n)
};