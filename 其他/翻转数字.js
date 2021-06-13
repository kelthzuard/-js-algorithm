//地址：https://www.nowcoder.com/practice/35b8166c135448c5a5ba2cff8d430c32?tpId=117&tqId=37753&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//思路：每次翻转 = 翻转*10 + x%10， x = x/10
function isPalindrome( x ) {
    if (x < 0) {
        return false
    }
    let temp = x
    let re = 0
    while(temp) {
        re = re*10 + temp%10
        temp = Math.floor(temp/10)
    }
    return re == x
}
module.exports = {
    isPalindrome : isPalindrome
};