// 地址：https://www.nowcoder.com/practice/7e5b00f94b254da599a9472fe5ab283d?tpId=117&&tqId=37720&rp=1&ru=/activity/oj&qru=/ta/job-code-high/question-ranking
function sortedArrayToBST( num ) {
    function form(left, right) {
        if (left == right) return new TreeNode(num[left])
        if (left > right) return null
        const mid = Math.ceil((left + right)/2)
        var node = new TreeNode(num[mid])
        node.left = form(left, mid-1)
        node.right = form(mid+1, right)
        return node
    }
    return form(0, num.length-1)
}
module.exports = {
    sortedArrayToBST : sortedArrayToBST
};