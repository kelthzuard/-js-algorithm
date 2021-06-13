//地址：https://www.nowcoder.com/practice/1b0b7f371eae4204bc4a7570c84c2de1?tpId=117&tqId=37724&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//思路：dfs，每次传入左节点和右节点，判断值是否相同，并且返回(left.left,right.right) && (left.right,right.left)
function isSymmetric( root ) {
    if (root == null) {
        return true
    }
    function find(left, right) {
        if (left == null && right == null) {
            return true;
        }
        if ((left == null && right != null) || (left != null && right == null)) {
            return false
        }
        if (left.val != right.val) {
            return false;
        }
        return find(left.right,right.left) && find(left.left,right.right)
    }
    return find(root.left, root.right)
}
module.exports = {
    isSymmetric : isSymmetric
};