// 地址：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
// 互相接上
var getIntersectionNode = function(headA, headB) {
    var a = headA
    var b = headB
    var at = false
    var bt = false
    while(true) {
        if (a == null && !at) {
            a = headB
            at = true
        }
        if (b == null && !bt) {
            b = headA
            bt = true
        }
        if (a == null || b == null) return null
        if (a == b) return a
        a = a.next
        b = b.next
    }
};