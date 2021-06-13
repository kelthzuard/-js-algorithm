//地址https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
// 思路==括号匹配，当和栈顶相同时出栈，否则入栈
var removeDuplicates = function(S) {
    S = S.split("");
    var stack = [];
    for (let i = 0; i < S.length; i ++) {
        if (stack.length > 0 && S[i] == stack[stack.length-1]) {
            stack.pop();
        }
        else {
            stack.push(S[i]);
        }
    }
    return stack.join("")
};

