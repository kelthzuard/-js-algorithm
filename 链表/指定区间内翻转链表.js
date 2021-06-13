//地址：https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/
var reverseBetween = function(head, left, right) {
    var prev = new ListNode(null);
    prev.next = head;
    var output = prev;
    var count = 1;
    while(prev != null) {
        if (count == left) {
            let p = prev;
            let cur = prev.next
            let end = cur;
            while(count != right+1) {
                let next = cur.next;
                cur.next = p;
                p = cur;
                cur = next;
                count ++;
            }
            end.next = cur;
            prev.next = p;
            return output.next;
        }
        prev = prev.next;
        count ++;
    }
};