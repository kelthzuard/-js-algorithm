//地址：https://leetcode-cn.com/problems/rotate-list/
// 思路：先拿长度，再取模，快慢指针
var rotateRight = function(head, k) {
    if (k == 0) {
        return head
    }
    if (head == null) {
        return head
    }
    var slow = head
    var fast = head
    while(k-1 > 0) {
        fast = fast.next
        if (fast == null) {
            fast = head
        }
        k --
    }
    var prev = new ListNode()
    prev.next = head
    while(fast.next != null) {
        slow = slow.next
        fast = fast.next
        prev = prev.next
    }
    if (slow == head) {
        return head
    }
    prev.next = null
    fast.next = head
    return slow
};