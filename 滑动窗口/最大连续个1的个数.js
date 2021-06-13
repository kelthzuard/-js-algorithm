// 地址：https://leetcode-cn.com/problems/max-consecutive-ones-iii/
// 思路：滑动窗口
var longestOnes = function(nums, k) {
    var gmax = 0
    var ones = 0
    var zeros = 0
    var l = 0
    var r = 0
    const n = nums.length
    while(r < n) {
        while(r < n && zeros <= k) {
            
            if (nums[r] == '0') {
                ones ++
                zeros ++
            }
            else {
                ones ++
            }
            r ++
            if (zeros <= k) gmax = Math.max(gmax, ones)
        }
        while(l <= r && zeros > k) {
            if (nums[l] == '0') {
                ones --
                zeros --
            }
            else {
                ones --
            }
            l ++
        }
    }
    return gmax
};