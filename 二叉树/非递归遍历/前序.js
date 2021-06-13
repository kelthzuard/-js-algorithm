//思路：利用一个栈存储，每次出栈，并输出，接着压栈右节点，压栈左节点。

var buildTree = require('./buildTree.js')

function firstOrder(root) {
    var stack = [root]
    while(stack.length != 0) {
        let root = stack.pop()
        console.log(root.val)
        if (root.right) {
            stack.push(root.right)
        }
        if (root.left) {
            stack.push(root.left)
        }
    }
}

var root = buildTree([1,2,3,4,5,6,7])
firstOrder(root)