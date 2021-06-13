//地址：https://leetcode-cn.com/problems/binary-tree-right-side-view/
// 方法DFS：先中后右最后左的遍历，第一个在当前深度被遍历到的就是需求值
// 方法BFS：每层最后一个出栈的就是所求元素。
var rightSideView = function(root) {
    var output = [];
    function find(level, node) {
        if (node == null) {
            return;
        }    
        if (level > output.length) {
            output.push(node.val);
        }
        find(level+1, node.right);
        find(level+1, node.left);
    }
    find(1, root);
    return output;
};