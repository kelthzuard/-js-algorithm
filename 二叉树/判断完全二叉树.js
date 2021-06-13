// 地址：https://www.nowcoder.com/practice/f31fc6d3caf24e7f8b4deb5cd9b5fa97?tpId=117&tqId=37822&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 两个概念
// 1. 满二叉树：节点数量 = Math.pow(w, 树层数) - 1
// 2. 完全二叉树：当一个缺少右子树的节点出现后，后面的都必须是叶子节点

function judgeIt( root ) {
    var prev = -Infinity;
    var isSear = true;
    var isComp = true;
    function middle(node, lev) { //判断是不是搜索二叉树
        if (node == null) {return ;}
        middle(node.left, lev+1)
        if (node.val < prev) {isSear = false;}
        prev = node.val
        middle(node.right, lev+1)
    }
    middle(root, 1)
    var qu = [root];
    var meet_end = false; // 用来标记后面的节点是不是必须是叶子节点
    while(qu.length > 0) { //判断是不是满二叉树
        let len = qu.length; 
        for (let i = 0; i < len; i ++) {
            let node = qu.shift()
            if (node.left != null && node.right != null) {
                if (meet_end) {return [isSear, false]}
                qu.push(node.left)
                qu.push(node.right)
            }
            else if (node.left == null && node.right != null) {
                return [isSear, false] // 这种情况直接返回false
            }
            else {
                if (node.left != null) { //左子树不为空，右子树为空一出现就标志着后面必须全为叶子节点
                    if (meet_end) {return [isSear, false]}
                    else {
                        meet_end = true
                        qu.push(node.left);
                    }
                }
                else {
                    meet_end = true;
                }
            }
        }
    }
    return [isSear, isComp]
}
module.exports = {
    judgeIt : judgeIt
};