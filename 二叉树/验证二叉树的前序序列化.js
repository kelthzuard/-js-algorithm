// 地址：https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/
// 思路：因为有空节点的从在，从而前序遍历是确定的树，通过递归遍历，检测边界条件。
var isValidSerialization = function(preorder) {
    preorder = preorder.split(",")
    function find(index) {
        if (preorder[index] == '#') { //如果遇到空节点代表这边走到底，返回索引
            return index;
        }
        if (index >= preorder.length-2) { //如果不是空节点，至少有左右两个子节点，检查边界
            return -1;
        }
        let left = find(index+1); //遍历左子树并拿到左子树遍历后的索引
        if (left != -1) {
            let right = find(left+1); //接着遍历右子树
            if (right != -1) {
                return right;
            }
            return -1;
        }
        return -1;
    }
    let r = find(0);
    if (r != -1 && r == preorder.length-1) { //遍历完成后索引一定是最后一个，如果不是则错误。
        return true;
    }
    return false;
};