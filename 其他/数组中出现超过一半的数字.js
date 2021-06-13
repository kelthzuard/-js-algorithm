// 地址：https://www.nowcoder.com/practice/e8a1b01a2df14cb2b228b30ee6a92163?tpId=117&tqId=37770&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 思路：先用维持最大出现次数的方法找到一个数，再遍历一遍看是不是众数。
function MoreThanHalfNum_Solution(numbers)
{
    var count = 0;
    var num = null;
    for (let val of numbers) {
        if (count == 0) {
            count ++;
            num = val;
        }
        else if (num == val) {
            count ++;
        }
        else {
            count --;
        }
    }
    count = 0;
    for (let val of numbers) {
        if (val == num) {
            count ++;
        }
    }
    if (count > numbers.length/2) {
        return num;
    }
    return 0
}
module.exports = {
    MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};