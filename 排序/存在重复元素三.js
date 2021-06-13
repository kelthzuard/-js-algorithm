//地址：https://leetcode-cn.com/submissions/detail/168859641/
//思路：桶的思想，把数据均分到容量为t的桶中，如果桶中有元素，返回true，否则检查左右两边桶中是否有元素，如果有比较差值是否小于t
//想象一个场景，看一个两个同学生日是否小于30天，如果两个人都在同一个月，那一定是。否则可能在相邻的月中。

//桶排序思路：先把所有元素放在容量为k的桶中。k^2 = n，再对每个桶进行排序，快排等。

var containsNearbyAlmostDuplicate = function(nums, k, t) {
    function getId(n) {
        if (n > 0) {
            return Math.floor(n / (t + 1))
        }
        else {
            return Math.floor((n + 1) / (t + 1)) - 1
        }
    }
    var hash = new Map()
    for (let i = 0; i < nums.length; i ++) {
        let id = getId(nums[i])
        if (hash.has(id)) {
            return true
        }
        if (hash.has(id-1)) {
            let l = hash.get(id-1)
            if (Math.abs(l - nums[i]) <= t) {
                return true
            }
        }
        if (hash.has(id + 1)) {
            let r = hash.get(id+1)
            if (Math.abs(r - nums[i]) <= t) {
                return true
            }
        }
        hash.set(id, nums[i])
        if (i >= k) {
            hash.delete(getId(nums[i-k]))
        }
    }
    return false
};