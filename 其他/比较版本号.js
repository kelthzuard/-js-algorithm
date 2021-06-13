// 地址：https://www.nowcoder.com/practice/2b317e02f14247a49ffdbdba315459e7?tpId=117&&tqId=37828&rp=1&ru=/activity/oj&qru=/ta/job-code-high/question-ranking
// 思路：注意最后一个是零的情况 
function compare( version1 ,  version2 ) {
    var v1 = version1.split(".")
    var v2 = version2.split(".")
    while(parseInt(v1[v1.length-1]) === 0) v1.pop()
    while(parseInt(v2[v2.length-1]) === 0) v2.pop()
    for (var i = 0; i < Math.min(v1.length, v2.length); i ++) {
        var n1 = parseInt(v1[i])
        var n2 = parseInt(v2[i])
        if (n1 !== n2) {
            return n1 > n2?1:-1
        }
    }
    if (v1.length === v2.length) return 0
    return i === v1.length?-1:1
}
module.exports = {
    compare : compare
};