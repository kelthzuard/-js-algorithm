//地址：https://www.nowcoder.com/practice/9cf027bf54714ad889d4f30ff0ae5481?tpId=117&tqId=37796&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high%2Fquestion-ranking&tab=answerKey
//这个和力扣最长递增子序列只需要算长度不同，需要把字典序最小得最长递增序列具体元素求出来。
//一共需要求出两个值，最长序列长度maxlen和每个元素结尾得最长长度longest
//对于动态规划方法，每次算出当前元素结尾得最长长度 dp[i] = max(dp[j])+1 (0<=j<i),再在每次计算中更新maxlen得值。
//对于贪心加二分得方法，每次计算长度为k的序列的最小值时，如果直接添加，则dp[i] = arr[i]，否则dp[i]为二分查找后的替换元素的下标。
//在算出上述两个值后，倒序遍历longest，依次寻找值为maxLen且字典序最小的元素，递减直到maxlen = 0
function LIS( arr ) {
    var dp = [arr[0]]
    var longest = new Array(arr.length)
    longest[0] = 1
    function replaceMin(val, left, right) {
        if (left >= right) {
            return left
        }
        let mid = Math.floor((left+right)/2)
        if (val <= dp[mid]) {
            return replaceMin(val, left, mid)
        }
        else {
            return replaceMin(val, mid+1, right)
        }
    }
    for (let i = 1; i < arr.length; i ++) {
        let cur = arr[i]
        if (cur > dp[dp.length-1]) {
            dp.push(cur)
            longest[i] = dp.length
        }
        else {
            let index = replaceMin(cur, 0, dp.length-1)
            longest[i] = index + 1
            dp[index] = cur
        }
    }
    var maxLen = dp.length
    var index = arr.length-1
    var r = []
    while(index >= 0) {
        let min = Infinity
        while(longest[index] == maxLen && arr[index] < min) {
            min = arr[index]
            index --
        }
        if (min != Infinity) {
            r.unshift(min)
            maxLen --
        }
        else {
            index --
        }
    }
    return r
}
module.exports = {
    LIS : LIS
};
