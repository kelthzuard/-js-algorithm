//地址：https://leetcode-cn.com/problems/linked-list-cycle-ii/submissions/
// 思路：
// 快指针走的一定是慢指针的两倍，假设相遇时快指针走了n圈
// a + n(b+c) + b = 2(a + b)
// n(b + c) - b = a
// n(b + c) - b - c + c = a
// (n - 1)(b + c) + c = a
// 结论： a 和 c的距离差为环长度的整数。
// 用另一个指针指向头，和slow同步走，他们会在交点相遇
var detectCycle = function(head) {
    if (head === null) {
        return null;
    }
    let slow = head, fast = head;
    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (fast === slow) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
};