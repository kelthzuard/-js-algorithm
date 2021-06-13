// 地址：https://www.nowcoder.com/practice/2cc32b88fff94d7e8fd458b8c7b25ec1?tpId=117&tqId=37836&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
// 思路：首先是零返回零，是负数取绝对值最后加上符号
// 转进制的方法是，每次取余进制，把余数填上去，再把操作数等于操作数除以进制，最后翻转数组。
function solve( M ,  N ) {
    if (M == 0) {
        return 0
    }
    let minus = false
    if (M < 0) { 
        minus = true; 
        M = Math.abs(M);
    }
    let s = '0123456789ABCDEF'; //注意这里可以是十六进制表示数。
    let output = [];
    while(M != 0) {
        output.push(s[M%N]);
        M = parseInt(M/N);
    }
    if (minus) {output.push('-');}
    return output.reverse().join("");
}
module.exports = {
    solve : solve
};