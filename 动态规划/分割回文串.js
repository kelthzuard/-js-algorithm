// 地址https://leetcode-cn.com/problems/palindrome-partitioning/
// 先用动态规划给出回文串的dp数组，再用dfs倒着遍历，如果是回文串将回文串添加，直到遍历完。
var partition = function(s) {
    s = s.split("");
    var dp = [[true]];
    var output = [];
    for (let i = 1; i < s.length; i ++) {
        var dp_temp = new Array(i+1);
        dp_temp[i] = true;
        for (let j = 0; j < i; j ++) {
            if (j < dp[i-1].length-1 && s[i] == s[j] && dp[i-1][j+1]) {
                dp_temp[j] = true;
            }
            else if (j == i - 1 && s[i] == s[j]) {
                dp_temp[j] = true;
            }
            else {
                dp_temp[j] = false;
            }
        }
        dp.push(dp_temp);
    }
    function dfs(cur, result) {
        if (cur < 0) {
            output.push(result.slice().reverse());
            return;
        }
        for (let i = 0; i < dp[cur].length; i ++) {
            if (dp[cur][i] == true) {
                r = result.slice();
                r.push(s.slice(i, cur+1).join(""));
                dfs(i - 1, r);
            }
        }
    }
   dfs(s.length-1, []);
   return output;
};