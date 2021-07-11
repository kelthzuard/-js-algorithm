// 地址：https://www.nowcoder.com/practice/2b317e02f14247a49ffdbdba315459e7?tpId=117&&tqId=37828&rp=1&ru=/activity/oj&qru=/ta/job-code-high/question-ranking
// 思路：注意最后一个是零的情况 
var compareVersion = function(version1, version2) {
    version1 = version1.split(".")
    version2 = version2.split(".")
    const n1 = version1.length
    const n2 = version2.length
    for (let i = 0; (i < n1 || i < n2); i ++) {
        const v1 = i < n1?parseInt(version1[i]):0
        const v2 = i < n2?parseInt(version2[i]):0
        if (v1 != v2) return v1 > v2?1:-1
    }
    return 0
};