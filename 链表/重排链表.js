//地址：https://www.nowcoder.com/practice/3d281dc0b3704347846a110bf561ef6b?tpId=117&tqId=37712&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 思路：快慢指针找中间节点，后面翻转链表，再重组。
function reorderList( head ) {
    if (head == null) {
        return head
    }
    var output = head
    var fast = head
    var slow = head
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next
        fast = fast.next.next
    }
    var prev = null
    fast = slow.next
    while(fast != null) {
        let next = fast.next
        fast.next = prev
        prev = fast
        fast = next
    }
    slow.next = null
    while(prev != null) {
        let p_n = prev.next
        let h_n = head.next
        head.next = prev
        prev.next = h_n
        head = h_n
        prev = p_n
    }
    return output
}
module.exports = {
    reorderList : reorderList
};