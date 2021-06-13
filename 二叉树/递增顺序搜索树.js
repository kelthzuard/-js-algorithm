//地址：https://leetcode-cn.com/problems/increasing-order-search-tree/
//思路：记得把左子树空
var increasingBST = function(root) {
    var head = null
    var prev = null
    function mid(node) {
        if (node == null) return 
        mid(node.left)
        if (head == null) {
            head = node
        }
        node.left = null
        if (prev != null) {
            prev.right = node
        }
        prev = node
        mid(node.right)
    }
    mid(root)
    return head
};