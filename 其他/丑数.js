//地址：https://leetcode-cn.com/problems/ugly-number/
//思路：不停得除2，3，5直到有可以除得就跳到下一阶段，直到不能除且不等于1，就返回false
var isUgly = function(n) {
    if (n <= 0) {return false}
    var r = true
    function find(N) {
        let div = false
        for (let i of [2,3,5]) {
            if (N%i == 0) {
                div = true
                find(N/i)
                break
            }
        }
        if (!div && N != 1) {
            r = false
        }
    }
    find(n)
    return r
};