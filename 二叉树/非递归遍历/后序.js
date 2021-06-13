//思路：跟中序遍历差不多，但需要记录visited值。因为父节点会先visited到，再去找右节点。最后返回的时候再输出
//具体如果没有右节点或者visited，输出并pop，如果有的话，不pop，把所有右子树的左节点都加进去，并且设visited为1
var buildTree = require('./buildTree')

function lastOrder(root) {
    var stack = []
    while(root != null) {
        stack.push({
            node: root,
            visited: 0
        })
        root = root.left
    }
    while(stack.length) {
        let cur = stack[stack.length-1]
        if (cur.node.right == null || cur.visited) {
            console.log(cur.node.val)
            stack.pop()
        }
        else {
            let node = cur.node.right
            while(node != null) {
                stack.push({
                    node: node,
                    visited: 0
                })
                node = node.left
            }
            cur.visited = 1
        }
    }
}

var root = buildTree([1,2,3,4,5,6,7])
lastOrder(root)