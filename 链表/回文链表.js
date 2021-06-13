//地址：https://www.nowcoder.com/practice/3fed228444e740c8be66232ce8b87c2f?tpId=117&tqId=37813&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 思路：首先用快慢指针找到中间节点，在过程中翻转前段链表，最后从中间节点往两边走。注意中间节点有两种不同情况。
function isPail( head ) {
    var fast = head;
    var prev = null;
    var cur = head;
    while(fast != null && fast.next != null) {
        fast = fast.next.next;
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    if (fast == null) { //注意有两种不同的中间节点位置，分偶数和奇数，记得画图理解。
        var right = cur;
        var left = prev;
    }
    else {
        var right = cur.next;
        var left = prev;
    }
    while(right != null && left != null) {
        if (left.val != right.val) {
            return false;
        }
        right = right.next;
        left = left.next;
    }
    return true;
}
module.exports = {
    isPail : isPail
};