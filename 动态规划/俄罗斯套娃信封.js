//地址：https://leetcode-cn.com/problems/russian-doll-envelopes/solution/e-luo-si-tao-wa-xin-feng-wen-ti-by-leetc-wj68/
// 先用根据信封的第一个属性进行递增排序，再把问题转换为最长递增子序列。
// 为了解决[[1,1],[1,2],[1,3]]这种不符合题意，但在递增子序列中会满足要求的情况出现。在排序的时候如果第一个值相同，则将第二个值做递减排序。这样拍完
// [[1,3],[1,2],[1,1]]，对于递增子序列就不会出现上述情况的错误。
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a, b) => {
        if (a[0] == b[0]) {
            return b[1] - a[1];
        }
        else {
            return a[0] - b[0];
        }
    });
    var dp = new Array(envelopes.length);
    var max = 0;
    for (let i = 0; i < envelopes.length; i ++) {
        let count = 0;
        for (let j = i - 1; j >= 0; j --) {
            if (envelopes[j][1] < envelopes[i][1] && dp[j] > count) {
                count = dp[j];
            }
        }
        if (count + 1 > max) {
            max = count + 1;
        }
        dp[i] = count + 1;
    }
    return max;
};