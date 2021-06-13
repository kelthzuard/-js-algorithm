// 地址：https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/
// 用一个dp数组保存长度为i的序列的最小元素。dp[len] = Min(num)。
// 每次遍历新元素，如果大于dp[dp.length-1]，则直接push，相当于长度加一。如果小于，则用二分查找找到第一个小于元素的坐标，在坐标的下一个即
//  dp[num] < val < dp[num+1], dp[num+1] = val。相当于更新子序列长度为num+1的最小元素值。最后返回dp的长度减一。
var lengthOfLIS = function(nums) {
    function find(val, start, end) {
        if (start == end) {return start;}
        let mid = Math.floor((start+end)/2);
        if (dp[mid] >= val) {
            return find(val, start, mid-1);
        }
        else {
            return find(val, mid, end);
        }
    }
    var dp = new Array(2);
    dp[1] = nums[0];
    for (let i = 1; i < nums.length; i ++) {
        if (nums[i] > dp[dp.length-1]) {
            dp.push(nums[i]);
        }
        else {
            dp[find(nums[i],0,dp.length-1)+1] = nums[i];
        }
    }
    return dp.length-1;
};