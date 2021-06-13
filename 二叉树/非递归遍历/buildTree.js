function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

function buildTree(arr) {
    const lastRoot = Math.floor(arr.length/2 - 1)
    for (let i = 0; i <= lastRoot; i ++) {
        let node  = (arr[i] instanceof TreeNode)?arr[i]:(new TreeNode(arr[i]))
        arr[i] = node
        let left = ((i*2+1 >= arr.length) || arr[i*2+1] == '#')?null:(new TreeNode(arr[i*2+1]))
        arr[i*2+1] = left
        let right = ((i*2+2 >= arr.length) || arr[i*2+2] == '#')?null:(new TreeNode(arr[i*2+2]))
        arr[i*2+2] = right
        node.left = left
        node.right = right
    }
    return arr[0]
}

module.exports = buildTree

