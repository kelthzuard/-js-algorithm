//思路：依然时套模板，先将左子树全部加入，在出栈，不同的是输出出栈的值，在跳到右子树。
var buildTree = require('./buildTree.js')

function midOrder(root) {
    var stack = []
    while(root != null || stack.length) {
        while(root != null) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        console.log(root.val)
        root = root.right
    }
}

var root = buildTree([1,2,3,4,5,6,7])
midOrder(root)