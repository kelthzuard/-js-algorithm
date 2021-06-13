//地址https://leetcode-cn.com/problems/continuous-subarray-sum/
//思路：和 和为k的子数组和很像，但是利用前缀和中相减的两个前缀和同余构造hash表。
var checkSubarraySum = function(nums, k) {
    const m = nums.length;
    if (m < 2) {
        return false;
    }
    const map = new Map();
    map.set(0, -1);
    let remainder = 0;
    for (let i = 0; i < m; i++) {
        remainder = (remainder + nums[i]) % k;
        if (map.has(remainder)) {
            const prevIndex = map.get(remainder);
            if (i - prevIndex >= 2) {
                return true;
            }
        } else {
            map.set(remainder, i);
        }
    }
    return false;
};