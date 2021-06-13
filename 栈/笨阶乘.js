//地址：https://leetcode-cn.com/problems/clumsy-factorial/submissions/
//思路：仅有运算符的栈处理方式，如果是乘除，出栈立即计算，如果是正数压入栈，负数压入负值
var clumsy = function(N) {
    var stack = [N]
    var count = N
    count --
    for (let i = 0 ; count > 0; i ++) {

        if (i%4 == 0) {
            stack.push(stack.pop()*count)
        }
        else if (i%4 == 1) {
            stack.push(parseInt(stack.pop()/count))
        }
        else if (i%4 == 2) {
            stack.push(count)
        }
        else {
            stack.push(0-count)
        }
        count -- 
    }
    return stack.reduce((sum, cur) => {
        return sum + cur
    }, 0)
};