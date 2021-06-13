//地址：https://leetcode-cn.com/problems/distinct-subsequences/comments/
// 思路：dp[j]代表满足前i个的子序列个数，如果s[i] == t[j+1],则dp[j]的全部子序列在加上i后都满足dp[j]
// 所以 dp[j+1] = dp[j] + dp[j+1] if (s[i] == t[j+1])
// 为了保证遍历过程中当前元素不对后序元素的影响，使用倒序遍历即可。这里为了优化时间，采用了负数跳过。
var numDistinct = function(s, t) {
    var dp = new Array(t.length).fill(-1);
    for (let i = 0; i < s.length; i ++) {
        for (let j = t.length-2; j >= 0 ; j --) {
            let t_index = j + 1
            if (s[i] == t[t_index] && dp[j] > 0) {
                dp[t_index] = dp[j] + ((dp[t_index]>0)?dp[t_index]:0);
            }
        }
        if (s[i] == t[0]) {
            dp[0]  = (dp[0]>0)?++dp[0]:1;
        }
    }
    return (dp[dp.length-1] == -1)?0:dp[dp.length-1];
};