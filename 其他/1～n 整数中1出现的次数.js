//地址：https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/
//看题解
var countDigitOne = function(n) {
    let cur = n % 10
    let high = parseInt(n / 10)
    let low = 0
    var digit = 1
    var total = 0
    while(cur !== 0 || high !== 0) {
        if (cur == 0) {
            total += high*digit
        }
        else if (cur == 1) {
            total += high*digit + low + 1
        }
        else {
            total += (high+1)*digit
        }
        low += cur * digit
        cur = high % 10
        high = parseInt(high / 10)
        digit *= 10
    }
    return total
};