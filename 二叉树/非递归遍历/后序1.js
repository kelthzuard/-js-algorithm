// 思路：用一个pre指针指向前一个访问过的节点。每次出栈转向时判断右子树是不是空或者访问过
// 如果不是的话就转向，如果是的话，直接出栈，并且将pre设置为当前节点，然后设置root为null，表示不用转向。

var buildTree = require('./buildTree.js')

function lastOrder(root) {
    var stack = []
    var pre = null
    while(root != null || stack.length) {
        while(root != null) {
            stack.push(root)
            root = root.left
        }
        root = stack[stack.length-1]
        if (root.right == null || root.right == pre) {
            console.log(root.val)
            pre = root
            stack.pop()
            root = null
        }
        else {
            root = root.right
        }
    }
}

var root = buildTree([1,2,3,4,5,6,7])
lastOrder(root)