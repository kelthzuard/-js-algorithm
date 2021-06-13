//地址：https://leetcode-cn.com/problems/partition-list/
// 思路：记录小和大，最后平起来
var partition = function(head, x) {
    var short = null
    var tail = null
    var long = null
    var longhead = null
    while(head != null) {
        if (head.val < x) {
            if (short == null) {
                short = head
                tail = head
            }
            else {
                tail.next = head
                tail = tail.next
            }
            head = head.next
            tail.next = null
        }
        else {
            if (long == null) {
                longhead = head
                long = head
            }
            else {
                long.next = head
                long = long.next
            }
            head = head.next
            long.next = null
        }
    }
    if (short == null) {
        return longhead
    }
    else {
        tail.next = longhead
        return short
    }
};