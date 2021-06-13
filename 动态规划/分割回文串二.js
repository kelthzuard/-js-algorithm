// 地址：https://leetcode-cn.com/problems/palindrome-partitioning-ii/submissions/
// 思路：用两次动态规划
// 先第一次用dp拿到回文，第二次计算每个长度最小的分割次数dp
var minCut = function(s) {
    s = s.split("");
    var dp = [[true]];
    for (let i = 1; i < s.length; i ++) {
        var dp_temp = new Array(i+1);
        dp_temp[i] = true;
        for (let j = 0; j < i; j ++) {
            if (j < dp[i-1].length-1 && dp[i-1][j+1] == true && s[i] == s[j]) {
                dp_temp[j] = true
            }
            else if(j == i -1 && s[i] == s[j]) {
                dp_temp[j] = true;
            }
            else {
                dp_temp[j] = false;
            }
        }
        dp.push(dp_temp);
    }
    var dp_min = [];
    for (let i = 0; i < dp.length; i ++) {
        let min = Infinity;
        for (let j = 0; j < dp[i].length; j ++) {
            if (dp[i][j]) {
                let pre_min = (j == 0)?0:dp_min[j-1];
                if (pre_min + 1 < min) {
                    min = pre_min + 1;
                }
            }
        }
        dp_min.push(min)
    }
    // console.log(dp);
    // console.log(dp_min)
    return dp_min[dp_min.length-1]-1;
};