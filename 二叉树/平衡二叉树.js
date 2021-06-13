//地址https://www.nowcoder.com/practice/8b3b95850edb4115918ecebdf1b4d222?tpId=117&tqId=37757&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
function IsBalanced_Solution(pRoot)
{
    function find(root) {
        if (root == null) {return 0;}
        let left = find(root.left);
        let right = find(root.right);
        if (left == -1 || right == -1) {return -1;}
        if (Math.abs(left-right) > 1) {
            return -1;
        }
        return Math.max(left, right) + 1; //注意加一，相当于反向加高度
    }
    return (find(pRoot) == -1)?false:true;
}
module.exports = {
    IsBalanced_Solution : IsBalanced_Solution
};