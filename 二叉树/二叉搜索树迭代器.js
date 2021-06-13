//地址：https://leetcode-cn.com/problems/binary-search-tree-iterator/
//思路：用一个栈维护，每次走到最左边，再出栈往回走
var BSTIterator = function(root) {
    this.stack = []
    while(root != null) {
        this.stack.push(root)
        root = root.left
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    if (!this.hasNext()) return
    let node = this.stack.pop()
    let right = node.right
    while(right != null) {
        this.stack.push(right)
        right = right.left
    } 
    return node.val
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0
};