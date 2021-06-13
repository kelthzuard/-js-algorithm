//地址：https://www.nowcoder.com/practice/840dd2dc4fbd4b2199cd48f2dadf930a?tpId=117&tqId=37718&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//思路：dfs，回溯
function pathSum( root ,  sum ) {
    var output = [];
    var result = [];
    function find(node, left) {
        if (node == null) { return; }
        result.push(node.val);
        if (node.left == null && node.right == null && node.val == left) {
            output.push(result.slice());
        }
        else {
            find(node.left, left-node.val);
            find(node.right, left-node.val);
        }
        result.pop();
    }
    find(root, sum);
    return output;
}
module.exports = {
    pathSum : pathSum
};