//地址：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/submissions/
var evalRPN = function(tokens) {
    var stack = [];
    function cacu(n1, n2, type) {
        switch(type) {
            case '+': return n1 + n2;
            case '-': return n1 - n2;
            case '/': return parseInt(n1/n2);
            case '*': return n1 * n2;
        }
    }
    for (let i = 0; i < tokens.length; i ++) {
        if (!isNaN(Number(tokens[i]))) {
            stack.push(Number(tokens[i]));
        }
        else {
            let n2 = stack.pop();
            let n1 = stack.pop();
            stack.push(cacu(n1, n2, tokens[i]));
        }
    }
    return stack[0];
};