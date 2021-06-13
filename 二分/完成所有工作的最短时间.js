// 地址：https://leetcode-cn.com/problems/find-minimum-time-to-finish-all-jobs/
// 思路：和珂珂吃香蕉一样
var minimumTimeRequired = function(jobs, k) {
    const n = jobs.length
    var times = new Array(k).fill(0)
    jobs.sort((a, b) => b - a)
    function find(limit, jobStart, timeStart) {
        if (jobStart == n) return true
        let r = false
        for (let i = timeStart; i < timeStart + k; i ++) {
            let j = i % k
            if (times[j] + jobs[jobStart] <= limit) {
                times[j] += jobs[jobStart]
                r = find(limit, jobStart+1, timeStart+1)?true:r
                times[j] -= jobs[jobStart]
            }
        }
        return r
    }
    var max = 0
    var sum = jobs.reduce((sum, cur) => {
        if (cur > max) max = cur
        return sum + cur
    }, 0)
    function sort(left, right) {
        if (left >= right) {
            return left
        }
        const mid = Math.floor((left + right)/2)
        let r = find(mid, 0, 0)
        if (r) {
            return sort(left, mid)
        }
        else {
            return sort(mid+1, right)
        }
    }
    return sort(max, sum)
};