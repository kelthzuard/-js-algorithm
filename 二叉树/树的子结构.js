//地址：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
// 思路：在最外层递归找根节点，而不是里面
var isSubStructure = function(A, B) {
    if (B == null || A == null) return false
    function find(r1, r2) {
        if (r2 == null) return true
        else if (r1 == null) return false
        if (r1.val == r2.val) {
            let lc = find(r1.left, r2.left)
            let rc  = find(r1.right, r2.right)
            if (lc && rc) {
                return true
            }
        }
        return false
    }
    return find(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};