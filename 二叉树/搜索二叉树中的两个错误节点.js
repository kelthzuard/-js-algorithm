// 地址：https://www.nowcoder.com/practice/4582efa5ffe949cc80c136eeb78795d6?tpId=117&&tqId=37820&rp=1&ru=/activity/oj&qru=/ta/job-code-high/question-ranking
// 思路：1. 每次比较node和prev，如果node < prev，第一次一定是prev错了， 第二次一定是node错了。
// 如果只有一次，说明是连续交换，第一次的prev和node都错了
function findError( root ) {
    let prev = -Infinity
    let first = null
    let second = null
    function find(node) {
        if (node == null) return
        find(node.left)
        if (node.val < prev) {
            if (first == null) {
                first = prev
                second = node.val
            }
            else {second = node.val}
        }
        prev = node.val
        find(node.right)
    }
    find(root)
    return [second, first]
}
module.exports = {
    findError : findError
};