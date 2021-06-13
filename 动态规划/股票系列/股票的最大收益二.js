// 地址：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
// 可以重复买卖，依然动态规划状态机。   
var maxProfit = function(prices) {
    var s1 = -prices[0]; //持有
    var s2 = 0; //不持有
    for (let i = 1; i < prices.length; i ++) {
        let s1_t  = Math.max(s1, s2-prices[i]);
        let s2_t = Math.max(s2, s1+prices[i]);
        s1 = s1_t;
        s2 = s2_t;
    }
    return s2;
};