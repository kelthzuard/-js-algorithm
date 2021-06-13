//地址：https://www.nowcoder.com/practice/c623426af02d4c189f92f2a99647bd34?tpId=117&tqId=37793&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 维护两个栈，一个单调减栈，一个正常栈。pop时只有两个栈顶相同时单调栈出栈，这样保证最小值一直在栈中且在栈顶。
function getMinStack( op ) {
    var stack = [];
    var min = [];
    function push(x) {
        stack.push(x);
        if (x < min[min.length-1] || min.length == 0) {
            min.push(x);
        }
    }
    function pop() {
        let v = stack.pop();
        if (min[min.length-1] == v) {
            min.pop();
        }
    }
    function getMin() {
        return min[min.length-1];
    }
    var output = [];
    op.forEach(v => {
        if (v[0] == 1) {
            push(v[1]);
        }
        else if (v[0] == 2) {
            pop();
        }
        else {
            output.push(getMin());
        }
    });
    return output;
}
module.exports = {
    getMinStack : getMinStack
};