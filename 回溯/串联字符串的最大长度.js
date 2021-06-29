// 地址：https://leetcode-cn.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
// 思路：题解是位运算，我是用一个矩阵保存两两间是否能加入的记忆矩阵，再回溯
var maxLength = function(arr) {
    const n = arr.length
    var hash = {}
    var mat = new Array(n).fill(0).map(() => {
        return new Array(n).fill(false)
    })
    for (let i = 0; i < n; i ++) {
        let s = arr[i]
        for (let t of s) {
            if (hash[t]) {
                for (let index of hash[t]) {
                    mat[index][i] = true
                    mat[i][index] = true
                }
                hash[t].push(i)
            }
            else {
                hash[t] = [i]
            }
        }
    }
    var gmax = 0
    function find(start, queList, len) {
        gmax = Math.max(len, gmax)
        for (let i = start; i < n; i ++) {
            var valid = true
            for (let index of queList) {
                if (mat[i][index]) {
                    valid = false
                    break
                }
            }
            if (valid && !mat[i][i]) {
                queList.push(i)
                len += arr[i].length
                find(i+1, queList, len)
                queList.pop()
                len -= arr[i].length
            }
        }
    }
    find(0, [], 0)
    return gmax
};