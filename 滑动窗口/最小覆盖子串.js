// 地址：https://leetcode-cn.com/problems/minimum-window-substring/
// 思路：滑动窗口，当满足条件时从左边开始减少。
var minWindow = function(s, t) {
    var hash = {}
    for (let val of t) {
        if (hash.hasOwnProperty(val)) {
            hash[val] -= 1
        }
        else {
            hash[val] = -1
        }
    }
    var globalCount = 0
    const globalAim = t.length
    var arr = []
    var arrIndex = 0
    var globalMin = s
    for (let i = 0; i < s.length; i ++) {
        let val = s[i]
        if (hash.hasOwnProperty(val)) {
            if (hash[val] < 0) {
                hash[val] += 1
                globalCount ++
            }
            else {
                hash[val] += 1
            }
            arr.push(i)
            if (globalCount === globalAim) {
                while(hash[s[arr[arrIndex]]] > 0) {
                    hash[s[arr[arrIndex]]] --
                    arrIndex ++
                }
                if (i - arr[arrIndex] + 1 < globalMin.length) {
                    globalMin = s.slice(arr[arrIndex], i+1)
                }
            }
        }
    }
    return globalCount === globalAim?globalMin:''
};