//思路：套用同一套模板，先全部把左子树压栈，再跳到右子树。所以只需要考虑输出元素的位置。前序在遍历左子树时输出
var buildTree = require('./buildTree.js')

function firstOrder(root) {
    var stack = []
    while(root != null || stack.length) {
        while(root != null) {
            stack.push(root)
            console.log(root.val)
            root = root.left
        }
        root = stack.pop().right
    }
}

var root = buildTree([1,2,3,4,5,6,7])
firstOrder(root)