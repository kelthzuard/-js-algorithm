// 地址：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/submissions/
// 分清楚四种情况就行，其他一样
var maxProfit = function(prices) {
    var b1 = -prices[0]; //第一次买入
    var s1 = 0; //第一次卖出
    var b2 = -prices[0]; //第二次买入
    var s2 = 0; //第二次卖出
    for (let i = 1; i < prices.length; i ++) {
        let b1_t = Math.max(b1, 0 - prices[i]);
        let s1_t = Math.max(s1, b1 + prices[i]);
        let b2_t = Math.max(b2, s1 - prices[i]);
        let s2_t = Math.max(s2, b2 + prices[i]);
        b1 = b1_t;
        s1 = s1_t;
        b2 = b2_t;
        s2 = s2_t;
    }
    return Math.max(s1, s2);
};