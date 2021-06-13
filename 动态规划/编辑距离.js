//地址：https://leetcode-cn.com/problems/edit-distance/submissions/
// 思路：去看题解去
//一共有三种状态
// dp[i-1][j] => dp[i][j] word1添加一个字母
// dp[i][j-1] => dp[i][j] word2添加一个字母
// dp[i-1][j-1] => dp[i][j] word1交换一个字母到dp[i][j],如果word1[i] == word2[j]则不用交换
// 初始状态dp[i][0]需要删除或者增加i个，dp[i][0] = i, dp[0][j] = j

var minDistance = function(word1, word2) {
    var n1 = word1.length
    var n2 = word2.length
    if (n1*n2 == 0) {
        return (n1 == 0)?n2:n1
    }
    var dp = new Array(n1+1).fill(0).map(() => {
        return new Array(n2+1)
    })
    for (let i = 0; i <= n1; i ++) {
        dp[i][0] = i
    }
    for (let j = 0; j <= n2; j ++) {
        dp[0][j] = j
    }
    for (let i = 1; i <= n1; i ++) {
        for (let j = 1; j <= n2; j ++) {
            let change
            if (word1[i-1] == word2[j-1]) {
                change = dp[i-1][j-1]
            }
            else {
                change = dp[i-1][j-1] + 1
            }
            dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, change)
        }
    }
    return dp[n1][n2]
};