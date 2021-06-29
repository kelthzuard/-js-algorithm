// 地址：https://leetcode-cn.com/problems/predict-the-winner/submissions/
// 这个关键在于理解，每一轮当前玩家都会选择尽可能对自己有利的以方一方。即Math(选择头，选择尾), 由于下一轮是另一个玩家操作，所以要减去下一轮玩家带来的收益。

var PredictTheWinner = function(nums) {
    function decide(start, end) {
        // 每一轮返回的值代表当前玩家的最大收益
        if (start > end) return 0
        var selectHead = nums[start] - decide(start+1, end) // 这里是减的原因是，下一轮是另一个玩家操作，所以是另一个玩家想要达到的最大收益，需要减去。
        var selectTail = nums[end] - decide(start, end-1)
        return Math.max(selectHead, selectTail)
    }
    return (decide(0, nums.length - 1) >= 0)
};