//地址：https://www.nowcoder.com/practice/7298353c24cc42e3bd5f0e0bd3d1d759?tpId=117&tqId=37841&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey

function mergeTrees( t1 ,  t2 ) {
    function find(n1, n2) {
        if (n1 == null && n2 == null) return null
        else if (n1 != null && n2 == null) return n1
        else if (n2 != null && n1 == null) return n2
        else {
            n1.val += n2.val
        }
        n1.left = find(n1.left, n2.left)
        n1.right = find(n1.right, n2.right)
        return n1
    }
    return find(t1, t2)
}
module.exports = {
    mergeTrees : mergeTrees
};