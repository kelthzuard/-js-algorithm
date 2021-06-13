// 地址：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/submissions/
// 股票通用解发状态机，指今天做完操作结束后的状态。一般有持有，不持有状态，根据题目可能有其他状态。
function maxProfit( prices ) {
    var s1 = -prices[0]; //现在状态持有
    var s3 = 0; //现在状态不持有未买入
    var s2 = 0; //现在状态不持有卖出
    for (let i = 1; i < prices.length; i ++) {
        let s1_t = Math.max(s1, s3-prices[i]);
        let s2_t = Math.max(s2, s1+prices[i]);
        s1 = s1_t;
        s2 = s2_t;
    }
    return s2;
}
module.exports = {
    maxProfit : maxProfit
};