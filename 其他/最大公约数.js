//地址：https://www.nowcoder.com/practice/cf4091ca75ca47958182dae85369c82c?tpId=188&&tqId=38574&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking
// 思路：辗转相除法
function gcd( a ,  b ) {
    if (a%b == 0) {
        return b
    }
    else {
        return gcd(b, a%b)
    }
}
module.exports = {
    gcd : gcd
};