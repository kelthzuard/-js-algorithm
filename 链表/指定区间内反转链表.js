// 地址：https://www.nowcoder.com/practice/b58434e200a648c589ca2063f1faf58c?tpId=117&tqId=37726&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 思路：因为头节点可能是要反转的节点，所以用pre节点，从pre开始。

function reverseBetween( head ,  m ,  n ) {
    var origin = new ListNode(null);
    origin.next = head;
    var temp = origin;
    var count = 1;
    while(true) {
        if (count == m) {
            let tail = origin.next;
            let cur = origin.next;
            let prev = origin;
            while(count != n+1) {
                let next = cur.next;
                cur.next = prev;
                prev = cur;
                cur = next;
                count ++;
            }
            origin.next = prev;
            tail.next = cur;
            return temp.next;
        };
        count ++;
        origin = origin.next;
    }
}
module.exports = {
    reverseBetween : reverseBetween
};
