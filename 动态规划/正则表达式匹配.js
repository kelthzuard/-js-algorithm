// 地址：https://leetcode-cn.com/problems/regular-expression-matching/
// 思路：我的自己是递归，动态规划更好，看题解

var isMatch = function(s, p) {
    const lens = s.length
    const lenp = p.length
    function regexp(starts, startp) {
        for (var i = starts, j = startp; ;) {
            if (i == lens && j == lenp) return true
            if (j >= lenp) return false
            var k = j + 1
            var sv = i >= lens?null:s[i]
            if (k >= lenp || p[k] !== '*') {
                if (p[j] !== '.' && p[j] !== sv) return false
                else {
                    j ++
                    i ++
                }
            }
            else{
                while(i < lens && (s[i] === p[j] || p[j] === '.')) {
                    if (regexp(i, j+2)) return true
                    i ++
                }
                j += 2
            }
        }
    }
    return regexp(0, 0)
};