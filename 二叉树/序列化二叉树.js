// 地址：https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/submissions/
// 思路：序列化的时候如果碰到子树是null就push null，如果碰到本身是null就不操作。
// 正常的堆的话是完全二叉树。而对于非完全二叉树。left = (n - m)*2 + 1.其中m为n前面null的数量
// 对于任何一个出现的null，他本身占了一个位置，而缺少了两个字数。所以他对于前面序列的影响为少了2，所以要减去2*m
// 对于任何一个未出现的null，他自己未占位置，且左右子树也未占位置。所以对堆序列无影响。无视即可
var serialize = function(root) {
    var queue = [root]
    var output = []
    while(queue.length) {
        let len = queue.length
        while(len > 0) {
            let node = queue.shift()
            len --
            if (node == null) { output.push(null) ; continue }
            else { output.push(node.val) }
            if (node.left != null) {queue.push(node.left)}
            else {queue.push(null)}
            if (node.right != null) {queue.push(node.right)}
            else {queue.push(null)}
        }
    }
    return output
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const n = data.length
    let numberNull = 0
    for (let i = 0; i < n; i ++) {
        if (data[i] == null) {
            numberNull ++
            continue
        }
        if (!(data[i] instanceof TreeNode)) {
            data[i] = new TreeNode(data[i])
        }
        const left = (i - numberNull)*2 + 1
        const right = (i - numberNull)*2 + 2
        //console.log(data[i].val, data[left], data[right])
        if (left < n && data[left] != null) {
            data[left] = new TreeNode(data[left])
            data[i].left = data[left]
        }
        if (right < n && data[right] != null) {
            data[right] = new TreeNode(data[right])
            data[i].right = data[right]
        }
    }
    return data[0]
};