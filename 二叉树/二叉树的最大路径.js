//地址：https://www.nowcoder.com/practice/da785ea0f64b442488c125b441a4ba4a?tpId=117&tqId=37716&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//思路：后序遍历，然后算总路径left+val+right一次，如果大于max置为max，然后向上返回较大的那条路径，即max(left,right)+val
function maxPathSum( root ) {
    var max = -Infinity;
    function back(node) {
        if (node == null) {
            return -Infinity
        }
        let left = back(node.left)
        let right = back(node.right)
        left = (left>0)?left:0;
        right = (right>0)?right:0;
        let sum = left + right + node.val;
        if (sum > max) {
            max = sum
        }
        return node.val + Math.max(left, right)
    }
    back(root)
    return max
}
module.exports = {
    maxPathSum : maxPathSum
};