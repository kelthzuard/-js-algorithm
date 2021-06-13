//地址：https://www.nowcoder.com/practice/71cef9f8b5564579bf7ed93fbe0b2024?tpId=117&tqId=37729&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//思路：用prev节点，判断next和next.next
function deleteDuplicates( head ) {
    var prev = new ListNode(null)
    prev.next = head;
    var temp = prev;
    while(temp != null) {
        let next = temp.next
        let skip = false
        while(next != null && next.next != null && next.val == next.next.val) {
            next = next.next
            skip = true
        }
        if (skip) {
            temp.next = next.next
        }
        else {
            temp = temp.next
        }
    }
    return prev.next
}
module.exports = {
    deleteDuplicates : deleteDuplicates
};