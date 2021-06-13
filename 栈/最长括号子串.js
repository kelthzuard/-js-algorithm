//地址：https://www.nowcoder.com/practice/45fd68024a4c4e97a8d6c45fc61dc6ad?tpId=117&tqId=37745&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//思路：每次遇到左括号入栈，遇到右括号出栈，i - 栈顶 = 当前右括号匹配的最长子串。如果栈为空右括号入栈
var longestValidParentheses = function(s) {
    var stack = [-1]
    var max = 0
    for (let i = 0; i < s.length; i ++) {
        let cur = s[i]
        if (cur == '(') {
            stack.push(i)
        }
        else {
            if (stack.length) {
                stack.pop()
                if (stack.length) {
                    let temp = i - stack[stack.length-1]
                    if (temp > max) max = temp
                }
                else {
                    stack.push(i)
                }
            }
        }
    }
    return max
};