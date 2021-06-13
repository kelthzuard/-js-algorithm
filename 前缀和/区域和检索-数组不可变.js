 //地址：https://leetcode-cn.com/problems/range-sum-query-immutable/solution/presum-qian-zhui-he-xiang-xi-jiang-jie-b-nh23/
 // 前缀和:将每个元素的前面所有元素和算出来存储在数组中，计算两个元素差值时可以直接用两个元素的前缀和相减。
 var NumArray = function(nums) {
    this.sum = [nums[0]];
    this.nums = nums;
    for (let i = 1; i < nums.length; i ++) {
        this.sum[i] = this.sum[i-1] + nums[i]; //计算前缀和
    }
};

NumArray.prototype.sumRange = function(i, j) {
    return this.sum[j] - this.sum[i] + this.nums[i];
};