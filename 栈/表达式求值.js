// 地址：https://www.nowcoder.com/practice/c215ba61c8b1443b996351df929dc4d4?tpId=117&tqId=37849&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 思路：首先把中序遍历转换为逆波兰表达式（后序遍历），再利用双栈计算
// 你需要设定一个栈SOP,和一个线性表 L 。SOP用于临时存储运算符和左括号分界符( ，L用于存储后缀表达式。
//     遍历原始表达式中的每一个表达式元素
//     （1）如果是操作数，则直接追加到 L中。只有 运算符 或者 分界符（ 才可以存放到 栈SOP中
//     （2）如果是分界符
//              Ⅰ 如果是左括号 ( ， 则 直接压入SOP，等待下一个最近的 右括号 与之配对。
//               Ⅱ 如果是右括号），则说明有一对括号已经配对(在表达式输入无误的情况下)。不将它压栈，丢弃它，然后从SOP中出栈，得到元素e，将e依次追加到L里。一直循环，直到出栈元素e 是 左括号 ( ，同样丢弃他。
//     （3）如果是运算符（用op1表示）
//             Ⅰ如果SOP栈顶元素（用op2表示） 不是运算符，则二者没有可比性，则直接将此运算符op1压栈。 例如栈顶是左括号 ( ，或者栈为空。
//              Ⅱ 如果SOP栈顶元素（用op2表示） 是运算符 ，则比较op1和 op2的优先级。如果op1 > op2 ，则直接将此运算符op1压栈。
//     如果不满足op1 > op2，则将op2出栈，并追加到L，再试图将op1压栈，如果如果依然不满足 op1>新的栈顶op2，继续将新的op2弹出追加到L ，直到op1可以压入栈中为止。
//     也就是说，如果在SOP栈中，有2个相邻的元素都是运算符，则他们必须满足：下层运算符的优先级一定小于上层元素的优先级，才能相邻。
//     最后，如果SOP中还有元素，则依次弹出追加到L后，就得到了后缀表达式。
function solve( s ) {
    s = s.split("");
    var adv = new Map();
    adv.set('*', 2); // 设置操作数优先级别
    adv.set('+', 1);
    adv.set('-', 1);
    var stack = [];
    var back = [];
    var i = 0;
    while (i < s.length) { // 首先将中序转换为逆波兰表达式
        let val = s[i];
        while(i < s.length-1 && !isNaN(Number(s[i])) &&!isNaN(Number(s[i+1]))) { //拿到多位整数，比如100
            i ++; 
            val += s[i]; 
        }
        if (!isNaN(Number(val))) { // 如果是数字直接push进后序
            back.push(val);
        }
        else if (val == ')'){
            while(stack[stack.length-1] != '(') { // 如果是右括号直接找到第一个左括号，把其中元素入栈后序
                back.push(stack.pop());
            }
            stack.pop();
        }
        else if (val == '(') {
            stack.push('(');
        }
        else {
            while(stack.length > 0 && adv.has(stack[stack.length-1]) && adv.get(val) < adv.get(stack[stack.length-1])){
                back.push(stack.pop()); //如果栈顶是运算符，元素是运算符，必须要元素优先级大于栈顶才能入栈，否则出栈入栈后序，直到元素能入栈。
            }
            stack.push(val);
        }
        i ++;
    }
    while(stack.length > 0) {
        back.push(stack.pop());
    }
    function caculate(n1, n2, type) {
        n1 = Number(n1);
        n2 = Number(n2);
        switch(type) {
            case '+': return n1 + n2;
            case '-': return n1 - n2;
            case '*': return n1 * n2;
        }
    }
    var cacu = [];
    back.reverse();
    while(back.length > 0) {
        let n = back.pop();
        if (!isNaN(Number(n))) { //如果是数字入栈
            cacu.push(n);
        }
        else { //如果是操作符则出栈两个计算再入栈
            let num2 = cacu.pop();
            let num1 = cacu.pop();
            cacu.push(caculate(num1, num2, n));
        }
    }
    return cacu[0]; //正常只剩一个，即答案。
}
module.exports = {
    solve : solve
};