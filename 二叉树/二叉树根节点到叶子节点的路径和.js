//地址：https://www.nowcoder.com/practice/185a87cd29eb42049132aed873273e83?tpId=117&tqId=37715&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//递归
function sumNumbers( root ) {
    var output = 0;
    function find(node, val) {
        if (node == null) {return null;}
        val = val + node.val;
        if (node.left == null && node.right == null) {
            output  = Number(val) + output;
        }
        find(node.left, val);
        find(node.right, val);
    }
    find(root, '0');
    return output;
}
module.exports = {
    sumNumbers : sumNumbers
};