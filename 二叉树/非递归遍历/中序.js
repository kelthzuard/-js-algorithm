//思路：初始化将根节点和所有左节点压进栈中。随后每次出栈，输出节点值，如果将右节点和右节点所有的左节点压栈。
var buildTree = require('./buildTree.js')

function midOrder(root) {
    var stack = []
    while(root != null) {
        stack.push(root)
        root = root.left
    }
    while(stack.length) {
        let node = stack.pop()
        console.log(node.val)
        node = node.right
        while(node != null) {
            stack.push(node)
            node = node.left
        }
    }
}

var root = buildTree([1,2,3,4,5,6,7])
console.log(midOrder(root))